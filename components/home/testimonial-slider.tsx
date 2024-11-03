'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote:
      'I worked with Miel Media (Phillip) on building our companies bespoke website as well as  building our presence via Digital advertising. Phillip has a wealth of knowledge and tools to share for your company to grow. He was available for us every step of the way to ensure smooth activations and optimum goals being reached. Thank you!',
    author: 'Cheryl Cathcart',
    role: 'Marketing Director',
    company: 'HALM',
    image:
      'https://145532521.fs1.hubspotusercontent-eu1.net/hubfs/145532521/Cheryl%20Cathcart.jpg',
  },
  {
    quote:
      'I was working with Miel Media for a campaign in Dubai real estate and he was superb in setting me up with great videos and visuals as well as guiding me through the tricky road of all things Digital!',
    author: 'Lucy J Parker',
    role: 'Director of Brokerage',
    company: 'Keller Williams Real Estate Dubai',
    image:
      'https://145532521.fs1.hubspotusercontent-eu1.net/hubfs/145532521/lucyparker.jpg',
  },
  {
    quote:
      'Their real estate marketing solutions helped us achieve record-breaking sales in a competitive market.',
    author: 'Emma Williams',
    role: 'Sales Director',
    company: 'Luxury Properties',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-8 md:p-12">
        <Quote className="w-12 h-12 text-secondary/20 mb-6" />
        <blockquote className="text-xl md:text-2xl text-[#F5F2D0]/60 mb-8">
          "{current.quote}"
        </blockquote>
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={current.image}
              alt={current.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-[#F4F1CF]">{current.author}</div>
            <div className="text-[#F5F2D0]/60">{current.role}</div>
            <div className="text-secondary text-sm">{current.company}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
