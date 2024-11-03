import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Building2, MapPin, Search, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FeatureCard } from "@/components/services/feature-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate SEO Services Dubai | Property Marketing SEO",
  description: "Specialized real estate SEO services in Dubai. Optimize your property listings and real estate website for better visibility and leads.",
  keywords: "real estate seo dubai, property marketing seo, real estate marketing dubai, property website optimization",
};

const features = [
  {
    title: "Property Optimization",
    description: "Optimize property listings and pages for maximum visibility",
    icon: Building2
  },
  {
    title: "Local SEO",
    description: "Area-specific optimization for property searches",
    icon: MapPin
  },
  {
    title: "Keyword Strategy",
    description: "Real estate focused keyword research",
    icon: Search
  },
  {
    title: "Performance Tracking",
    description: "Track rankings and lead generation",
    icon: LineChart
  }
];

const specializations = [
  {
    title: "Luxury Properties",
    description: "Specialized SEO for high-end real estate",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    title: "Property Developments",
    description: "SEO for new developments and off-plan properties",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
  },
  {
    title: "Real Estate Agencies",
    description: "Agency website and listing optimization",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
  }
];

export default function RealEstateSEOPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Real Estate SEO Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Optimize your property listings and real estate website for better visibility
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
            Our Real Estate SEO Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
            Our Specializations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec) => (
              <div key={spec.title} className="relative group overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{spec.title}</h3>
                    <p className="text-white/80">{spec.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F36523]">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-white`}>
            Ready to Improve Your Property Visibility?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's optimize your real estate website and listings for better search rankings
          </p>
          <Button size="lg" variant="outline" className="bg-white text-[#F36523] hover:bg-gray-100">
            Schedule a Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}