import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
}

export function SolutionCard({ title, description, icon: Icon, href, image }: SolutionCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white transition-shadow hover:shadow-xl">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <Icon className="w-10 h-10 text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}