import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, Shield, Zap, Star } from "lucide-react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  const proceedToCheckout = (stage: string) => {
    alert(`Stripe checkout for stage: ${stage}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-100 border-b border-border bg-white">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
              EP
            </div>
            <span className="text-xl font-bold text-primary">ExpertPath</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#benefits" className="text-gray-600 hover:text-primary transition">Benefits</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition">Testimonials</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20 md:py-32">
        <div className="container max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            From $15/hr to $50/hr
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Master the exact skills Outlier assessors want. Pass assessments. Unlock expert-tier rates.
          </p>
          <Button
            onClick={() => setActiveModal("stage1")}
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Start Your Journey - Just $2.95
          </Button>
          <p className="mt-4 text-sm opacity-90">
            Limited-time launch pricing. Lifetime access. No subscriptions.
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-light py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-primary mb-12">Why Choose ExpertPath?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Lifetime Access", desc: "One-time payment. Learn forever. No subscriptions." },
              { icon: CheckCircle2, title: "Trusted by Contractors", desc: "Designed by Outlier experts, for Outlier contractors." },
              { icon: Zap, title: "Fast Results", desc: "15-day courses. Pass assessments. Increase earnings." },
              { icon: Star, title: "Money-Back Guarantee", desc: "Not satisfied? Full refund within 30 days." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-border text-center hover:shadow-lg transition">
                <item.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">What You'll Master</h2>
            <p className="text-gray-600 text-lg">Everything you need to dominate Outlier assessments</p>
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
              <div key={i} className="p-6 border-2 border-border rounded-lg hover:border-secondary transition">
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-light py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">Choose your path. One-time payment. Lifetime access.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">2-Day Crash Course</h3>
              <div className="mb-4">
                <span className="line-through text-gray-400">$9.95</span>
                <div className="text-4xl font-bold text-secondary">$2.95</div>
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">Save 70%</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Assessment format breakdown</li>
                <li>✓ Scoring methodology</li>
                <li>✓ Insider strategies</li>
                <li>✓ Quick-start guides</li>
              </ul>
              <Button
                onClick={() => setActiveModal("stage1")}
                className="w-full bg-secondary hover:bg-orange-600 text-white"
              >
                Get Started
              </Button>
            </div>

            {/* Stage 2 - Featured */}
            <div className="bg-white p-8 rounded-lg border-2 border-secondary shadow-lg scale-105">
              <h3 className="text-xl font-bold text-primary mb-4">Assessment Playbook</h3>
              <div className="mb-4">
                <span className="line-through text-gray-400">$9.95</span>
                <div className="text-4xl font-bold text-secondary">$3.95</div>
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">Save 60%</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Detailed scoring rubric</li>
                <li>✓ 12 proven strategies</li>
                <li>✓ Common mistakes</li>
                <li>✓ Real examples</li>
              </ul>
              <Button
                onClick={() => setActiveModal("stage2")}
                className="w-full bg-secondary hover:bg-orange-600 text-white"
              >
                Upgrade Now
              </Button>
            </div>

            {/* Stage 3 - Best Value */}
            <div className="bg-white p-8 rounded-lg border-2 border-secondary shadow-lg scale-105">
              <h3 className="text-xl font-bold text-primary mb-4">Complete Expert Bundle</h3>
              <div className="mb-4">
                <span className="line-through text-gray-400">$249.95</span>
                <div className="text-4xl font-bold text-secondary">$79.95</div>
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">Save $170</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Git Expert (15 modules)</li>
                <li>✓ Python Expert (15 modules)</li>
                <li>✓ English Expert (15 modules)</li>
                <li>✓ Assessment Playbook</li>
                <li>✓ Video interview prep</li>
                <li>✓ Lifetime updates</li>
              </ul>
              <Button
                onClick={() => setActiveModal("stage3")}
                className="w-full bg-secondary hover:bg-orange-600 text-white"
              >
                Get Complete Bundle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Success Stories</h2>
            <p className="text-gray-600 text-lg">Real contractors. Real results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stars: 5, text: "Went from $18/hr to $42/hr after completing the courses. Worth every penny.", author: "Sarah M.", role: "Outlier Contractor" },
              { stars: 5, text: "The Git course alone saved me hours of confusion. Passed the assessment on first try.", author: "James K.", role: "Software Developer" },
              { stars: 5, text: "Finally understand what Outlier assessors want. Highly recommend.", author: "Maria L.", role: "English Tutor" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-border">
                <div className="text-yellow-400 mb-2">{"★".repeat(item.stars)}</div>
                <p className="text-gray-700 italic mb-4">{item.text}</p>
                <p className="font-bold text-primary">{item.author}</p>
                <p className="text-gray-600 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Increase Your Outlier Earnings?</h2>
          <p className="text-lg mb-8 opacity-95">Start with just $2.95. Lifetime access. Zero risk with our 30-day money-back guarantee.</p>
          <Button
            onClick={() => setActiveModal("stage1")}
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-6 text-lg"
          >
            Start Your Journey Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-secondary mb-4">ExpertPath</h4>
              <p className="text-gray-400">The only courses designed specifically for Outlier.ai contractors.</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#pricing" className="hover:text-white">Git Expert</a></li>
                <li><a href="#pricing" className="hover:text-white">Python Expert</a></li>
                <li><a href="#pricing" className="hover:text-white">English Expert</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/refund" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-4">Contact</h4>
              <a href="mailto:support@expertpath.com" className="text-gray-400 hover:text-white">support@expertpath.com</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ExpertPath. All rights reserved.</p>
            <p className="text-sm mt-2">ExpertPath is not affiliated with Outlier.ai.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="float-right text-2xl text-gray-400 hover:text-gray-600">×</button>
            
            {activeModal === "stage1" && (
              <>
                <h2 className="text-2xl font-bold text-primary mb-2">2-Day Outlier Crash Course</h2>
                <p className="text-lg text-secondary font-bold mb-4">Just $2.95 - Limited Time Launch Price</p>
                <p className="text-gray-600 mb-6">Learn the assessment format, scoring system, and insider strategies from contractors earning $45+/hr.</p>
                <Button onClick={() => proceedToCheckout("stage1")} className="w-full bg-secondary hover:bg-orange-600 text-white mb-4">
                  Proceed to Checkout
                </Button>
                <p className="text-center text-sm text-gray-600">Secure payment via Stripe. 30-day money-back guarantee.</p>
              </>
            )}
            
            {activeModal === "stage2" && (
              <>
                <h2 className="text-2xl font-bold text-primary mb-2">Outlier Assessment Playbook</h2>
                <p className="text-lg text-secondary font-bold mb-4">Just $3.95 - Limited Time Launch Price</p>
                <p className="text-gray-600 mb-6">Everything Outlier assessors look for. Scoring rubric, proven strategies, and common mistakes.</p>
                <Button onClick={() => proceedToCheckout("stage2")} className="w-full bg-secondary hover:bg-orange-600 text-white mb-4">
                  Upgrade Now
                </Button>
                <p className="text-center text-sm text-gray-600">Secure payment via Stripe. 30-day money-back guarantee.</p>
              </>
            )}
            
            {activeModal === "stage3" && (
              <>
                <h2 className="text-2xl font-bold text-primary mb-2">Complete Expert Bundle</h2>
                <p className="text-lg text-secondary font-bold mb-4">Just $79.95 - Limited Time Launch Price (Save $170)</p>
                <p className="text-gray-600 mb-6">Git + Python + English + Assessment Playbook. Everything you need to dominate Outlier.</p>
                <Button onClick={() => proceedToCheckout("stage3")} className="w-full bg-secondary hover:bg-orange-600 text-white mb-4">
                  Get Complete Bundle
                </Button>
                <p className="text-center text-sm text-gray-600">Secure payment via Stripe. 30-day money-back guarantee.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
