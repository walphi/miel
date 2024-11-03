import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { MapPin, Star, Building, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Local SEO Services Dubai | Local Search Optimization",
  description: "Expert local SEO services in Dubai. Improve your local search visibility and attract more local customers.",
  keywords: "local seo dubai, local search optimization, google my business dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "SEO", href: "/services/seo" },
  { title: "Local SEO", href: "/services/seo/local" }
];

export default function LocalSEOPage() {
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
              Local SEO Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Improve your local search visibility and attract more customers in your area
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