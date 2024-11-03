import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Paintbrush, Camera, Video, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Agency Dubai | Photography & Design Services",
  description: "Full-service creative agency in Dubai offering photography, design, and branding services.",
  keywords: "creative agency dubai, photography dubai, automotive photography dubai, branding agency dubai",
};

export default function Page() {
  const breadcrumbs = [
    { title: "Services", href: "/services" },
    { title: "Creative Services", href: "/services/creative" }
  ];

  const services = [
    {
      icon: <Camera className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Photography",
      description: "Professional photography services for automotive, real estate, and commercial projects"
    },
    {
      icon: <Video className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Videography",
      description: "High-quality video production for corporate, promotional, and social media content"
    },
    {
      icon: <PenTool className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Graphic Design",
      description: "Creative design solutions for branding, marketing materials, and digital assets"
    },
    {
      icon: <Paintbrush className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Branding",
      description: "Comprehensive branding services to establish and elevate your market presence"
    }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Creative Services
            </h1>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Transform your brand with stunning visuals and creative design solutions
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

      {/* Photography Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
                Professional Photography Services
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                Our professional photography services cater to businesses seeking to showcase their products, properties, and services in the most compelling way. We specialize in automotive photography, real estate photography, and commercial photography, delivering stunning visuals that capture attention and drive engagement.
              </p>
              <p className="text-[#F3F0CE]/70 mb-6">
                With state-of-the-art equipment and years of expertise, our photographers create images that tell your brand's story and resonate with your target audience.
              </p>
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
                alt="Professional photography setup in Dubai studio"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9"
                alt="Luxury car photography in Dubai"
                width={280}
                height={280}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Interior real estate photography"
                width={280}
                height={280}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design & Branding Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d"
                alt="Creative design process and branding materials"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
                Design & Branding Excellence
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                Our creative team combines artistic vision with strategic thinking to deliver comprehensive branding and design solutions. From logo design and brand identity development to marketing collateral and digital assets, we ensure your brand stands out in today's competitive market.
              </p>
              <ul className="space-y-4 text-[#F3F0CE]/70">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Brand Identity Development
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Logo Design & Visual Systems
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Marketing Collateral Design
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Digital Asset Creation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Production Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
              Video Production Services
            </h2>
            <p className="text-[#F3F0CE]/70">
              Elevate your brand storytelling with our professional video production services. From concept development to final editing, we create compelling video content that engages your audience and delivers your message effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Corporate Videos</h3>
              <p className="text-[#F3F0CE]/70">Professional corporate videos that showcase your company's values, culture, and achievements.</p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Product Videos</h3>
              <p className="text-[#F3F0CE]/70">Stunning product demonstrations and promotional videos that highlight your offerings.</p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Social Media Content</h3>
              <p className="text-[#F3F0CE]/70">Engaging short-form videos optimized for various social media platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F3F0CE]/80">
            Let's create something extraordinary together. Our creative team is ready to bring your vision to life.
          </p>
          <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
            Start Your Creative Journey
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}