import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { PenTool, FileText, BarChart, Target, Search, Globe, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Marketing Solutions | Miel Media",
  description: "Transform your digital presence with our expert content marketing solutions. We create engaging, SEO-optimized content that drives conversions and builds brand authority.",
  keywords: "content marketing, content strategy, SEO content, digital marketing, content creation, brand storytelling, content optimization",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Digital Marketing", href: "/solutions/digital-marketing" },
  { title: "Content Marketing", href: "/solutions/digital-marketing/content-marketing" }
];

export default function ContentMarketingPage() {
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
              Content Marketing Solutions
            </h1>
            <p className="text-xl mb-8">
              Create compelling content that engages your audience and drives conversions through strategic storytelling and data-driven optimization.
            </p>
            <Button className="button-primary">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Strategic Content Creation</h2>
              <div className="mb-8 rounded-xl overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b"
                  alt="Content Strategy Development"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <p className="text-[#F3F0CE] mb-6">
                Our content marketing solutions combine strategic thinking with creative execution to deliver content that resonates with your target audience and achieves your business objectives. We focus on creating valuable, relevant content that attracts, engages, and converts your ideal customers.
              </p>
              <ul className="space-y-4">
                {[
                  "Data-driven content strategy development",
                  "SEO-optimized content creation",
                  "Brand voice and messaging guidelines",
                  "Content performance tracking",
                  "Continuous optimization and refinement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                    <p className="text-[#F3F0CE]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Content Types & Formats</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6"
                    alt="Content Creation Process"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Blog posts and articles",
                    "White papers and ebooks",
                    "Case studies and success stories",
                    "Infographics and visual content",
                    "Video content and webinars",
                    "Email newsletters and campaigns"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                      <p className="text-[#F3F0CE]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Content Distribution & Promotion</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48"
                    alt="Content Distribution Strategy"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Multi-channel content distribution",
                    "Social media promotion strategy",
                    "Email marketing campaigns",
                    "Content syndication and partnerships",
                    "Influencer collaboration opportunities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                      <p className="text-[#F3F0CE]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our Content Marketing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research & Strategy",
                description: "Deep audience and competitor analysis to develop targeted content strategies"
              },
              {
                step: "02",
                title: "Content Creation",
                description: "Professional content development aligned with your brand voice and goals"
              },
              {
                step: "03",
                title: "Distribution",
                description: "Strategic content distribution across relevant channels"
              },
              {
                step: "04",
                title: "Analysis & Optimization",
                description: "Continuous performance monitoring and strategy refinement"
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

      {/* Benefits Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Benefits of Strategic Content Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Increased Brand Authority",
                description: "Build credibility and establish thought leadership in your industry"
              },
              {
                title: "Better Search Rankings",
                description: "Improve organic visibility with SEO-optimized content"
              },
              {
                title: "Higher Engagement",
                description: "Create meaningful connections with your target audience"
              },
              {
                title: "Lead Generation",
                description: "Convert readers into qualified leads and customers"
              },
              {
                title: "Brand Awareness",
                description: "Increase visibility and recognition in your market"
              },
              {
                title: "Customer Loyalty",
                description: "Foster long-term relationships through valuable content"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-zinc-900 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#F3F0CE]">{benefit.title}</h3>
                <p className="text-[#F3F0CE]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Let's create content that engages your audience and drives real business results.
          </p>
          <Button className="button-primary">
            Contact Us Today
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
} 