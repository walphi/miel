import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { FileText, Pencil, Target, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Marketing Services Dubai | Content Strategy",
  description: "Professional content marketing services in Dubai. Create engaging content that drives results.",
  keywords: "content marketing dubai, content strategy dubai, content creation dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
  { title: "Content Marketing", href: "/services/digital-marketing/content" }
];

export default function ContentMarketingPage() {
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
              Content Marketing Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Create compelling content that engages your audience and drives conversions
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