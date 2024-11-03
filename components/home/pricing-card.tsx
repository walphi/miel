'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  stripeLink: string;
}

export function PricingCard({ title, description, price, features, stripeLink }: PricingCardProps) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#2A2A2A] hover:border-[#F36523] transition-colors">
      <h3 className={`${playfair.className} text-3xl font-bold text-[#F5F2D0] mb-4`}>
        {title}
      </h3>
      <p className="text-[#F5F2D0]/80 mb-6">
        {description}
      </p>
      <div className="mb-8">
        <span className={`${playfair.className} text-4xl font-bold text-[#F5F2D0]`}>
          AED {price}
        </span>
        <span className="text-[#F5F2D0]/60">/month</span>
      </div>
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#F36523] mt-1 flex-shrink-0" />
            <span className="text-[#F5F2D0]/80">{feature}</span>
          </div>
        ))}
      </div>
      <Button 
        className="w-full bg-[#F36523] hover:bg-[#F36523]/90"
        onClick={() => window.location.href = stripeLink}
      >
        Get Started
      </Button>
    </div>
  );
}