export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Disclaimer</h1>
          <p className="text-lg opacity-90">ExpertPath - Outlier Expert Courses</p>
        </div>
      </div>

      <div className="container max-w-3xl py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-8">
          <strong className="text-red-700">Important Disclaimer:</strong> Please read this disclaimer carefully before using ExpertPath courses and services.
        </div>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">1. No Guarantee of Results</h2>
        <p className="text-gray-700 mb-4">ExpertPath provides educational courses designed to help you prepare for Outlier.ai assessments. However, we do not guarantee that you will pass assessments, increase your hourly rate, or be accepted by Outlier.ai.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">2. Not Affiliated with Outlier.ai</h2>
        <p className="text-gray-700 mb-4">ExpertPath is not affiliated with, endorsed by, or connected to Outlier.ai. We are an independent educational platform.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">3. Course Content Accuracy</h2>
        <p className="text-gray-700 mb-4">While we strive to provide accurate information, we do not warrant that all course content is completely accurate or that materials reflect current Outlier.ai assessment formats.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">4. No Liability for Outcomes</h2>
        <p className="text-gray-700 mb-4">ExpertPath is not liable for failure to pass assessments, loss of income, or any other indirect or consequential damages.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">5. User Responsibility</h2>
        <p className="text-gray-700 mb-4">You are responsible for verifying information independently and ensuring your use complies with all applicable laws.</p>

        <div className="mt-12 p-6 bg-red-50 rounded-lg">
          <strong className="text-red-700">By using ExpertPath, you acknowledge that you have read and agree to be bound by this disclaimer.</strong>
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
