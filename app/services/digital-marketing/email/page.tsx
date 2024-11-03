import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Mail, Send, Target, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Marketing Services Dubai | Marketing Automation",
  description: "Professional email marketing services in Dubai. Drive engagement with targeted email campaigns.",
  keywords: "email marketing dubai, email automation dubai, marketing automation dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
  { title: "Email Marketing", href: "/services/digital-marketing/email" }
];

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Email Marketing Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Drive engagement and conversions with targeted email marketing campaigns
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