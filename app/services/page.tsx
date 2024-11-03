import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our Services | Miel Media",
  description: "Discover our full range of digital marketing and AI-powered services.",
};

const services = [
  {
    title: "AI Marketing",
    description: "Transform your marketing with AI-powered solutions and automation.",
    href: "/services/ai-marketing",
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies for sustainable growth.",
    href: "/services/digital-marketing",
  },
  {
    title: "Content Marketing",
    description: "Engaging content that connects with your audience and drives results.",
    href: "/services/content-marketing",
  },
  {
    title: "SEO Services",
    description: "Data-driven SEO strategies to improve your online visibility.",
    href: "/services/seo",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our comprehensive range of digital marketing solutions designed to help your business grow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-8 rounded-lg border bg-card hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className={`${playfair.className} text-2xl font-bold mb-3`}>
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}