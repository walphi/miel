import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Target, LineChart, Users, Zap, ArrowRight, Compass, BarChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strategic Digital Marketing Dubai | Data-Driven Marketing Solutions",
  description: "Transform your digital presence with our comprehensive strategic digital marketing services. Data-driven strategies tailored for sustainable growth and measurable results.",
  keywords: "strategic digital marketing, digital strategy dubai, marketing strategy services, digital transformation dubai, data-driven marketing",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Digital Marketing", href: "/solutions/digital-marketing" },
  { title: "Strategic Marketing", href: "/solutions/digital-marketing/strategic" }
];

export default function StrategicMarketingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-[#F3F0CE]">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Strategic Digital Marketing
            </h1>
            <p className="text-xl mb-8">
              Transform your digital presence with data-driven strategies that align with your business objectives and deliver measurable results.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Strategic Approach</h2>
              <div className="mb-8 rounded-xl overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="Strategic Digital Marketing"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <p className="text-[#F3F0CE] mb-6">
                Our strategic digital marketing approach combines deep market analysis, customer insights, and data-driven decision-making to create comprehensive marketing strategies that drive sustainable growth and measurable results for your business.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive market analysis",
                  "Competitor benchmarking",
                  "Target audience profiling",
                  "Channel strategy optimization",
                  "Performance tracking and analytics"
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
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Strategic Services</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1553484771-371a605b060b"
                    alt="Digital Marketing Services"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Digital strategy development",
                    "Brand positioning",
                    "Marketing automation",
                    "Content strategy",
                    "Channel optimization",
                    "Performance marketing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                      <p className="text-[#F3F0CE]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Strategic Implementation</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48"
                    alt="Strategy Implementation"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Phased implementation plans",
                    "KPI tracking setup",
                    "Team alignment workshops",
                    "Progress monitoring",
                    "Strategy optimization"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our Strategic Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive analysis of your market position and competition"
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Creation of tailored digital strategies"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execution across chosen digital channels"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and refinement"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Strategic Marketing Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data-Driven Decisions",
                description: "Make informed decisions based on real data and insights"
              },
              {
                title: "Targeted Approach",
                description: "Reach the right audience with precision targeting"
              },
              {
                title: "Measurable Results",
                description: "Track and measure all marketing activities"
              },
              {
                title: "Competitive Edge",
                description: "Stay ahead with strategic market positioning"
              },
              {
                title: "Resource Optimization",
                description: "Maximize ROI through strategic resource allocation"
              },
              {
                title: "Sustainable Growth",
                description: "Build a foundation for long-term success"
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
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Transform Your Digital Strategy?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Let's create a strategic digital marketing plan that drives results for your business.
          </p>
          <Button className="button-primary">
            Schedule a Strategy Session
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}