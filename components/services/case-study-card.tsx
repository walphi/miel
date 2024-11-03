import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  title: string;
  description: string;
  results?: string[];
  imageUrl: string;
}

export function CaseStudyCard({ title, description, results = [], imageUrl }: CaseStudyCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2A2A2A] transition-shadow hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-[#F5F2D0]">{title}</h3>
        <p className="text-[#F5F2D0]/80 mb-4">{description}</p>
        {results.length > 0 && (
          <ul className="space-y-2 mb-4">
            {results.map((result, index) => (
              <li key={index} className="flex items-center text-[#F5F2D0]/80">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                {result}
              </li>
            ))}
          </ul>
        )}
        <Button variant="outline" className="w-full border-[#2A2A2A] text-[#F5F2D0] hover:bg-[#2A2A2A]">
          View Case Study
        </Button>
      </div>
    </div>
  );
}