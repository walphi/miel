import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuideCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}

export function GuideCard({ title, description, image, category, readTime, slug }: GuideCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-secondary">{category}</span>
          <span className="text-sm text-gray-500">{readTime} read</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link href={`/resources/guides/${slug}`}>
          <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}