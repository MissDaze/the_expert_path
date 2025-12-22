export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-lg opacity-90">ExpertPath - Outlier Expert Courses</p>
        </div>
      </div>

      <div className="container max-w-3xl py-12">
        <div className="bg-light p-6 rounded-lg mb-8">
          <strong>Last Updated:</strong> December 22, 2025
        </div>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">1. Introduction</h2>
        <p className="text-gray-700 mb-4">ExpertPath is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">2. Information We Collect</h2>
        <p className="text-gray-700 mb-4">We collect information you voluntarily provide when you create an account, purchase a course, or contact us.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">3. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">We use your information to provide and maintain our Service, process purchases, and improve our website.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">4. Data Security</h2>
        <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your personal information.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">You have the right to access, correct, or delete your personal information at any time.</p>

        <div className="mt-12 p-6 bg-light rounded-lg">
          <p className="text-gray-700">For questions about our privacy practices, please contact <a href="mailto:support@expertpath.com" className="text-primary hover:underline">support@expertpath.com</a></p>
        </div>
      </div>

      <footer className="bg-dark text-white py-8 mt-12">
        <div className="container text-center">
          <p>&copy; 2025 ExpertPath. All rights reserved.</p>
          <p className="text-sm mt-2"><a href="/" className="text-secondary hover:underline">Back to Home</a></p>
        </div>
      </footer>
    </div>
  );
}
