import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <p className="text-lg mb-8 opacity-90">The page you're looking for doesn't exist.</p>
        <Link href="/">
          <a className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
