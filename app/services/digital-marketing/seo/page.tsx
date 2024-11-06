import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Search, BarChart, Globe, FileText, ArrowRight, Settings, Link, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO Services Dubai | Technical & Local SEO Experts | Digital Marketing Agency",
  description: "Expert SEO services in Dubai. Our technical SEO specialists deliver data-driven strategies, local SEO optimization, and measurable organic growth for UAE businesses.",
  keywords: "seo dubai, seo agency dubai, seo services uae, technical seo dubai, local seo dubai, seo expert dubai, seo company uae",
};

export default function Page() {
  const breadcrumbs = [
    { title: "Services", href: "/services" },
    { title: "Digital Marketing", href: "/services/digital-marketing" },
    { title: "Search Engine Optimization", href: "/services/digital-marketing/seo" }
  ];

  const services = [
    {
      icon: <Settings className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Technical SEO",
      description: "Advanced technical optimization for enhanced search visibility and performance"
    },
    {
      icon: <FileText className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Content SEO",
      description: "Strategic content optimization targeting relevant keywords and user intent"
    },
    {
      icon: <MapPin className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Local SEO",
      description: "Specialized local optimization for Dubai and UAE business visibility"
    },
    {
      icon: <Link className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Link Building",
      description: "Authority-building strategies to boost domain strength and rankings"
    }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1C1C1C]/70" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Search Engine Optimization
            </h1>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Drive sustainable organic growth with data-driven SEO strategies tailored for Dubai's competitive market
            </p>
            <a href="/contact" className="inline-block bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE] px-8 py-3 rounded-md">
              Boost Your Rankings
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </a>
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

      {/* Technical SEO Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-8`}>
                Technical SEO Excellence
              </h2>
              <p className="text-lg text-[#F3F0CE]/80 mb-8 leading-relaxed">
                Our technical SEO expertise goes beyond basic optimization. We implement advanced strategies to enhance your website's search engine visibility and performance, ensuring your site meets and exceeds Google's evolving standards.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Core Web Vitals Optimization</h3>
                  <p className="text-[#F3F0CE]/70">
                    Comprehensive optimization of loading performance, interactivity, and visual stability metrics for enhanced user experience and rankings.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Site Architecture & Crawlability</h3>
                  <p className="text-[#F3F0CE]/70">
                    Strategic site structure optimization and advanced crawl efficiency improvements for better search engine understanding.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Mobile-First Indexing</h3>
                  <p className="text-[#F3F0CE]/70">
                    Comprehensive mobile optimization ensuring perfect alignment with Google's mobile-first indexing requirements.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Schema Implementation</h3>
                  <p className="text-[#F3F0CE]/70">
                    Advanced structured data markup for enhanced SERP visibility and rich snippet opportunities.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#1C1C1C] to-[#1C1C1C]/80 rounded-lg border border-[#F3F0CE]/10">
                <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>Technical Audit Process</h3>
                <ul className="space-y-3 text-[#F3F0CE]/70">
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Comprehensive technical analysis and audit</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Performance optimization recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Implementation of technical improvements</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Ongoing monitoring and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Technical SEO dashboard and analytics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="SEO performance metrics"
                  width={280}
                  height={280}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
                  alt="Search engine optimization process"
                  width={280}
                  height={280}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content SEO Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Content optimization and strategy"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
                Strategic Content Optimization
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                Our content SEO strategies combine advanced keyword research with user intent optimization to create content that ranks and converts. We focus on delivering value while ensuring maximum search visibility.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10">
                  <h3 className="text-xl font-bold mb-3">Keyword Strategy</h3>
                  <ul className="space-y-3 text-[#F3F0CE]/70">
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                      Advanced keyword research and analysis
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                      Competitor content gap analysis
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                      User intent mapping
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10">
                  <h3 className="text-xl font-bold mb-3">Content Development</h3>
                  <ul className="space-y-3 text-[#F3F0CE]/70">
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                      SEO-optimized content creation
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                      Content structure optimization
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                      Internal linking strategy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
              Dubai Local SEO Mastery
            </h2>
            <p className="text-[#F3F0CE]/70">
              Dominate local search results with our specialized Dubai and UAE-focused SEO strategies. We help your business stand out in local searches and Google Maps results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Google Business Profile</h3>
              <p className="text-[#F3F0CE]/70">
                Complete optimization of your Google Business Profile for maximum local visibility and engagement.
              </p>
              <ul className="mt-4 space-y-2 text-[#F3F0CE]/70">
                <li>• Profile optimization</li>
                <li>• Review management</li>
                <li>• Local content strategy</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Local Citations</h3>
              <p className="text-[#F3F0CE]/70">
                Strategic citation building and management across authoritative local directories.
              </p>
              <ul className="mt-4 space-y-2 text-[#F3F0CE]/70">
                <li>• Directory submissions</li>
                <li>• NAP consistency</li>
                <li>• Citation cleanup</li>
                <li>• Authority building</li>
              </ul>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Local Content</h3>
              <p className="text-[#F3F0CE]/70">
                Location-specific content strategy targeting Dubai and UAE audiences.
              </p>
              <ul className="mt-4 space-y-2 text-[#F3F0CE]/70">
                <li>• Local keyword targeting</li>
                <li>• Area-specific pages</li>
                <li>• Event coverage</li>
                <li>• Community engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6 text-[#F3F0CE]`}>
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F3F0CE]/80">
            Let's create a comprehensive SEO strategy that drives sustainable organic growth for your business in Dubai and beyond.
          </p>
          <a href="/contact" className="inline-block bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE] px-8 py-3 rounded-md">
            Start Your SEO Journey
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </a>
        </div>
      </section>
    </main>
  );
}