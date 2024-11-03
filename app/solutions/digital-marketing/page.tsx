import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Brain, Search, Share2, LineChart, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/service-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Marketing Solutions Dubai | AI-Powered Marketing Services",
  description: "Transform your digital presence with our comprehensive digital marketing solutions. AI-powered strategies for measurable results.",
  keywords: "digital marketing services, digital marketing agency dubai, ai marketing solutions, marketing automation dubai",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Digital Marketing", href: "/solutions/digital-marketing" }
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Digital Marketing Solutions
            </h1>
            {/* Rest of the hero section content */}
          </div>
        </div>
      </section>
      {/* Rest of the page content */}
    </main>
  );
}