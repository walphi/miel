import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ShoppingBag, Search, BarChart2, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FeatureCard } from "@/components/services/feature-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopify SEO Services Dubai | E-commerce SEO Experts",
  description: "Specialized Shopify SEO services in Dubai. Optimize your Shopify store for higher rankings and increased sales.",
  keywords: "shopify seo dubai, ecommerce seo dubai, shopify optimization, shopify marketing dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "SEO", href: "/services/seo" },
  { title: "Shopify SEO", href: "/services/seo/shopify" }
];

export default function ShopifySEOPage() {
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
              Shopify SEO Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Specialized SEO solutions to help your Shopify store rank higher and sell more
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Get Your Store Audit
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Rest of the page content */}
    </main>
  );
}