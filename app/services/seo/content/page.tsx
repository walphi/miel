import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { FileText, Search, Target, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO Content Services Dubai | Content Optimization",
  description: "Professional SEO content services in Dubai. Create and optimize content that ranks and converts.",
  keywords: "seo content dubai, content optimization, seo writing dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "SEO", href: "/services/seo" },
  { title: "Content SEO", href: "/services/seo/content" }
];

export default function ContentSEOPage() {
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
              Content SEO Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Create and optimize content that ranks and converts
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