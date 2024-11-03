'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, LineChart, Brain } from 'lucide-react';
import { Playfair_Display } from "next/font/google";
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ["latin"] });

const projects = [
  {
    id: 1,
    title: "Luxury Real Estate Platform",
    category: "Real Estate",
    description: "AI-powered property matching platform for luxury real estate in Dubai",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    stats: [
      { label: "Increase in Leads", value: "200%" },
      { label: "Conversion Rate", value: "15%" },
    ],
    icon: Building2
  },
  {
    id: 2,
    title: "Enterprise Analytics Dashboard",
    category: "Enterprise Solutions",
    description: "Real-time analytics platform for enterprise decision making",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    stats: [
      { label: "Data Processing", value: "500TB+" },
      { label: "User Adoption", value: "98%" },
    ],
    icon: LineChart
  },
  {
    id: 3,
    title: "AI Marketing Automation",
    category: "Marketing Technology",
    description: "Intelligent marketing automation system with predictive analytics",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    stats: [
      { label: "ROI Increase", value: "350%" },
      { label: "Time Saved", value: "75%" },
    ],
    icon: Brain
  }
];

export function WorkShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="space-y-12">
      {/* Project Navigation */}
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className={`p-6 text-left rounded-lg transition-all ${
              activeProject.id === project.id
                ? 'bg-secondary/10 border-secondary'
                : 'bg-card hover:bg-secondary/5'
            } border`}
          >
            <project.icon className={`w-8 h-8 mb-4 ${
              activeProject.id === project.id ? 'text-secondary' : 'text-muted-foreground'
            }`} />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </button>
        ))}
      </div>

      {/* Project Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex gap-4">
                {activeProject.stats.map((stat, index) => (
                  <div key={index} className="text-white">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className={`${playfair.className} text-3xl font-bold mb-4`}>
                {activeProject.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {activeProject.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>AI-powered analytics and optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Real-time performance monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Advanced automation capabilities</span>
                </li>
              </ul>
            </div>

            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}