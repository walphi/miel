import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Brain, Code, Database, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FeatureCard } from "@/components/services/feature-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programmatic SEO Services Dubai | AI-Driven SEO Solutions",
  description: "Advanced programmatic SEO services using AI and APIs. Scale your SEO efforts with automated content generation and optimization.",
  keywords: "programmatic seo, ai seo, automated seo, seo automation dubai",
};

const features = [
  {
    title: "AI Content Generation",
    description: "Automated, high-quality content creation at scale",
    icon: Brain
  },
  {
    title: "API Integration",
    description: "Seamless integration with data sources and APIs",
    icon: Code
  },
  {
    title: "Dynamic Pages",
    description: "Automated page generation and optimization",
    icon: Database
  },
  {
    title: "Automated Workflows",
    description: "Streamlined SEO processes and workflows",
    icon: Workflow
  }
];

export default function ProgrammaticSEOPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Programmatic SEO
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Scale your SEO efforts with AI-powered automation and dynamic content generation
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Explore Solutions
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
            Our Programmatic SEO Solutions
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

      {/* How It Works */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-8`}>
                How Programmatic SEO Works
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                    <p className="text-[#F5F2D0]/80">
                      Gather data from multiple sources and APIs
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Content Generation</h3>
                    <p className="text-[#F5F2D0]/80">
                      AI-powered content creation and optimization
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Page Generation</h3>
                    <p className="text-[#F5F2D0]/80">
                      Dynamic page creation with optimized structure
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F36523]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F36523] font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Monitoring & Updates</h3>
                    <p className="text-[#F5F2D0]/80">
                      Continuous monitoring and content updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="Programmatic SEO Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
            Benefits of Programmatic SEO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]">
              <h3 className="text-xl font-semibold mb-3 text-[#F5F2D0]">Scale Efficiently</h3>
              <p className="text-[#F5F2D0]/80">
                Generate thousands of optimized pages automatically
              </p>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]">
              <h3 className="text-xl font-semibold mb-3 text-[#F5F2D0]">Save Time</h3>
              <p className="text-[#F5F2D0]/80">
                Automate repetitive SEO tasks and content creation
              </p>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]">
              <h3 className="text-xl font-semibold mb-3 text-[#F5F2D0]">Stay Updated</h3>
              <p className="text-[#F5F2D0]/80">
                Keep content fresh with automated updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F36523]">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-white`}>
            Ready to Scale Your SEO?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how programmatic SEO can transform your digital presence
          </p>
          <Button size="lg" variant="outline" className="bg-white text-[#F36523] hover:bg-gray-100">
            Schedule a Demo
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}