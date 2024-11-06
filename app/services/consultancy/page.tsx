import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Users, Brain, Target, ArrowRight, Compass, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Marketing Consultancy Dubai | Expert Marketing Consulting Services",
  description: "Transform your business with expert digital marketing consultancy services. Get data-driven strategies, market insights, and customized solutions for sustainable growth.",
  keywords: "digital marketing consultancy, marketing consultant dubai, business strategy consultant, digital transformation consulting, marketing strategy services",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Consultancy", href: "/services/consultancy" }
];

export default function ConsultancyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-[#F3F0CE]">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Digital Marketing Consultancy
            </h1>
            <p className="text-xl mb-8">
              Expert guidance and strategic solutions to transform your digital presence and accelerate business growth.
            </p>
            <Button className="button-primary">
              Book a Consultation
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-[#1A1A1A]">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold mb-8 text-[#F3F0CE] leading-tight">
          Transforming Businesses Through Strategic Consulting
        </h2>
        <div className="mb-8 rounded-xl overflow-hidden relative group">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
            alt="Strategic Consulting Session"
            width={600}
            height={400}
            className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <p className="text-[#F3F0CE] text-lg mb-8 leading-relaxed">
          We don't just offer consultancy – we partner with you to revolutionize your business. Our data-driven approach combines cutting-edge industry insights with practical solutions, helping you navigate the complex digital landscape and stay ahead of the competition.
        </p>
        <div className="space-y-6">
          {[
            {
              title: "Strategic Digital Innovation",
              description: "Comprehensive digital strategy development tailored to your business goals"
            },
            {
              title: "Market Intelligence",
              description: "Deep-dive analysis and actionable market insights"
            },
            {
              title: "Performance Excellence",
              description: "Data-driven optimization strategies for maximum ROI"
            },
            {
              title: "Technology Enablement",
              description: "Expert guidance on technology stack and digital transformation"
            },
            {
              title: "Growth Acceleration",
              description: "Scalable strategies for sustainable business growth"
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 group cursor-pointer">
              <div className="w-2 h-2 mt-2 rounded-full bg-[#F36523] group-hover:scale-150 transition-transform" />
              <div>
                <h3 className="text-[#F3F0CE] font-semibold mb-1">{item.title}</h3>
                <p className="text-[#F3F0CE]/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#F3F0CE]">Strategic Analysis & Planning</h3>
          <div className="mb-8 rounded-xl overflow-hidden relative group">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Strategic Analysis Process"
              width={600}
              height={300}
              className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Market Research",
                description: "In-depth analysis of market trends and opportunities"
              },
              {
                title: "Competitor Analysis",
                description: "Detailed competitive landscape evaluation"
              },
              {
                title: "Customer Journey",
                description: "Comprehensive mapping of customer touchpoints"
              },
              {
                title: "Digital Audit",
                description: "Thorough assessment of digital presence"
              },
              {
                title: "Performance Metrics",
                description: "Advanced analytics and KPI tracking"
              },
              {
                title: "Growth Planning",
                description: "Strategic roadmap for sustainable growth"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-[#2A2A2A] rounded-lg hover:bg-[#2A2A2A]/80 transition-colors">
                <h4 className="text-[#F3F0CE] font-semibold mb-2">{item.title}</h4>
                <p className="text-[#F3F0CE]/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Expertise Areas Section */}
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8 rounded-xl overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b"
                  alt="Digital Marketing Expertise"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-zinc-900 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#F3F0CE]">Digital Strategy</h3>
                  <p className="text-[#F3F0CE]">Comprehensive digital strategy development and implementation guidance</p>
                </div>
                <div className="p-6 bg-zinc-900 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#F3F0CE]">Marketing Technology</h3>
                  <p className="text-[#F3F0CE]">Expert advice on marketing technology stack and automation solutions</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-8 rounded-xl overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48"
                  alt="Marketing Consultation"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-zinc-900 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#F3F0CE]">Performance Marketing</h3>
                  <p className="text-[#F3F0CE]">Data-driven optimization and performance marketing strategies</p>
                </div>
                <div className="p-6 bg-zinc-900 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#F3F0CE]">Growth Strategy</h3>
                  <p className="text-[#F3F0CE]">Scalable growth strategies and implementation roadmaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our Consultation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "In-depth analysis of your current situation and objectives"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Development of customized solutions and strategies"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Guided execution and implementation support"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and strategy refinement"
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
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Why Choose Our Consultancy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Access to experienced digital marketing consultants"
              },
              {
                title: "Customized Solutions",
                description: "Tailored strategies for your specific needs"
              },
              {
                title: "Data-Driven Approach",
                description: "Decisions backed by analytics and insights"
              },
              {
                title: "Industry Expertise",
                description: "Deep understanding of digital marketing landscape"
              },
              {
                title: "Proven Results",
                description: "Track record of successful client partnerships"
              },
              {
                title: "Ongoing Support",
                description: "Continuous guidance and strategy refinement"
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
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Transform Your Digital Strategy?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Schedule a consultation with our experts and discover how we can help grow your business.
          </p>
          <Link href="/#calendar" scroll={true}>
          <Button className="button-primary">
            Book Your Consultation
            <ArrowRight className="ml-2" />
          </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}