'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogCard } from './blog-card';
import { BlogPost } from '@/types/blog';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BlogCarouselProps {
  posts: BlogPost[];
}

export function BlogCarousel({ posts }: BlogCarouselProps) {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          enabled: true,
          prevEl: '.blog-swiper-prev',
          nextEl: '.blog-swiper-next',
        }}
        pagination={{
          enabled: true,
          el: '.blog-swiper-pagination',
          clickable: true,
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
        {posts.map((post) => (
          <SwiperSlide key={post.slug}>
            <BlogCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="blog-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-[#F36523] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="blog-swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-[#F36523] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="blog-swiper-pagination absolute bottom-0 left-0 right-0 flex justify-center" />
    </div>
  );
}