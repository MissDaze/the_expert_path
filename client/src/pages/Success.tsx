import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap } from 'lucide-react';
import { usePayment } from '@/contexts/PaymentContext';

export default function Success() {
  const [, navigate] = useLocation();
  const { setPaid } = usePayment();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get session ID from URL
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');

    if (sessionId) {
      // Verify payment with backend
      fetch(`/api/checkout/${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'paid') {
            // Mark user as paid with courses from response
            const courses = data.courses || ['outlier-tips', 'one-day-course', 'git-expert', 'python-expert', 'english-expert'];
            setPaid(true, courses);
            setIsLoading(false);
          } else {
            // Payment not completed
            navigate('/');
          }
        })
        .catch((error) => {
          console.error('Error verifying payment:', error);
          // On error, redirect to home
          navigate('/');
        });
    } else {
      // No session ID, redirect to home
      navigate('/');
    }
  }, [setPaid, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <Zap className="w-12 h-12 text-green-600" />
          </div>
          <p className="mt-4 text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Welcome to ExpertPath! Your payment has been processed and you now have lifetime access to all courses.
          </p>

          <div className="bg-green-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-gray-900 mb-4">You now have access to:</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Outlier Assessment Playbook</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>2-Day Outlier Crash Course</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Git Expert Mastery (15 days)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Python Expert Mastery (15 days)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>English Expert Mastery (15 days)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
            >
              Go to Dashboard
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="w-full text-gray-700 border-gray-300"
            >
              Back to Home
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            A confirmation email has been sent to your email address. You can access your courses anytime from your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
