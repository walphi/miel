import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Brain, Code, Database, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FeatureCard } from "@/components/services/feature-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programmatic SEO Services Dubai | AI-Driven SEO Solutions",
  description: "Advanced programmatic SEO services using AI and APIs. Scale your SEO efforts with automated content generation and optimization.",
  keywords: "programmatic seo, ai seo, automated seo, seo automation dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "SEO", href: "/services/seo" },
  { title: "Programmatic SEO", href: "/services/seo/programmatic" }
];

export default function ProgrammaticSEOPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
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
      {/* Rest of the page content */}
    </main>
  );
}