import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
}

export function ServiceCard({ title, description, icon: Icon, href, image }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="rounded-lg overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A] transition-shadow hover:shadow-xl">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Icon className="absolute bottom-4 left-4 w-8 h-8 text-[#F5F2D0]" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-[#F5F2D0]">{title}</h3>
          <p className="text-[#F5F2D0]/80 mb-4">{description}</p>
          <div className="flex items-center text-secondary font-medium">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}