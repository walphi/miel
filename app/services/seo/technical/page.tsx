import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Code, Globe, Zap, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technical SEO Services Dubai | Website Optimization",
  description: "Expert technical SEO services in Dubai. Optimize your website's technical foundation for better search engine rankings.",
  keywords: "technical seo dubai, website optimization, seo audit dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "SEO", href: "/services/seo" },
  { title: "Technical SEO", href: "/services/seo/technical" }
];

export default function TechnicalSEOPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Technical SEO Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Optimize your website's technical foundation for better search engine rankings
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Rest of the page content */}
    </main>
  );
}