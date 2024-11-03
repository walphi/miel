import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Brain, Bot, Cpu, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Marketing Agency Dubai | Automation & Digital Solutions",
  description: "Leading AI marketing and automation agency in Dubai. Transform your marketing with artificial intelligence.",
  keywords: "ai automation agency, ai digital marketing agency, ai digital marketing services, marketing automation dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "AI Marketing", href: "/services/ai-marketing" }
];

export default function AIMarketingPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              AI Marketing Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform your marketing with AI-powered automation and intelligent solutions
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