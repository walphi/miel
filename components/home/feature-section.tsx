'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Playfair_Display } from "next/font/google";
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ["latin"] });

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export function FeatureSection({ title, description, image, imagePosition }: FeatureSectionProps) {
  const contentOrder = imagePosition === 'right' ? 'order-first' : 'order-last';
  const imageOrder = imagePosition === 'right' ? 'order-last' : 'order-first';

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'right' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`space-y-6 ${contentOrder}`}
          >
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#F5F2D0]`}>
              {title}
            </h2>
            <p className="text-lg text-[#F5F2D0]/80">
              {description}
            </p>
            <Button 
              className="bg-[#F36523] hover:bg-[#F36523]/90"
              onClick={() => window.location.href = '/services/digital-marketing/performance'}
            >
              Explore more
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'right' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative h-[400px] rounded-lg overflow-hidden ${imageOrder}`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}