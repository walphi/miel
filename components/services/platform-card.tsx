import Image from "next/image";

interface PlatformCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
}

export function PlatformCard({ name, description, image, features }: PlatformCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2A2A2A] transition-shadow hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-[#F5F2D0]">{name}</h3>
        <p className="text-[#F5F2D0]/80 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#F5F2D0]/80">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}