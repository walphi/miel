'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/resources/blog/${post.slug}`}
      className="group block h-full"
    >
      <div className="bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#3A3A3A] hover:border-[#F36523] transition-colors h-full">
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-[#F36523] mb-2">{post.category}</div>
          <h3 className="text-xl font-semibold mb-3 text-[#F5F2D0] group-hover:text-[#F36523] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-[#F5F2D0]/60 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center text-[#F36523] font-medium">
            Read More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}