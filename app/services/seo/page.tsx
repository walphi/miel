import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Search, BarChart3, Globe, ArrowUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO Services Dubai | Professional Search Engine Optimization",
  description: "Leading SEO company in Dubai offering comprehensive search engine optimization services. Improve your rankings and drive organic traffic.",
  keywords: "seo services dubai, dubai seo, seo company dubai, digital marketing dubai, website optimization",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "SEO Services", href: "/services/seo" }
];

export default function SEOPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              SEO Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Drive organic traffic and improve your search rankings with our data-driven SEO strategies
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Rest of the SEO page content remains the same */}
      {/* ... */}
    </main>
  );
}