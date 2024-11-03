interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <blockquote className="text-gray-700 mb-6">"{quote}"</blockquote>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-gray-600 text-sm">{role}</div>
        <div className="text-secondary text-sm">{company}</div>
      </div>
    </div>
  );
}