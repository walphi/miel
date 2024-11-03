import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
      <Icon className="w-10 h-10 text-secondary mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}