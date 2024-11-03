import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { BarChart, Target, Search, TrendingUp, LineChart, PieChart, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Performance Marketing Solutions | Miel Media",
  description: "Drive measurable results with our data-driven performance marketing solutions. Optimize campaigns, increase ROI, and achieve your business goals with precision targeting.",
  keywords: "performance marketing, digital advertising, ROI optimization, conversion optimization, paid media, analytics, campaign optimization",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Digital Marketing", href: "/solutions/digital-marketing" },
  { title: "Performance Marketing", href: "/solutions/digital-marketing/performance" }
];

export default function PerformanceMarketingPage() {
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
              Performance Marketing Solutions
            </h1>
            <p className="text-xl mb-8">
              Drive measurable results and maximize ROI with data-driven performance marketing strategies tailored to your business goals.
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
              <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Data-Driven Performance Marketing</h2>
              <div className="mb-8 rounded-xl overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Performance Marketing Analytics"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <p className="text-[#F3F0CE] mb-6">
                Our performance marketing solutions leverage advanced analytics and data-driven insights to optimize your campaigns for maximum ROI. We focus on measurable results, continuous optimization, and scalable growth strategies that deliver real business impact.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced campaign tracking and analytics",
                  "Multi-channel performance optimization",
                  "Conversion rate optimization (CRO)",
                  "A/B testing and experimentation",
                  "Real-time campaign adjustments"
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
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Performance Channels</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
                    alt="Digital Marketing Channels"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Paid Search (PPC) Campaigns",
                    "Social Media Advertising",
                    "Display and Programmatic",
                    "Native Advertising",
                    "Affiliate Marketing",
                    "Email Marketing Automation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                      <p className="text-[#F3F0CE]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Performance Optimization</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                    alt="Campaign Optimization"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Audience targeting optimization",
                    "Bid management strategies",
                    "Creative performance testing",
                    "Landing page optimization",
                    "Budget allocation optimization"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our Performance Marketing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis & Planning",
                description: "Comprehensive analysis and strategic campaign planning"
              },
              {
                step: "02",
                title: "Implementation",
                description: "Campaign setup and tracking implementation"
              },
              {
                step: "03",
                title: "Optimization",
                description: "Continuous testing and performance optimization"
              },
              {
                step: "04",
                title: "Scaling",
                description: "Data-driven scaling of successful campaigns"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Benefits of Performance Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Measurable Results",
                description: "Track and measure every aspect of your marketing campaigns"
              },
              {
                title: "Cost Efficiency",
                description: "Optimize spending based on performance metrics"
              },
              {
                title: "Targeted Reach",
                description: "Reach the right audience with precision targeting"
              },
              {
                title: "Scalable Growth",
                description: "Scale successful campaigns for maximum impact"
              },
              {
                title: "Data Insights",
                description: "Gain valuable insights from campaign data"
              },
              {
                title: "ROI Focus",
                description: "Focus on campaigns that deliver the best returns"
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
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Boost Your Marketing Performance?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Let's create data-driven campaigns that deliver measurable results for your business.
          </p>
          <Button className="button-primary">
            Contact Us Today
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      {/* Rest of the page content */}
    </main>
  );
}