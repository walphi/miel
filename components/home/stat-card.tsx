interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-lg text-white/80">{label}</div>
    </div>
  );
}