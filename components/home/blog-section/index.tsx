'use client';

import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/app/resources/blog/data";
import { BlogCarousel } from "./blog-carousel";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function BlogSection() {
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <section className="py-20 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6 text-[#F5F2D0]`}>
            Latest Insights
          </h2>
          <p className="text-xl text-[#F5F2D0]/80 max-w-2xl mx-auto">
            Stay updated with our latest articles and industry insights
          </p>
        </div>

        <BlogCarousel posts={recentPosts} />

        <div className="text-center mt-12">
          <Link href="/resources/blog">
            <Button 
              size="lg"
              className="bg-[#F36523] hover:bg-[#F36523]/90"
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .blog-swiper-pagination {
          --swiper-pagination-color: #F36523;
          --swiper-pagination-bullet-inactive-color: #F5F2D0;
          --swiper-pagination-bullet-inactive-opacity: 0.5;
          --swiper-pagination-bullet-size: 8px;
          --swiper-pagination-bullet-horizontal-gap: 4px;
        }
      `}</style>
    </section>
  );
}