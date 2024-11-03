import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Brain, LineChart, PieChart, BarChart2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FeatureCard } from "@/components/services/feature-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Powered Analytics & Insights | Digital Marketing Analytics Dubai",
  description: "Advanced marketing analytics and insights powered by artificial intelligence. Make data-driven decisions for your digital marketing campaigns.",
  keywords: "marketing analytics dubai, ai analytics, digital marketing insights, data-driven marketing",
};

const features = [
  {
    title: "AI-Powered Insights",
    description: "Advanced analytics powered by artificial intelligence",
    icon: Brain
  },
  {
    title: "Performance Tracking",
    description: "Real-time monitoring of key metrics and KPIs",
    icon: LineChart
  },
  {
    title: "Customer Analytics",
    description: "Deep insights into customer behavior and preferences",
    icon: PieChart
  },
  {
    title: "ROI Analysis",
    description: "Comprehensive return on investment tracking",
    icon: BarChart2
  }
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              AI-Powered Analytics & Insights
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform your marketing decisions with advanced analytics and AI-driven insights
            </p>
            <Button size="lg" className="bg-[#F36523] hover:bg-[#F36523]/90">
              Explore Analytics
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12`}>
            Analytics Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6`}>
                Comprehensive Analytics Dashboard
              </h2>
              <p className="text-[#F5F2D0]/80 text-lg mb-8">
                Get a complete view of your digital marketing performance with our intuitive analytics dashboard
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F36523] rounded-full" />
                  <span>Real-time performance monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F36523] rounded-full" />
                  <span>Custom reporting and analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F36523] rounded-full" />
                  <span>AI-powered recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F36523] rounded-full" />
                  <span>Automated insights generation</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Analytics Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F36523]">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-white`}>
            Ready to Leverage AI-Powered Analytics?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Transform your marketing decisions with data-driven insights
          </p>
          <Button size="lg" variant="outline" className="bg-white text-[#F36523] hover:bg-gray-100">
            Get Started
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}