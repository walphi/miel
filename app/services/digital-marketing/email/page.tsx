import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Mail, Send, BarChart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Marketing Dubai | Marketing Automation & Campaigns | Digital Marketing Agency",
  description: "Transform your customer engagement with our comprehensive email marketing services. Specializing in personalized campaigns, automation workflows, and data-driven optimization across Dubai and UAE.",
  keywords: "email marketing dubai, marketing automation dubai, email campaigns uae, newsletter marketing dubai, email strategy dubai, drip campaigns uae, email optimization dubai",
};

export default function Page() {
  const breadcrumbs = [
    { title: "Services", href: "/services" },
    { title: "Digital Marketing", href: "/services/digital-marketing" },
    { title: "Email Marketing", href: "/services/digital-marketing/email" }
  ];

  const services = [
    {
      icon: <Mail className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Campaign Management",
      description: "Strategic email campaigns designed to engage and convert your target audience. We create tailored content that resonates with your audience, ensuring higher open and click-through rates."
    },
    {
      icon: <Send className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Marketing Automation",
      description: "Automated workflows and drip campaigns for seamless customer journeys. Our automation strategies help nurture leads and maintain engagement without manual intervention."
    },
    {
      icon: <BarChart className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "Performance Analytics",
      description: "Comprehensive tracking and optimization of email campaign metrics. We analyze data to refine strategies and improve future campaigns."
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-[#F36523]" />,
      title: "List Management",
      description: "Strategic segmentation and maintenance of your email subscriber base. We ensure your lists are clean and targeted for maximum effectiveness."
    }
  ];

  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1633265486064-086b219458ec')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Email Marketing Services
            </h1>
            <p className="text-xl mb-8 text-[#F3F0CE]/80">
              Drive engagement and conversions with targeted email campaigns and intelligent automation.
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

      {/* Email Automation Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-8`}>
                Intelligent Email Automation Solutions
              </h2>
              <p className="text-lg text-[#F3F0CE]/80 mb-8 leading-relaxed">
                Transform your email marketing with sophisticated automation workflows that nurture leads, engage customers, and drive conversions. Our expert team creates personalized customer journeys that deliver the right message at the perfect moment.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Welcome Series</h3>
                  <p className="text-[#F3F0CE]/70">
                    Engage new subscribers with personalized welcome sequences that introduce your brand and drive initial conversions.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Drip Campaigns</h3>
                  <p className="text-[#F3F0CE]/70">
                    Nurture leads with targeted content sequences that guide prospects through your sales funnel effectively.
                  </p>
                </div>
                
                <div className="p-6 bg-[#1C1C1C]/50 rounded-lg border border-[#F3F0CE]/10 hover:border-[#F36523]/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F36523]">Behavioral Triggers</h3>
                  <p className="text-[#F3F0CE]/70">
                    Implement smart triggers based on user behavior to send timely, relevant communications that drive engagement.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#1C1C1C] to-[#1C1C1C]/80 rounded-lg border border-[#F3F0CE]/10">
                <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>Automation Benefits</h3>
                <ul className="space-y-3 text-[#F3F0CE]/70">
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Increased engagement through personalized timing</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Improved conversion rates with targeted messaging</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Enhanced customer experience through relevant content</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-3 flex-shrink-0" />
                    <span>Scalable marketing processes that save time and resources</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                alt="Email marketing automation dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Email campaign analytics"
                  width={280}
                  height={280}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1553484771-047a44eee27b"
                  alt="Marketing automation workflow"
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Email marketing analytics"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
                Data-Driven Campaign Optimization
              </h2>
              <p className="text-[#F3F0CE]/70 mb-6">
                Maximize your email marketing ROI with our comprehensive analytics and optimization approach. We continuously monitor, analyze, and improve campaign performance to ensure the best possible results.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Performance Metrics</h3>
                <ul className="space-y-4 text-[#F3F0CE]/70">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Open rates, click-through rates, and conversion tracking</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Subscriber engagement and list health monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Deliverability optimization and bounce rate analysis</span>
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
                <ul className="space-y-4 text-[#F3F0CE]/70">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>A/B testing of subject lines, content, and send times</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Segmentation refinement based on engagement patterns</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#F36523] mr-2 mt-1" />
                    <span>Regular performance reviews and strategy adjustments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Design and Personalization Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6 text-center`}>
            Crafting Engaging Email Designs
          </h2>
          <p className="text-lg text-[#F3F0CE]/80 mb-8 leading-relaxed text-center">
            The design of your emails plays a crucial role in capturing attention and driving engagement. Our team specializes in creating visually appealing and mobile-responsive email templates that reflect your brand identity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Personalization</h3>
              <p className="text-[#F3F0CE]/70">
                Tailor your emails to individual subscribers based on their preferences, behaviors, and past interactions. Personalized content leads to higher engagement and conversion rates.
              </p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Responsive Design</h3>
              <p className="text-[#F3F0CE]/70">
                Ensure your emails look great on any device. Our responsive designs adapt seamlessly to different screen sizes, providing a consistent experience for all users.
              </p>
            </div>
            <div className="p-6 border border-[#F3F0CE]/10 rounded-lg bg-[#1C1C1C] hover:bg-[#1C1C1C]/70 transition-all">
              <h3 className={`${playfair.className} text-xl font-bold mb-4`}>Compelling CTAs</h3>
              <p className="text-[#F3F0CE]/70">
                Use clear and compelling calls-to-action (CTAs) that guide your subscribers towards the desired action, whether it's making a purchase, signing up for a webinar, or downloading a resource.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance and Best Practices Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6 text-center`}>
            Compliance and Best Practices
          </h2>
          <p className="text-lg text-[#F3F0CE]/80 mb-8 leading-relaxed text-center">
            Adhering to email marketing regulations is crucial for maintaining your brand's reputation and ensuring deliverability. We follow best practices to keep your campaigns compliant and effective.
          </p>
          <ul className="list-disc list-inside text-[#F3F0CE]/70 space-y-2">
            <li>• Ensure all emails include a clear unsubscribe option.</li>
            <li>• Obtain explicit consent from subscribers before sending marketing emails.</li>
            <li>• Regularly clean your email list to remove inactive subscribers.</li>
            <li>• Personalize your emails to enhance engagement and reduce unsubscribes.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#F3F0CE]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-6`}>
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F3F0CE]/80">
            Let's create engaging email campaigns that connect with your audience and drive measurable results. Our email marketing experts are ready to help you achieve your business objectives.
          </p>
          <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90 text-[#F3F0CE]">
            Start Your Email Journey
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}