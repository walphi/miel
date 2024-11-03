import { LucideIcon } from "lucide-react";

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceFeature({ title, description, icon: Icon }: ServiceFeatureProps) {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-secondary mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}