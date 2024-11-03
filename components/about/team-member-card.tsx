import Image from "next/image";
import { LinkedinIcon } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
}

export function TeamMemberCard({ name, role, image, linkedIn }: TeamMemberProps) {
  return (
    <div className="group relative">
      <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-secondary hover:text-secondary/80"
          >
            <LinkedinIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">Connect</span>
          </a>
        )}
      </div>
    </div>
  );
}