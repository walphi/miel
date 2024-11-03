'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Zap, LineChart, Users } from 'lucide-react';

const tabContent = [
  {
    value: "ai",
    title: "AI Marketing",
    icon: Brain,
    content: {
      title: "AI-Powered Marketing Solutions",
      description: "Leverage artificial intelligence to optimize your marketing campaigns and drive better results.",
      features: [
        "Predictive Analytics",
        "Automated Campaign Optimization",
        "Smart Audience Targeting",
        "AI-Driven Content Generation"
      ]
    }
  },
  {
    value: "automation",
    title: "Marketing Automation",
    icon: Zap,
    content: {
      title: "Streamline Your Marketing",
      description: "Automate repetitive tasks and focus on strategic initiatives that drive growth.",
      features: [
        "Email Marketing Automation",
        "Lead Scoring & Nurturing",
        "Campaign Management",
        "Performance Tracking"
      ]
    }
  },
  {
    value: "analytics",
    title: "Advanced Analytics",
    icon: LineChart,
    content: {
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and reporting.",
      features: [
        "Custom Dashboards",
        "ROI Tracking",
        "Conversion Analytics",
        "Performance Metrics"
      ]
    }
  },
  {
    value: "strategy",
    title: "Strategic Planning",
    icon: Users,
    content: {
      title: "Strategic Marketing Solutions",
      description: "Develop comprehensive marketing strategies aligned with your business goals.",
      features: [
        "Market Analysis",
        "Competitive Research",
        "Growth Strategy",
        "Brand Development"
      ]
    }
  }
];

export function AnimatedTabs() {
  const [selectedTab, setSelectedTab] = useState(tabContent[0].value);

  return (
    <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="w-full">
      <TabsList className="grid grid-cols-2 lg:grid-cols-4 h-auto p-2 mb-8">
        {tabContent.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center gap-2 py-4 text-[#F4F1CF] data-[state=active]:text-[#F4F1CF]"
            >
              <Icon className="h-5 w-5" />
              <span>{tab.title}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      <div className="relative">
        <AnimatePresence mode="wait">
          {tabContent.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-[#1a1a1a] text-#F4F1CF p-8 rounded-lg shadow-sm dark-ai-section !bg-opacity-100"
              >
                <h3 className="text-2xl font-bold mb-4">{tab.content.title}</h3>
                <p className="text-#F4F1CF-600 mb-6">{tab.content.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tab.content.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </div>
    </Tabs>
  );
}
