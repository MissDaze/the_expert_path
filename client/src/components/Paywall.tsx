import { Link } from 'wouter';
import { Button } from './ui/button';
import { Lock, Zap, Check } from 'lucide-react';

interface PaywallProps {
  title?: string;
  description?: string;
}

export function Paywall({ title = 'Premium Content', description = 'Unlock all courses and start learning today' }: PaywallProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 mb-8">{description}</p>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <div className="space-y-3 text-left mb-6">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Access all 3 expert courses</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">45 comprehensive modules</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">90+ practice exercises</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Lifetime access</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">30-day money-back guarantee</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-1">$79.95</div>
              <p className="text-gray-600 text-sm">One-time payment • Lifetime access</p>
            </div>
          </div>

          <Link href="/">
            <a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Unlock All Courses
              </Button>
            </a>
          </Link>

          <p className="text-xs text-gray-500 mt-6">
            Click to return to homepage and purchase access
          </p>
        </div>
      </div>
    </div>
  );
}
