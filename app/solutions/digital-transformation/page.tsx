import { Playfair_Display } from "next/font/google";
import { Brain, Cpu, LineChart, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

const breadcrumbs = [
  { title: "Solutions", href: "/solutions" },
  { title: "Digital Transformation", href: "/solutions/digital-transformation" }
];

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl text-white">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Digital Transformation Solutions
            </h1>
            <p className="text-xl mb-8">
              Transform your business with cutting-edge digital solutions and strategies that drive growth and innovation.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>
      {/* Rest of the page content remains the same */}
    </main>
  );
}