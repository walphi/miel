import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Paintbrush, Camera, Video, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";
import { Target, BarChart, Brain, Rocket } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Strategic Digital Marketing Services | Data-Driven Solutions",
    description: "Transform your digital presence with data-driven strategies and innovative marketing solutions.",
    keywords: "strategic digital marketing, digital strategy dubai, marketing analytics, data-driven marketing",
  };
  
  export default function Page() {
    const breadcrumbs = [
      { title: "Services", href: "/services" },
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "Strategic", href: "/services/digital-marketing/strategic" }
    ];

  const services = [
    {
        icon: <Target className="w-12 h-12 mb-4 text-[#F36523]" />,
        title: "Market Analysis",
        description: "Comprehensive market research and competitive analysis to identify growth opportunities"
      },
      {
        icon: <BarChart className="w-12 h-12 mb-4 text-[#F36523]" />,
        title: "Data Analytics",
        description: "Advanced data analytics and insights to drive informed marketing decisions"
      },
      {
        icon: <Brain className="w-12 h-12 mb-4 text-[#F36523]" />,
        title: "Strategic Planning",
        description: "Custom digital marketing strategies aligned with your business goals"
      },
      {
        icon: <Rocket className="w-12 h-12 mb-4 text-[#F36523]" />,
        title: "Growth Marketing",
        description: "Results-driven campaigns to accelerate your business growth and ROI"
      }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Strategic Digital Marketing
            </h1>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Transform your digital presence with data-driven strategies and measurable results
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              {service.icon}
              <h3 className={`${playfair.className} text-2xl font-bold mb-3`}>{service.title}</h3>
              <p className="text-[#F3F0CE]/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

            {/* Market Analysis Section (replacing Photography section) */}
            <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
                Turn Data into Growth Opportunities
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                Don't just collect data – transform it into your competitive advantage. Our strategic analysis goes beyond basic metrics to uncover hidden opportunities and actionable insights that drive real business growth.
              </p>
              <p className="text-[#F3F0CE]/70 mb-6">
                We combine advanced AI-powered analytics with human expertise to help you:
                • Identify untapped market opportunities
                • Understand your competitors' strategies
                • Predict emerging market trends
                • Make data-backed decisions with confidence
              </p>
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="Strategic team analyzing digital marketing data"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Data visualization and analytics dashboard"
                width={280}
                height={280}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Strategic planning and analysis"
                width={280}
                height={280}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Development Section (replacing Design & Branding section) */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Strategic marketing planning and execution"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
                Strategic Planning Excellence
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                Our strategic planning process combines data insights with creative thinking to develop comprehensive marketing strategies. We focus on creating measurable, results-driven campaigns that align with your business objectives and drive sustainable growth.
              </p>
              <ul className="space-y-4 text-[#F3F0CE]/70">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Market Opportunity Analysis
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Competitive Positioning Strategy
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Channel Optimization
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Performance Tracking & Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Analytics Section (replacing Video Production section) */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
              Performance Analytics & Optimization
            </h2>
            <p className="text-[#F3F0CE]/70">
              Transform your marketing effectiveness with our advanced analytics and optimization services. We help you understand your data, measure your success, and continuously improve your marketing performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Performance Tracking</h3>
              <p className="text-[#F3F0CE]/70">Comprehensive analytics and reporting to measure campaign effectiveness and ROI.</p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Data Analysis</h3>
              <p className="text-[#F3F0CE]/70">In-depth analysis of marketing data to uncover insights and optimization opportunities.</p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Growth Strategy</h3>
              <p className="text-[#F3F0CE]/70">Strategic recommendations for scaling successful campaigns and improving results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
            Ready to Transform Your Digital Strategy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F3F0CE]/80">
            Let's create a data-driven marketing strategy that delivers measurable results for your business.
          </p>
          <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
            Start Your Strategic Journey
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}