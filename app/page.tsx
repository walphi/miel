'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { AnimatedTabs } from '@/components/home/animated-tabs';
import { WorkShowcase } from '@/components/home/work-showcase';
import { TestimonialSlider } from '@/components/home/testimonial-slider';
import { FeatureSection } from '@/components/home/feature-section';
import { TechStack } from '@/components/home/tech-stack';
import { PricingSection } from '@/components/home/pricing-section';
import { BookingSection } from '@/components/home/booking-section';
import { BlogSection } from '@/components/home/blog-section';
import AnimatedHexagons from '@/components/background/AnimatedHexagons';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="relative">
      {/* Animated Background */}
      <AnimatedHexagons />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl relative z-10">
            <h1
              className={`${playfair.className} text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-[#F5F2D0]`}
            >
              Transform Your Digital Presence with AI-Powered Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-[#F5F2D0]/80">
              Innovative digital marketing solutions for enterprise and real
              estate clients, powered by artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#F36523] hover:bg-[#F36523]/90 text-white h-14 px-8 text-lg"
                onClick={() => {
                  document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        title="AI-Powered Real Estate Marketing"
        description="Generate high-quality leads with cutting-edge AI technology"
        image="https://145532521.fs1.hubspotusercontent-eu1.net/hubfs/145532521/HomePageSection3.png"
        imagePosition="right"
      />

      <FeatureSection
        title="Seamless Collaboration"
        description="Work together efficiently with our integrated collaboration tools and real-time updates"
        image="https://145532521.fs1.hubspotusercontent-eu1.net/hubfs/145532521/HomePageSection5i.png"
        imagePosition="left"
      />

      <FeatureSection
        title="Multi-Channel Campaign Management"
        description="Streamline your marketing efforts across all channels with our unified campaign management platform"
        image="https://145532521.fs1.hubspotusercontent-eu1.net/hubfs/145532521/HomePageSection4.png"
        imagePosition="right"
      />

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-[#F5F2D0]`}
          >
            Our Services
          </h2>
          <AnimatedTabs />
        </div>
      </section>

      {/* Technology Stack */}
      <TechStack />

      {/* Work Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-[#F5F2D0]`}
          >
            Our Work
          </h2>
          <WorkShowcase />
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-[#F5F2D0]`}
          >
            Client Success Stories
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Booking Section */}
      <div id="booking-section">
        <BookingSection />
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1a1a1a]/10">
        <div className="container mx-auto text-center">
          <h2
            className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6 text-[#F5F2D0]`}
          >
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#F5F2D0]/80 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can help achieve your
            business goals.
          </p>
          <Button 
            size="lg" 
            className="bg-[#F36523] hover:bg-[#F36523]/90"
            onClick={() => {
              document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule a Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}