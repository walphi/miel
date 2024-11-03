import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Brain, Cpu, BarChart, Lightbulb, Network, Bot, Workflow, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Marketing Solutions | Miel Media",
  description: "Transform your marketing with our advanced AI-powered solutions and automation tools.",
};

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "AI Solutions", href: "/solutions/ai-solutions" }
];

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-[#F3F0CE]">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              AI-Powered Marketing Solutions
            </h1>
            <p className="text-xl mb-8">
              Harness the power of artificial intelligence to revolutionize your marketing strategy and drive unprecedented growth.
            </p>
            <Button className="button-primary">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Advanced AI Marketing Solutions</h2>
            <p className="text-[#F3F0CE]">
              Our AI-powered marketing solutions combine cutting-edge technology with strategic expertise to deliver personalized, data-driven campaigns that maximize ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Strategy",
                description: "Custom AI solutions tailored to your specific marketing objectives"
              },
              {
                icon: Cpu,
                title: "Predictive Analytics",
                description: "Advanced data analysis to forecast trends and optimize campaigns"
              },
              {
                icon: Bot,
                title: "Automated Marketing",
                description: "Intelligent automation for enhanced efficiency and performance"
              },
              {
                icon: Network,
                title: "Smart Targeting",
                description: "AI-powered audience segmentation and targeting"
              },
              {
                icon: Lightbulb,
                title: "Content Generation",
                description: "AI-assisted content creation and optimization"
              },
              {
                icon: Sparkles,
                title: "Performance Optimization",
                description: "Continuous AI-driven campaign optimization"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-zinc-900 rounded-lg">
                <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#F3F0CE]">{feature.title}</h3>
                <p className="text-[#F3F0CE]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Our AI Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Evaluate your current marketing stack and AI opportunities"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop a customized AI implementation roadmap"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Deploy AI solutions and integrate with existing systems"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and refinement of AI performance"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#F3F0CE]">Benefits of AI Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Enhanced campaign performance through predictive analytics",
              "Improved ROI with automated optimization",
              "Deeper customer insights and personalization",
              "Scalable marketing operations",
              "Real-time decision making and adjustments",
              "Reduced manual workload and human error"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                <p className="text-[#F3F0CE]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#F3F0CE]">Ready to Leverage AI in Your Marketing?</h2>
          <p className="text-xl mb-8 text-[#F3F0CE]">
            Let's discuss how our AI solutions can transform your marketing strategy and drive better results.
          </p>
          <Button className="button-primary">Contact Us Today</Button>
        </div>
      </section>
    </main>
  );
}