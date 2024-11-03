'use client';

import { Playfair_Display } from "next/font/google";
import { PricingCard } from "./pricing-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

const pricingPlans = [
  {
    title: "Starter",
    description: "Perfect for small businesses or startups looking to kickstart their digital marketing efforts",
    price: "9,950",
    features: [
      "Social media management",
      "Email marketing campaigns",
      "Basic SEO optimization",
      "Monthly performance reports"
    ],
    stripeLink: "https://buy.stripe.com/starter-plan"
  },
  {
    title: "Pro",
    description: "Ideal for growing businesses that want to expand their online presence and reach a larger audience",
    price: "14,950",
    features: [
      "Everything in Starter plan",
      "Advanced social media management",
      "Email marketing automation",
      "Basic SEO optimization",
      "Comprehensive SEO analysis and recommendations"
    ],
    stripeLink: "https://buy.stripe.com/pro-plan"
  },
  {
    title: "Enterprise",
    description: "Tailored for established businesses seeking a holistic digital marketing solution to boost brand visibility and engagement",
    price: "29,950",
    features: [
      "Everything in Pro plan",
      "Customized social media strategies",
      "Personalized email marketing campaigns",
      "Advanced SEO implementation and monitoring",
      "Bi-weekly performance reports and strategy consultations"
    ],
    stripeLink: "https://buy.stripe.com/enterprise-plan"
  }
];

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-[#2A2A2A]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6 text-[#F5F2D0]`}>
            Pricing Plans
          </h2>
          <p className="text-xl text-[#F5F2D0]/80 max-w-2xl mx-auto">
            Choose the perfect plan to transform your digital presence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}