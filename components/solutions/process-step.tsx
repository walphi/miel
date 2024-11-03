import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ProcessStep({ number, title, description, icon: Icon }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <div>
        <div className="text-sm text-secondary font-semibold mb-1">Step {number}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}