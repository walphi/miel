import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  className?: string;
}

export function FeaturedPost({ title, excerpt, image, date, readTime, slug, className }: FeaturedPostProps) {
  return (
    <article className={cn("relative overflow-hidden rounded-lg bg-white shadow-lg", className)}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-72 md:h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
          <h2 className={cn(playfair.className, "text-3xl font-bold mb-4")}>
            {title}
          </h2>
          <p className="text-gray-600 mb-6 line-clamp-3">
            {excerpt}
          </p>
          <Link href={`/resources/blog/${slug}`}>
            <Button className="bg-secondary hover:bg-secondary/90">
              Read Article <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}