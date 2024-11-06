import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { LineChart, Target, BarChart, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Performance Marketing Dubai | Data-Driven ROI Campaigns | Digital Marketing Agency",
  description: "Transform your digital presence with our comprehensive performance marketing services. Specializing in ROI-focused campaigns, advanced analytics, and conversion optimization across Dubai and UAE.",
  keywords: "performance marketing dubai, paid advertising dubai, digital marketing roi, ppc dubai, social media advertising uae, conversion optimization dubai, google ads agency dubai",
};

export default function Page() {
  const breadcrumbs = [
    { title: "Services", href: "/services" },
    { title: "Digital Marketing", href: "/services/digital-marketing" },
    { title: "Performance Marketing", href: "/services/digital-marketing/performance" }
  ];

  const services = [
    {
      icon: <Target className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Paid Advertising",
      description: "Strategic PPC campaigns across Google, Meta, and display networks for maximum ROI"
    },
    {
      icon: <LineChart className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Conversion Optimization",
      description: "Data-driven CRO strategies to turn more visitors into customers"
    },
    {
      icon: <BarChart className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Performance Analytics",
      description: "Advanced tracking and reporting to measure and optimize campaign performance"
    },
    {
      icon: <TrendingUp className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Growth Marketing",
      description: "Scalable marketing strategies focused on rapid, sustainable growth"
    }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Performance Marketing
            </h1>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Drive measurable results with data-driven campaigns that deliver real ROI
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

            {/* Paid Advertising Section */}
            <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-8`}>
                Elevate Your Digital Presence with Data-Driven Advertising
              </h2>
              <p className="text-lg text-[#F3F0CE]/80 mb-8 leading-relaxed">
                In today's digital landscape, success demands more than basic advertising. Our performance marketing experts craft sophisticated campaigns that blend precision targeting, compelling creative, and continuous optimization to maximize your ROI.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Google Ads Excellence</h3>
                  <p className="text-[#F3F0CE]/70">
                    Strategic search campaigns capturing high-intent traffic with optimized quality scores and conversion rates.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Meta Advertising Mastery</h3>
                  <p className="text-[#F3F0CE]/70">
                    Advanced Facebook and Instagram campaigns leveraging dynamic optimization and precise audience targeting.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Programmatic Display</h3>
                  <p className="text-[#F3F0CE]/70">
                    Automated media buying across premium networks with real-time bidding and audience segmentation.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">LinkedIn B2B Campaigns</h3>
                  <p className="text-[#F3F0CE]/70">
                    Precision-targeted campaigns reaching decision-makers through sophisticated B2B marketing strategies.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#1C1C1C] to-[#1C1C1C]/80 rounded-lg border border-[#F3F0CE]/10">
                <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>Our Data-Driven Approach</h3>
                <ul className="space-y-3 text-[#F3F0CE]/70">
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Comprehensive keyword research and competitor analysis</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Custom audience development and targeting strategies</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Systematic A/B testing of ad copy and creative</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Advanced conversion tracking and attribution modeling</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Digital marketing analytics dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Marketing data visualization"
                  width={280}
                  height={280}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
                  alt="Campaign optimization process"
                  width={280}
                  height={280}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Optimization Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Performance analytics and optimization"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
                Advanced Analytics & Continuous Optimization
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                Success in performance marketing requires a deep understanding of data and the ability to translate insights into action. Our analytics and optimization process combines advanced tracking technologies with expert analysis to continuously improve campaign performance.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Comprehensive Analytics Setup</h3>
                <ul className="space-y-4 text-[#F3F0CE]/70">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Advanced Google Analytics 4 implementation with custom event tracking and e-commerce integration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Cross-domain tracking and user journey mapping across multiple touchpoints</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Custom dashboard development for real-time performance monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Conversion Rate Optimization</h3>
                <ul className="space-y-4 text-[#F3F0CE]/70">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Systematic A/B testing of landing pages, forms, and conversion funnels</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Heat mapping and user behavior analysis to identify optimization opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Conversion funnel analysis and optimization recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Performance Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
              Comprehensive Campaign Management
            </h2>
            <p className="text-[#F3F0CE]/70">
              From strategy to execution, we manage every aspect of your performance marketing campaigns. Our comprehensive approach ensures consistent results and continuous improvement through:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Strategic Planning</h3>
              <p className="text-[#F3F0CE]/70">
                Developing comprehensive campaign strategies based on market research, competitor analysis, and business objectives. Our approach includes:
              </p>
              <ul className="mt-4 space-y-2 text-[#F3F0CE]/70">
                <li>• Market opportunity analysis</li>
                <li>• Competitor benchmarking</li>
                <li>• Channel selection and budget allocation</li>
                <li>• KPI definition and goal setting</li>
              </ul>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Campaign Execution</h3>
              <p className="text-[#F3F0CE]/70">
                Expert implementation and management of campaigns across multiple channels, featuring:
              </p>
              <ul className="mt-4 space-y-2 text-[#F3F0CE]/70">
                <li>• Advanced targeting setup</li>
                <li>• Creative optimization</li>
                <li>• Bid management</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Optimization & Reporting</h3>
              <p className="text-[#F3F0CE]/70">
                Continuous improvement through data analysis and optimization, including:
              </p>
              <ul className="mt-4 space-y-2 text-[#F3F0CE]/70">
                <li>• Performance analysis</li>
                <li>• ROI tracking</li>
                <li>• Strategy refinement</li>
                <li>• Regular reporting and insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
            Ready to Transform Your Marketing Performance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F3F0CE]/80">
            Let's create data-driven campaigns that deliver measurable results for your business. Our performance marketing experts are ready to help you achieve your growth objectives.
          </p>
          <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
            Start Your Performance Journey
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}