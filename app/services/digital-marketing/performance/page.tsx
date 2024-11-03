import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { LineChart, Target, BarChart2, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Performance Marketing Services Dubai | ROI-Driven Marketing",
  description: "Data-driven performance marketing services in Dubai. Maximize ROI with targeted campaigns.",
  keywords: "performance marketing dubai, roi marketing dubai, digital advertising dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
  { title: "Performance Marketing", href: "/services/digital-marketing/performance" }
];

export default function PerformanceMarketingPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Performance Marketing
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Drive measurable results with data-driven performance marketing strategies
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