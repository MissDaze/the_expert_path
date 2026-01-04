export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-accent-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display text-shadow-lg">Terms of Service</h1>
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
              1. Acceptance of Terms
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the ExpertPath website and courses (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              2. Use License
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              3. Disclaimer
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                The materials on ExpertPath are provided on an 'as is' basis. ExpertPath makes no warranties, expressed or implied.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              4. Limitations
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                In no event shall ExpertPath or its suppliers be liable for any damages arising out of the use or inability to use the materials.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-4 border-primary-500">
              5. Governing Law
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by the laws of the United States and Australia.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-lg border border-primary-200 p-8 animate-fade-in-up" style={{animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards'}}>
          <p className="text-gray-800 leading-relaxed">
            For full terms, please contact{' '}
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
