import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Code, Layout, Smartphone, Globe, ArrowRight, Database, Shield, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Development Services Dubai | Custom Website Solutions",
  description: "Professional web development services in Dubai. Create stunning, responsive websites with modern technologies that drive business growth.",
  keywords: "web development dubai, website development uae, custom web development, ecommerce development dubai",
};

const breadcrumbs = [
  { title: "Services", href: "/services" },
  { title: "Web Development", href: "/services/web-development" }
];

const services = [
  {
    icon: <Layout className="w-12 h-12 mb-4 text-[#F36523]" />,
    title: "Custom Web Development",
    description: "Tailored websites built with cutting-edge technologies to meet your specific business needs"
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-[#F36523]" />,
    title: "Responsive Design",
    description: "Mobile-first websites that provide seamless experiences across all devices"
  },
  {
    icon: <Database className="w-12 h-12 mb-4 text-[#F36523]" />,
    title: "E-commerce Solutions",
    description: "Scalable online stores with secure payment gateways and inventory management"
  },
  {
    icon: <Shield className="w-12 h-12 mb-4 text-[#F36523]" />,
    title: "Web Security",
    description: "Implementation of robust security measures to protect your website and user data"
  }
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F3F0CE]`}>
              Web Development Services
            </h1>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Create stunning, responsive websites that drive results for your business
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
              <h3 className={`${playfair.className} text-2xl font-bold mb-3 text-[#F3F0CE]`}>{service.title}</h3>
              <p className="text-[#F3F0CE]/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Development Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6 text-[#F3F0CE]`}>
                Custom Web Development Solutions
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                In today's digital landscape, your website is often the first point of contact between your business and potential customers. Our custom web development services ensure that this crucial interaction leaves a lasting impression. We combine cutting-edge technologies with innovative design principles to create websites that not only look stunning but also deliver exceptional performance.
              </p>
              <p className="text-[#F3F0CE]/70 mb-6">
                Our development team specializes in creating scalable, secure, and high-performance websites using modern frameworks and technologies. Whether you need a corporate website, e-commerce platform, or complex web application, we have the expertise to bring your vision to life.
              </p>
              <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166"
                alt="Web development team collaboration"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
                alt="Modern web design interface"
                width={280}
                height={280}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Development environment setup"
                width={280}
                height={280}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6 text-[#F3F0CE]`}>
              Our Technology Stack
            </h2>
            <p className="text-[#F3F0CE]/70">
              We leverage the latest technologies and frameworks to build robust, scalable web solutions that meet your business objectives. Our expertise spans across various modern development tools and platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#F3F0CE]`}>Frontend Development</h3>
              <p className="text-[#F3F0CE]/70">React.js, Next.js, Vue.js, and modern CSS frameworks for creating responsive and interactive user interfaces.</p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#F3F0CE]`}>Backend Development</h3>
              <p className="text-[#F3F0CE]/70">Node.js, Python, PHP, and robust database solutions for powerful server-side applications.</p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#F3F0CE]`}>E-commerce Platforms</h3>
              <p className="text-[#F3F0CE]/70">WooCommerce, Shopify, and custom e-commerce solutions for online retail success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
                alt="Web development process visualization"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6 text-[#F3F0CE]`}>
                Our Development Process
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                We follow a systematic approach to web development that ensures quality, efficiency, and successful project delivery. Our process is designed to keep you involved at every stage while maintaining transparency and clear communication.
              </p>
              <ul className="space-y-4 text-[#F3F0CE]/70">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Requirements Analysis & Planning
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Design & Prototyping
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Development & Testing
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#F36523] mr-2" />
                  Deployment & Maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6 text-[#F3F0CE]`}>
            Ready to Start Your Web Development Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F3F0CE]/80">
            Let's create a powerful online presence for your business. Our team is ready to bring your vision to life.
          </p>
          <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
            Start Your Project
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}