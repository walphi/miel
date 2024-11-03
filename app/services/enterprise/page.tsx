import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Building2, BarChart3, Users, Laptop, Shield, Zap, Brain, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enterprise Solutions | Miel Media",
  description: "Digital transformation and marketing solutions for enterprise organizations.",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Enterprise Solutions", href: "/services/enterprise" }
];

export default function EnterprisePage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Enterprise Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Comprehensive digital solutions designed for enterprise-scale organizations
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
      {/* Rest of the page content */}
    </main>
  );
}