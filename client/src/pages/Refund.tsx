export default function Refund() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
          <p className="text-lg opacity-90">ExpertPath - Outlier Expert Courses</p>
        </div>
      </div>

      <div className="container max-w-3xl py-12">
        <div className="bg-yellow-50 border-l-4 border-secondary p-6 rounded mb-8">
          <strong className="text-secondary">30-Day Money-Back Guarantee:</strong> We're confident in our courses. If you're not satisfied for any reason within 30 days of purchase, we'll refund your money. No questions asked.
        </div>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">1. Refund Eligibility</h2>
        <p className="text-gray-700 mb-4">You are eligible for a full refund if you request it within 30 days of your purchase date and have not accessed more than 50% of the course materials.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">2. Non-Refundable Circumstances</h2>
        <p className="text-gray-700 mb-4">Refunds may not be available if requests are made more than 30 days after purchase or if you have accessed more than 50% of the course content.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">3. How to Request a Refund</h2>
        <p className="text-gray-700 mb-4">Email us at support@expertpath.com with your order number and reason for the refund request. We will respond within 5 business days.</p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-secondary pb-2">4. Refund Processing</h2>
        <p className="text-gray-700 mb-4">Once approved, refunds are processed to your original payment method within 5-10 business days. Your course access will be revoked immediately.</p>

        <div className="mt-12 p-6 bg-light rounded-lg">
          <p className="text-gray-700">We want you to succeed. If you're not happy with your purchase, contact us before requesting a refund.</p>
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
