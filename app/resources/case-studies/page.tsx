import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Case Studies | Miel Media",
  description: "Explore our client success stories and learn how we deliver exceptional results through innovative digital solutions.",
};

const breadcrumbs = [
  { title: "Resources", href: "/resources" },
  { title: "Case Studies", href: "/resources/case-studies" }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
            Client Success Stories
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover how we help businesses achieve remarkable results through innovative digital solutions
          </p>
        </div>
      </div>
    </main>
  );
}