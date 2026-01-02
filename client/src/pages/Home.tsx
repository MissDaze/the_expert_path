import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, Shield, Zap, Star } from "lucide-react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  const proceedToCheckout = async (stage: string) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stage }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      // Redirect to Stripe checkout
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to start checkout. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              EP
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">ExpertPath</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#benefits" className="text-gray-600 hover:text-primary-700 transition-colors font-medium relative group">
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-700 transition-colors font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-700 transition-colors font-medium relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-accent-700 text-white py-24 md:py-36 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display text-shadow-lg">
              From <span className="text-secondary-400">$15/hr</span> to <span className="text-accent-300">$50/hr</span>
            </h1>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
              Master the exact skills Outlier assessors want. Pass assessments. Unlock expert-tier rates.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
            <Button
              onClick={() => setActiveModal("stage1")}
              variant="gradient"
              size="xl"
              className="shadow-2xl hover:shadow-glow-lg"
            >
              Start Your Journey - Just $2.95
            </Button>
            <p className="mt-6 text-sm opacity-90 font-medium">
              ⚡ Limited-time launch pricing • 🔒 Lifetime access • ❌ No subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container">
          <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-16 font-display">
            Why Choose ExpertPath?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Lifetime Access", desc: "One-time payment. Learn forever. No subscriptions.", color: "text-primary-600" },
              { icon: CheckCircle2, title: "Trusted by Contractors", desc: "Designed by Outlier experts, for Outlier contractors.", color: "text-accent-600" },
              { icon: Zap, title: "Fast Results", desc: "15-day courses. Pass assessments. Increase earnings.", color: "text-secondary-600" },
              { icon: Star, title: "Money-Back Guarantee", desc: "Not satisfied? Full refund within 30 days.", color: "text-yellow-500" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-primary-300"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color === 'text-primary-600' ? 'from-primary-100 to-primary-200' : item.color === 'text-accent-600' ? 'from-accent-100 to-accent-200' : item.color === 'text-secondary-600' ? 'from-secondary-100 to-secondary-200' : 'from-yellow-100 to-yellow-200'} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-4 font-display">
              What You'll Master
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Everything you need to dominate Outlier assessments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "📈 Turn $15/hr Into $50/hr", desc: "Master the skills that unlock expert-tier rates." },
              { title: "🎯 Pass Assessments First Try", desc: "Insider knowledge of what Outlier assessors score." },
              { title: "💼 Unlock More Projects", desc: "More skills = More opportunities = More income." },
              { title: "⏱️ Learn in 15 Days", desc: "Intensive, focused courses designed for rapid mastery." },
              { title: "🎥 Video Interview Prep", desc: "Complete preparation for Outlier video assessments." },
              { title: "💡 Outlier Insider Secrets", desc: "Assessment strategies, scoring rubric, common mistakes." },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="relative font-bold text-gray-900 mb-3 text-xl group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-4 font-display">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Choose your path. One-time payment. Lifetime access.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Stage 1 */}
            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  2-Day Crash Course
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="line-through text-gray-400 text-lg">$9.95</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold text-secondary-600">$2.95</span>
                </div>
                <span className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Save 70%
                </span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Assessment format breakdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Scoring methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Insider strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Quick-start guides</span>
                </li>
              </ul>
              <Button
                onClick={() => setActiveModal("stage1")}
                variant="secondary"
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>

            {/* Stage 2 - Featured */}
            <div className="relative group bg-white p-8 rounded-2xl border-2 border-primary-500 shadow-2xl hover:shadow-glow-lg transition-all duration-300 scale-105 hover:scale-110">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  Assessment Playbook
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="line-through text-gray-400 text-lg">$9.95</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold text-secondary-600">$3.95</span>
                </div>
                <span className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Save 60%
                </span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Detailed scoring rubric</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>12 proven strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Common mistakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Real examples</span>
                </li>
              </ul>
              <Button
                onClick={() => setActiveModal("stage2")}
                variant="gradient"
                className="w-full"
                size="lg"
              >
                Upgrade Now
              </Button>
            </div>

            {/* Stage 3 - Best Value */}
            <div className="group bg-gradient-to-br from-primary-700 to-accent-700 text-white p-8 rounded-2xl shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Complete Expert Bundle
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="line-through text-white/70 text-lg">$249.95</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold">$79.95</span>
                </div>
                <span className="inline-block bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Save $170
                </span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-white/95">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                  <span>Git Expert (15 modules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                  <span>Python Expert (15 modules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                  <span>English Expert (15 modules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                  <span>Assessment Playbook</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                  <span>Video interview prep</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                  <span>Lifetime updates</span>
                </li>
              </ul>
              <Button
                onClick={() => setActiveModal("stage3")}
                className="w-full bg-white text-primary-700 hover:bg-gray-100 shadow-xl"
                size="lg"
              >
                Get Complete Bundle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-4 font-display">
              Success Stories
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Real contractors. Real results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stars: 5, text: "Went from $18/hr to $42/hr after completing the courses. Worth every penny.", author: "Sarah M.", role: "Outlier Contractor" },
              { stars: 5, text: "The Git course alone saved me hours of confusion. Passed the assessment on first try.", author: "James K.", role: "Software Developer" },
              { stars: 5, text: "Finally understand what Outlier assessors want. Highly recommend.", author: "Maria L.", role: "English Tutor" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.stars }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.author}</p>
                    <p className="text-gray-600 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-accent-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"></div>
        
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg font-display">
            Ready to Increase Your Outlier Earnings?
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Start with just $2.95. Lifetime access. Zero risk with our 30-day money-back guarantee.
          </p>
          <Button
            onClick={() => setActiveModal("stage1")}
            variant="gradient"
            size="xl"
            className="shadow-2xl hover:shadow-glow-lg bg-white text-primary-700 hover:bg-gray-100"
          >
            Start Your Journey Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  EP
                </div>
                <span className="text-xl font-bold">ExpertPath</span>
              </div>
              <p className="text-gray-400 leading-relaxed">The only courses designed specifically for Outlier.ai contractors.</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary-400 mb-4 text-lg">Courses</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#pricing" className="hover:text-white transition-colors">Git Expert</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Python Expert</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">English Expert</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary-400 mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary-400 mb-4 text-lg">Contact</h4>
              <a href="mailto:support@expertpath.com" className="text-gray-400 hover:text-white transition-colors">support@expertpath.com</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="mb-2">&copy; 2025 ExpertPath. All rights reserved.</p>
            <p className="text-sm">ExpertPath is not affiliated with Outlier.ai.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in" 
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="float-right text-3xl text-gray-400 hover:text-gray-700 transition-colors -mt-2 -mr-2 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
            >
              ×
            </button>
            
            {activeModal === "stage1" && (
              <>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-3 font-display">
                  2-Day Outlier Crash Course
                </h2>
                <p className="text-2xl text-secondary-600 font-bold mb-4">Just $2.95</p>
                <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Limited Time Launch Price
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Learn the assessment format, scoring system, and insider strategies from contractors earning $45+/hr.
                </p>
                <Button 
                  onClick={() => proceedToCheckout("stage1")} 
                  variant="gradient"
                  size="lg"
                  className="w-full mb-4"
                >
                  Proceed to Checkout
                </Button>
                <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure payment via Stripe • 30-day money-back guarantee
                </p>
              </>
            )}
            
            {activeModal === "stage2" && (
              <>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-3 font-display">
                  Outlier Assessment Playbook
                </h2>
                <p className="text-2xl text-secondary-600 font-bold mb-4">Just $3.95</p>
                <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Limited Time Launch Price
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Everything Outlier assessors look for. Scoring rubric, proven strategies, and common mistakes.
                </p>
                <Button 
                  onClick={() => proceedToCheckout("stage2")} 
                  variant="gradient"
                  size="lg"
                  className="w-full mb-4"
                >
                  Upgrade Now
                </Button>
                <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure payment via Stripe • 30-day money-back guarantee
                </p>
              </>
            )}
            
            {activeModal === "stage3" && (
              <>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent mb-3 font-display">
                  Complete Expert Bundle
                </h2>
                <p className="text-2xl text-secondary-600 font-bold mb-4">Just $79.95</p>
                <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Limited Time Launch Price (Save $170)
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Git + Python + English + Assessment Playbook. Everything you need to dominate Outlier.
                </p>
                <Button 
                  onClick={() => proceedToCheckout("stage3")} 
                  variant="gradient"
                  size="lg"
                  className="w-full mb-4"
                >
                  Get Complete Bundle
                </Button>
                <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure payment via Stripe • 30-day money-back guarantee
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
