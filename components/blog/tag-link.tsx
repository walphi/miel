import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagLinkProps {
  tag: string;
  className?: string;
}

export function TagLink({ tag, className }: TagLinkProps) {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className={cn(
        "inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm hover:bg-secondary/20 transition-colors",
        className
      )}
    >
      {tag}
    </Link>
  );
}