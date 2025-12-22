export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-lg opacity-90">ExpertPath - Outlier Expert Courses</p>
        </div>
      </div>

      <div className="container max-w-3xl py-12">
        <div className="bg-light p-6 rounded-lg mb-8">
          <strong>Last Updated:</strong> December 22, 2025
        </div>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">By accessing and using the ExpertPath website and courses (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">2. Use License</h2>
        <p className="text-gray-700 mb-4">Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">3. Disclaimer</h2>
        <p className="text-gray-700 mb-4">The materials on ExpertPath are provided on an 'as is' basis. ExpertPath makes no warranties, expressed or implied.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">4. Limitations</h2>
        <p className="text-gray-700 mb-4">In no event shall ExpertPath or its suppliers be liable for any damages arising out of the use or inability to use the materials.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">5. Governing Law</h2>
        <p className="text-gray-700 mb-4">These terms are governed by the laws of the United States and Australia.</p>

        <div className="mt-12 p-6 bg-light rounded-lg">
          <p className="text-gray-700">For full terms, please contact <a href="mailto:support@expertpath.com" className="text-primary hover:underline">support@expertpath.com</a></p>
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
