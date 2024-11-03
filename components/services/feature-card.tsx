import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={cn("p-6 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] hover:shadow-lg transition-shadow", className)}>
      <Icon className="w-12 h-12 text-secondary mb-4" />
      <h3 className="text-xl font-semibold mb-3 text-[#F5F2D0]">{title}</h3>
      <p className="text-[#F5F2D0]/80">{description}</p>
    </div>
  );
}