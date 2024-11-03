import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  className?: string;
}

export function BlogCard({ title, excerpt, image, date, readTime, slug, className }: BlogCardProps) {
  return (
    <article className={cn("group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300", className)}>
      <Link href={`/resources/blog/${slug}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
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
          <h3 className={cn(playfair.className, "text-2xl font-bold mb-3 group-hover:text-secondary transition-colors")}>
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {excerpt}
          </p>
          <span className="inline-flex items-center text-secondary font-semibold">
            Read More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}