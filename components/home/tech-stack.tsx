'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const technologies = [
  {
    name: "HubSpot",
    logo: "/images/hubspot.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  },
  {
    name: "Vercel",
    logo: "/images/vercel.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  },
  {
    name: "Strapi",
    logo: "/images/strapi.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  },
  {
    name: "OpenAI",
    logo: "/images/openai.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  },
  {
    name: "Anthropic",
    logo: "/images/anthropic.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  },
  {
    name: "Gemini",
    logo: "/images/gemini.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  },
  {
    name: "Shopify",
    logo: "/images/shopify.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  },
  {
    name: "Fast API",
    logo: "/images/fastapi.svg", 
    width: 100,  // Add custom dimensions for each logo
    height: 40,
  }
  
];

export function TechStack() {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-[#F5F2D0]`}>
          Powered by Leading Technologies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center w-[100px]"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity [filter:invert(95%)_sepia(5%)_saturate(1000%)_hue-rotate(12deg)_brightness(103%)_contrast(103%)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}