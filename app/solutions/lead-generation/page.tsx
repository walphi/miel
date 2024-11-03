import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Target, Users, BarChart, Search, Filter, UserCheck, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lead Generation Solutions | Miel Media",
  description: "Generate high-quality leads with our proven lead generation strategies and solutions.",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Lead Generation", href: "/solutions/lead-generation" }
];

export default function LeadGenerationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-[#F3F0CE]">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Lead Generation Solutions
            </h1>
            <p className="text-xl mb-8">
              Transform your business growth with our AI-powered lead generation strategies that deliver qualified prospects directly to your pipeline.
            </p>
            <Button className="button-primary">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Innovative Lead Generation Strategies</h2>
            <p className="text-[#F3F0CE]">
              Our comprehensive lead generation solutions combine cutting-edge AI technology with proven marketing strategies to help you attract, qualify, and convert high-value prospects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Targeted Campaigns",
                description: "Reach your ideal customers with precision-targeted marketing campaigns"
              },
              {
                icon: Filter,
                title: "Lead Qualification",
                description: "AI-powered scoring system to identify and prioritize the most promising leads"
              },
              {
                icon: BarChart,
                title: "Performance Tracking",
                description: "Real-time analytics and reporting to optimize your lead generation efforts"
              },
              {
                icon: UserCheck,
                title: "Lead Nurturing",
                description: "Automated workflows to guide prospects through your sales funnel"
              },
              {
                icon: Search,
                title: "Market Research",
                description: "Deep insights into your target market and competitor analysis"
              },
              {
                icon: Mail,
                title: "Multi-Channel Approach",
                description: "Integrated strategies across email, social, and digital platforms"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our Lead Generation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "We create a customized lead generation strategy aligned with your business goals"
              },
              {
                step: "02",
                title: "Campaign Setup",
                description: "Implementation of targeted campaigns across multiple channels"
              },
              {
                step: "03",
                title: "Lead Nurturing",
                description: "Automated workflows to engage and qualify leads"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and optimization of campaign performance"
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
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Generate More Leads?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Let's discuss how our lead generation solutions can help grow your business.
          </p>
          <Button className="button-primary">Contact Us Today</Button>
        </div>
      </section>
    </main>
  );
}