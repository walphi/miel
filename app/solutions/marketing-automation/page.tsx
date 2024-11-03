import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Bot, Brain, Cpu, LineChart, Zap, BarChart, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketing Automation Solutions | Miel Media",
  description: "Transform your marketing with AI-powered automation solutions. Streamline campaigns, improve efficiency, and drive better results.",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Marketing Automation", href: "/solutions/marketing-automation" }
];

export default function MarketingAutomationPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Marketing Automation Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform your marketing operations with AI-powered automation that drives results
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
      {/* Rest of the page content remains the same */}
    </main>
  );
}