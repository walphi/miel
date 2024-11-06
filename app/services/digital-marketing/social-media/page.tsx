import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ArrowRight, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

// Breadcrumbs component
function Breadcrumbs({ items }: { items: { title: string; href: string }[] }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-[#F3F0CE]/60">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <span className="mx-2">›</span>}
          <a 
            href={item.href}
            className="hover:text-[#F3F0CE] transition-colors"
          >
            {item.title}
          </a>
        </div>
      ))}
    </nav>
  );
}

export const metadata: Metadata = {
  title: "Social Media Marketing Dubai | Expert SMM Services | Digital Agency",
  description: "Transform your brand with expert social media marketing in Dubai. Strategic content, community management, and paid social campaigns across all major platforms.",
  keywords: "social media marketing dubai, social media agency dubai, smm dubai, instagram marketing dubai, linkedin marketing uae, social media management dubai",
};

export default function Page() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Digital Marketing", href: "/services/digital-marketing" },
    { title: "Social Media", href: "/services/digital-marketing/social-media" }
  ];

  // Testing Content Strategy section...
  const contentStrategySection = (
    <section className="py-20 border-t border-[#F3F0CE]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-8`}>
              Strategic Content Creation
            </h2>
            <p className="text-lg text-[#F3F0CE]/80 mb-8 leading-relaxed">
              Our content strategy combines creativity with data-driven insights to create engaging social media content that resonates with your target audience and drives meaningful engagement.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                <h3 className="text-xl font-bold mb-3 text-[#F36523]">Visual Storytelling</h3>
                <p className="text-[#F3F0CE]/70">
                  Create compelling visual narratives that capture attention and communicate your brand story effectively across all social platforms.
                </p>
              </div>
              
              <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                <h3 className="text-xl font-bold mb-3 text-[#F36523]">Content Calendar</h3>
                <p className="text-[#F3F0CE]/70">
                  Strategic planning and scheduling of content to maintain consistent engagement and maximize reach during peak activity periods.
                </p>
              </div>
              
              <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                <h3 className="text-xl font-bold mb-3 text-[#F36523]">Community Management</h3>
                <p className="text-[#F3F0CE]/70">
                  Proactive engagement with your audience to build strong relationships and foster brand loyalty through meaningful interactions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="space-y-6">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Social media analytics dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="grid grid-cols-2 gap-6">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Data visualization"
                width={280}
                height={280}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <Image
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
                alt="Performance metrics"
                width={280}
                height={280}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Testing CTA and additional content sections...
  const finalSections = (
    <>
      {/* Analytics & Performance Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-8`}>
                Data-Driven Performance
              </h2>
              <p className="text-lg text-[#F3F0CE]/80 mb-8 leading-relaxed">
                Transform your social media strategy with comprehensive analytics and real-time performance tracking. Our data-driven approach ensures your content reaches the right audience at the right time.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Advanced Analytics</h3>
                  <p className="text-[#F3F0CE]/70">
                    Leverage detailed insights into audience behavior, engagement patterns, and content performance to optimize your social media strategy continuously.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">ROI Tracking</h3>
                  <p className="text-[#F3F0CE]/70">
                    Monitor and measure the return on investment for your social media campaigns with comprehensive performance metrics and conversion tracking.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Analytics Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#1C1C1C]/50">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-12 text-center`}>
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#F3F0CE]/10">
              <Image
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
                alt="E-commerce success story"
                width={400}
                height={300}
                className="rounded-lg mb-6"
              />
              <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>
                E-commerce Growth
              </h3>
              <p className="text-[#F3F0CE]/70 mb-4">
                Achieved a 300% increase in social media-driven sales through strategic content and targeted advertising campaigns.
              </p>
              <ul className="space-y-2 text-[#F3F0CE]/70">
                <li>• Increased engagement rate by 150%</li>
                <li>• Doubled follower growth rate</li>
                <li>• 4x improvement in conversion rate</li>
              </ul>
            </div>

            {/* Additional case studies... */}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1C1C1C]/90" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Let's create engaging content that connects with your audience and drives real results. Our team of experts is ready to help you achieve your social media marketing goals.
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113')] bg-cover bg-center min-h-[60vh]">
        <div className="absolute inset-0 bg-[#1C1C1C]/70" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Social Media Marketing
            </h1>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Transform your brand's social presence with data-driven strategies and engaging content that resonates with your Dubai audience
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
              Elevate Your Brand
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
              Multi-Platform Excellence
            </h2>
            <p className="text-xl text-[#F3F0CE]/80 max-w-3xl mx-auto">
              Strategic presence across all major social platforms, tailored to your brand's unique voice and objectives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]" />
                  <Instagram className="w-12 h-12 text-[#E4405F]" />
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold mb-3`}>Instagram Marketing</h3>
                <p className="text-[#F3F0CE]/70">Engaging visual storytelling and influencer partnerships</p>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[#0A66C2]" />
                  <Linkedin className="w-12 h-12 mb-4 text-[#0A66C2]" />
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold mb-3`}>LinkedIn Marketing</h3>
                <p className="text-[#F3F0CE]/70">B2B focused content and lead generation campaigns</p>
              </div>
            </div>

            <div className="group">
              <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[#FF0000]" />
                  <Youtube className="w-12 h-12 mb-4 text-[#FF0000]" />
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold mb-3`}>YouTube Marketing</h3>
                <p className="text-[#F3F0CE]/70">Video content strategy and channel optimization</p>
              </div>
            </div>

            <div className="group">
              <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[#1DA1F2]" />
                  <Twitter className="w-12 h-12 mb-4 text-[#1DA1F2]" />
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold mb-3`}>X Marketing</h3>
                <p className="text-[#F3F0CE]/70">Real-time engagement and trend leveraging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy Section */}
      {contentStrategySection}

      {/* Final Sections */}
      {finalSections}
    </main>
  );
}