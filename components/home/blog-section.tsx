'use client';

import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/app/resources/blog/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {recentPosts.map((post) => (
              <SwiperSlide key={post.slug}>
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
                      <h3 className="text-xl font-semibold mb-3 text-[#F4F1CF] group-hover:text-[#F4F1CF] transition-colors line-clamp-2">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-[#F4F1CF] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-[#F4F1CF] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination */}
          <div className="swiper-pagination" />
        </div>

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
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
        .swiper-button-prev,
        .swiper-button-next {
          background: #F4F1CF !important;
          color: #1A1A1A !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #F5F2D0;
          opacity: 0.5;
          margin: 0 4px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #F36523;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}