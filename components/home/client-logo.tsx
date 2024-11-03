import Image from 'next/image';

interface ClientLogoProps {
  name: string;
  logo: string;
}

export function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="relative h-16 grayscale hover:grayscale-0 transition-all duration-300">
      <Image
        src={logo}
        alt={name}
        fill
        className="object-contain"
      />
    </div>
  );
}