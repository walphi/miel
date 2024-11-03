import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Search, BarChart2, Globe, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FeatureCard } from "@/components/services/feature-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO Services Dubai | Professional Search Engine Optimization",
  description: "Expert SEO services in Dubai. Improve your search rankings and drive organic traffic with our data-driven SEO strategies.",
  keywords: "seo services dubai, dubai seo, search engine optimization dubai, digital marketing dubai",
};

const features = [
  {
    title: "Technical SEO",
    description: "Optimize your website's technical foundation for search engines",
    icon: Globe
  },
  {
    title: "Content Optimization",
    description: "Strategic content optimization for better rankings",
    icon: Search
  },
  {
    title: "Performance Tracking",
    description: "Comprehensive SEO analytics and reporting",
    icon: BarChart2
  },
  {
    title: "Growth Strategy",
    description: "Long-term SEO strategies for sustainable growth",
    icon: Rocket
  }
];

export default function SEOPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Search Engine Optimization
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Drive organic traffic and improve your search rankings with our data-driven SEO strategies
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Start Optimizing
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
            Our SEO Services
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

      {/* Process Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-8`}>
                Our SEO Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Audit</h3>
                    <p className="text-[#F5F2D0]/80">
                      Comprehensive analysis of your website's technical SEO elements
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Keyword Research</h3>
                    <p className="text-[#F5F2D0]/80">
                      Strategic keyword analysis and targeting
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Content Optimization</h3>
                    <p className="text-[#F5F2D0]/80">
                      SEO-focused content creation and optimization
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                    <p className="text-[#F5F2D0]/80">
                      Continuous monitoring and optimization of SEO performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="SEO Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F36523]">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-white`}>
            Ready to Improve Your Search Rankings?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's create an SEO strategy that drives organic growth for your business
          </p>
          <Button size="lg" variant="outline" className="bg-white text-[#F36523] hover:bg-gray-100">
            Get Your SEO Audit
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}