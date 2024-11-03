import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Users, Share2, Target, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media Marketing Services Dubai | SMM Agency",
  description: "Expert social media marketing services in Dubai. Build your brand presence across all major platforms.",
  keywords: "social media marketing dubai, social media agency dubai, smm dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
  { title: "Social Media", href: "/services/digital-marketing/social-media" }
];

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Social Media Marketing
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Build your brand presence and engage your audience effectively
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