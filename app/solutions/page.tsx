import { Playfair_Display } from "next/font/google";
import { SolutionCard } from "@/components/solutions/solution-card";
import { Brain, Building2, LineChart } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

const solutions = [
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions and strategies.",
    icon: Brain,
    href: "/solutions/digital-transformation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    title: "Lead Generation",
    description: "Generate high-quality leads with our proven marketing strategies.",
    icon: Building2,
    href: "/solutions/lead-generation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with intelligent automation.",
    icon: LineChart,
    href: "/solutions/marketing-automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Our Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our comprehensive range of digital solutions designed to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <SolutionCard key={solution.title} {...solution} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}