import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    title: string;
    href: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            href="/" 
            className="text-[#F5F2D0]/60 hover:text-[#F5F2D0] transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-[#F5F2D0]/60" />
            <Link
              href={item.href}
              className={`${
                index === items.length - 1
                  ? 'text-[#F5F2D0]'
                  : 'text-[#F5F2D0]/60 hover:text-[#F5F2D0]'
              } transition-colors`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}