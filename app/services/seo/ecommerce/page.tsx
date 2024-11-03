import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ShoppingCart, Search, BarChart2, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce SEO Services Dubai | Online Store Optimization",
  description: "Expert e-commerce SEO services in Dubai. Optimize your online store for higher rankings and increased sales.",
  keywords: "ecommerce seo dubai, online store seo, shopify seo dubai, ecommerce optimization dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "SEO", href: "/services/seo" },
  { title: "E-commerce SEO", href: "/services/seo/ecommerce" }
];

export default function EcommerceSEOPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              E-commerce SEO Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Drive more sales with our specialized e-commerce SEO solutions
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