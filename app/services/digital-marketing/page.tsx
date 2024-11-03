import { Playfair_Display } from "next/font/google";
import { Brain, Target, BarChart3, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ServiceCard } from "@/components/services/service-card";
import { StatCard } from "@/components/services/stat-card";
import { CaseStudyCard } from "@/components/services/case-study-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Digital Marketing", href: "/services/digital-marketing" }
];

const caseStudies = [
  {
    title: "Enterprise Digital Transformation",
    description: "Complete digital overhaul for a Fortune 500 company",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    results: [
      "300% increase in online engagement",
      "50% reduction in marketing costs",
      "2x increase in qualified leads"
    ]
  },
  {
    title: "Real Estate Marketing Success",
    description: "AI-powered marketing campaign for luxury properties",
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
    results: [
      "200% increase in property inquiries",
      "45% higher conversion rate",
      "4x ROI on marketing spend"
    ]
  }
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Digital Marketing Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform your digital presence with data-driven marketing strategies
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-[#F5F2D0]`}>
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                description={study.description}
                results={study.results}
                imageUrl={study.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}