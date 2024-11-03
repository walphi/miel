import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface GuideContentProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: string;
}

export function GuideContent({
  title,
  description,
  image,
  category,
  readTime,
  publishDate,
  content
}: GuideContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="relative h-[400px] w-full mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="space-y-6">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold`}>
          {title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readTime} read</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <span>{category}</span>
          </div>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </div>
    </article>
  );
}