import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

const breadcrumbs = [
  { title: "Resources", href: "/resources" },
  { title: "Guides", href: "/resources/guides" }
];

const guides = [
  {
    slug: "analytics-data-driven-marketing",
    title: "Analytics and Data-Driven Marketing",
    description: "Learn how to leverage data analytics to make informed marketing decisions and improve ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Analytics",
  },
  {
    slug: "ai-marketing-strategies",
    title: "AI Marketing Strategies for 2024",
    description: "Discover how artificial intelligence is transforming digital marketing and how to leverage it for your business.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "Artificial Intelligence",
  },
  {
    slug: "real-estate-digital-marketing",
    title: "Digital Marketing for Real Estate",
    description: "Learn effective digital marketing strategies specifically tailored for real estate professionals.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
    category: "Real Estate",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
            Marketing Guides & Resources
          </h1>
          <p className="text-xl text-gray-600">
            Explore our comprehensive guides to master digital marketing strategies and stay ahead in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/guides/${guide.slug}`}
              className="group block"
            >
              <div className="rounded-lg overflow-hidden shadow-lg bg-white transition-shadow hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-secondary mb-2">{guide.category}</div>
                  <h2 className="text-xl font-semibold mb-3">{guide.title}</h2>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center text-secondary font-medium">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}