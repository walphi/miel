'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Playfair_Display } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { blogPosts } from '../resources/blog/data';

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<typeof blogPosts>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const searchResults = blogPosts.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      );
      setResults(searchResults);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${playfair.className} text-4xl font-bold mb-6`}>
            Search Results for "{query}"
          </h1>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-secondary" />
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No results found for your search. Try different keywords.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {results.map((result) => (
                <Link 
                  key={result.slug} 
                  href={`/resources/blog/${result.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-secondary transition-colors"
                >
                  <div className="grid md:grid-cols-[240px,1fr] gap-6">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={result.image}
                        alt={result.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-secondary mb-2">
                        {result.category}
                      </div>
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                        {result.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {result.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}