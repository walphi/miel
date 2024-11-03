import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Building2, TrendingUp, Key, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dubai Real Estate Marketing Agency | Property Investment Services",
  description: "Expert real estate marketing agency in Dubai specializing in luxury properties, investment opportunities, and property market analysis. Get started today.",
  keywords: "dubai real estate agents, dubai property investment, dubai luxury properties, dubai real estate market, real estate marketing agency dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Real Estate Marketing", href: "/services/real-estate" }
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Real Estate Marketing
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform your property marketing with AI-powered solutions and expert strategies
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}