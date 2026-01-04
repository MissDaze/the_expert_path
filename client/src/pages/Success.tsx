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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block animate-spin mb-4">
            <Zap className="w-16 h-16 text-green-600" />
          </div>
          <p className="text-xl font-semibold text-gray-700">Verifying your payment...</p>
          <p className="text-gray-500 mt-2">Please wait a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full animate-scale-in">
        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full mb-8 animate-bounce-slow">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-3 font-display">Payment Successful!</h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Welcome to ExpertPath! Your payment has been processed and you now have lifetime access to all courses.
          </p>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 text-left border-2 border-green-200">
            <h3 className="font-bold text-gray-900 mb-6 text-xl">You now have access to:</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="font-medium">Outlier Assessment Playbook</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="font-medium">2-Day Outlier Crash Course</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="font-medium">Git Expert Mastery (15 days)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="font-medium">Python Expert Mastery (15 days)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="font-medium">English Expert Mastery (15 days)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => navigate('/dashboard')}
              variant="success"
              size="xl"
              className="w-full"
            >
              Go to Dashboard
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="w-full"
            >
              Back to Home
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-8 leading-relaxed">
            A confirmation email has been sent to your email address. You can access your courses anytime from your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
