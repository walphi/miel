import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ProcessStep({ number, title, description, icon: Icon }: ProcessStepProps) {
  return (
    <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <Icon className="w-10 h-10 text-secondary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}