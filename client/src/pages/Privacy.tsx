export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-accent-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display text-shadow-lg">Privacy Policy</h1>
            <p className="text-xl opacity-95">ExpertPath - Outlier Expert Courses</p>
          </div>
        </div>
      </div>

      <div className="container max-w-3xl py-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 animate-fade-in-up">
          <strong className="text-gray-900 text-lg">Last Updated:</strong> <span className="text-gray-700">December 22, 2025</span>
        </div>

        <div className="space-y-12">
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              1. Introduction
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                ExpertPath is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              2. Information We Collect
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                We collect information you voluntarily provide when you create an account, purchase a course, or contact us.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              3. How We Use Your Information
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                We use your information to provide and maintain our Service, process purchases, and improve our website.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              4. Data Security
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              5. Your Rights
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-lg border border-primary-200 p-8 animate-fade-in-up" style={{animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards'}}>
          <p className="text-gray-800 leading-relaxed">
            For questions about our privacy practices, please contact{' '}
            <a href="mailto:support@expertpath.com" className="text-primary-700 hover:text-primary-900 font-semibold underline underline-offset-2 transition-colors">
              support@expertpath.com
            </a>
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container text-center">
          <p className="mb-3">&copy; 2025 ExpertPath. All rights reserved.</p>
          <p className="text-sm">
            <a href="/" className="text-secondary-400 hover:text-secondary-300 font-semibold transition-colors">
              ← Back to Home
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
