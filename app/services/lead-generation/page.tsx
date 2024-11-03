import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Target, TrendingUp, Key, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lead Generation Services Dubai | B2B & Real Estate Leads",
  description: "Professional lead generation services in Dubai specializing in B2B and real estate lead generation.",
  keywords: "lead generation companies in dubai, lead generation companies in uae, real estate lead generation agency",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Lead Generation", href: "/services/lead-generation" }
];

export default function LeadGenerationPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Lead Generation Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Generate high-quality leads that convert into valuable customers
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