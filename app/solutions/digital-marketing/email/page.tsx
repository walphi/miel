import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Mail, Users, BarChart, MessageCircle, Target, Send, Inbox, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Marketing Solutions | Miel Media",
  description: "Transform your email marketing with personalized campaigns, automation, and data-driven strategies that drive engagement and conversions.",
  keywords: "email marketing, email automation, email campaigns, newsletter marketing, drip campaigns, email strategy, marketing automation",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Digital Marketing", href: "/solutions/digital-marketing" },
  { title: "Email Marketing", href: "/solutions/digital-marketing/email" }
];

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-[#F3F0CE]">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Email Marketing Solutions
            </h1>
            <p className="text-xl mb-8">
              Create personalized email campaigns that engage your audience, nurture relationships, and drive conversions.
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
              <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Strategic Email Marketing</h2>
              <div className="mb-8 rounded-xl overflow-hidden relative group">
                <Image
                  src="https://images.unsplash.com/photo-1633265486064-086b219458ec"
                  alt="Email Marketing Strategy"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <p className="text-[#F3F0CE] mb-6">
                Our email marketing solutions combine personalization, automation, and data-driven insights to create campaigns that resonate with your audience and drive measurable results. We focus on building meaningful connections while maximizing ROI through strategic email communications.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized email campaign strategy",
                  "Marketing automation setup",
                  "List segmentation and management",
                  "A/B testing and optimization",
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
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Email Campaign Types</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28"
                    alt="Email Campaign Types"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Welcome email sequences",
                    "Newsletter campaigns",
                    "Promotional emails",
                    "Drip campaigns",
                    "Re-engagement campaigns",
                    "Behavioral trigger emails"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                      <p className="text-[#F3F0CE]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Email Optimization</h3>
                <div className="mb-6 rounded-xl overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                    alt="Email Optimization"
                    width={600}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Subject line optimization",
                    "Content personalization",
                    "Send time optimization",
                    "Mobile responsiveness",
                    "Deliverability improvement"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our Email Marketing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "Create targeted email marketing strategies aligned with your goals"
              },
              {
                step: "02",
                title: "Campaign Creation",
                description: "Design and develop engaging email campaigns"
              },
              {
                step: "03",
                title: "Automation Setup",
                description: "Implement automated workflows and triggers"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous testing and performance improvement"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Benefits of Email Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Higher ROI",
                description: "Generate better returns on your marketing investment"
              },
              {
                title: "Better Engagement",
                description: "Build stronger relationships with your audience"
              },
              {
                title: "Increased Conversions",
                description: "Drive more sales and conversions through targeted emails"
              },
              {
                title: "Automated Nurturing",
                description: "Automate customer journey and lead nurturing"
              },
              {
                title: "Measurable Results",
                description: "Track and measure campaign performance"
              },
              {
                title: "Personalized Communication",
                description: "Deliver relevant content to each subscriber"
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
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Let's create email campaigns that engage your audience and drive results.
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