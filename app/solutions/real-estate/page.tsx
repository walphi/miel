import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Building, Target, BarChart, Search, Megaphone, UserCheck, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate Marketing Solutions | Miel Media",
  description: "Specialized digital marketing solutions for real estate professionals and property developers.",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Real Estate", href: "/solutions/real-estate" }
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-[#F3F0CE]">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Real Estate Marketing Solutions
            </h1>
            <p className="text-xl mb-8">
              Elevate your real estate presence with our specialized digital marketing strategies designed for property professionals.
            </p>
            <Button className="button-primary">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Comprehensive Real Estate Marketing</h2>
            <p className="text-[#F3F0CE]">
              Our tailored solutions help real estate professionals showcase properties effectively and connect with qualified buyers and investors through innovative digital strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Property Showcase",
                description: "Professional property presentations with virtual tours and high-quality media"
              },
              {
                icon: Target,
                title: "Targeted Marketing",
                description: "Reach qualified buyers and investors through precise audience targeting"
              },
              {
                icon: BarChart,
                title: "Market Analysis",
                description: "Data-driven insights into market trends and buyer behavior"
              },
              {
                icon: Megaphone,
                title: "Brand Building",
                description: "Establish a strong digital presence in the real estate market"
              },
              {
                icon: Globe,
                title: "Digital Presence",
                description: "Optimized online listings and property websites"
              },
              {
                icon: Mail,
                title: "Lead Generation",
                description: "Automated systems to capture and nurture potential buyers"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-zinc-900 rounded-lg">
                <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#F3F0CE]">{feature.title}</h3>
                <p className="text-[#F3F0CE]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our Real Estate Marketing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Market Analysis",
                description: "Research your target market and property positioning"
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create customized marketing plans for your properties"
              },
              {
                step: "03",
                title: "Content Creation",
                description: "Develop engaging property presentations and marketing materials"
              },
              {
                step: "04",
                title: "Campaign Management",
                description: "Execute and optimize your marketing campaigns"
              }
            ].map((step, index) => (
              <div key={index} className="p-6 bg-zinc-900 rounded-lg">
                <div className="text-4xl font-bold text-orange-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2 text-[#F3F0CE]">{step.title}</h3>
                <p className="text-[#F3F0CE]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Transform Your Real Estate Marketing?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Let's discuss how our specialized solutions can help you showcase properties and reach the right buyers.
          </p>
          <Button className="button-primary">Contact Us Today</Button>
        </div>
      </section>
    </main>
  );
}