interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={className}>
      <div className="text-4xl font-bold text-secondary mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}