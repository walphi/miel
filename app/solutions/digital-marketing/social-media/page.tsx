import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Users, Share2, Target, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media Marketing Solutions | Miel Media",
  description: "Transform your social media presence with our expert marketing solutions and strategies.",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Digital Marketing", href: "/solutions/digital-marketing" },
  { title: "Social Media", href: "/solutions/digital-marketing/social-media" }
];

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Social Media Marketing
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Build a strong social media presence and engage your audience effectively
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        </section>
      
      {/* Content Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Content Strategy & Creation</h2>
              <p className="text-[#F3F0CE] mb-4">
                Our content strategy combines creativity with data-driven insights to create engaging social media content that resonates with your audience and drives meaningful engagement.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom content calendars tailored to your brand",
                  "Professional photography and video production",
                  "Engaging copywriting and storytelling",
                  "Trend-aware content optimization",
                  "Regular performance analysis and adjustments"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                    <p className="text-[#F3F0CE]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Content Types</h3>
                <ul className="space-y-4">
                  {[
                    "Social media posts and stories",
                    "Video content and Reels",
                    "Infographics and visual content",
                    "User-generated content curation",
                    "Live streaming content"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                      <p className="text-[#F3F0CE]">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F3F0CE]">Platform Optimization</h3>
                <ul className="space-y-4">
                  {[
                    "Platform-specific content adaptation",
                    "Hashtag strategy and optimization",
                    "Posting time optimization",
                    "Cross-platform content strategy"
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
      {/* Rest of the page content */}
    </main>
  );
}