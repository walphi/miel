import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Heart, Target, Lightbulb, Users, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamMemberCard } from "@/components/about/team-member-card";
import { ValueCard } from "@/components/about/value-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Us | Miel Media",
  description: "Learn about our mission, values, and the team behind Miel Media.",
};

const breadcrumbs = [
  { title: "About", href: "/about" }
];

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge digital solutions",
    icon: Lightbulb
  },
  {
    title: "Excellence",
    description: "Delivering exceptional results that exceed expectations",
    icon: Target
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and honesty",
    icon: Shield
  },
  {
    title: "Collaboration",
    description: "Working together to achieve remarkable outcomes",
    icon: Users
  }
];



const team = [
  
  {
    name: "Mohammed Mustafa",
    role: "Head of Marketing",
    image: "/images/FlashAbout.jpg",
    linkedIn: "https://www.linkedin.com/in/musthafamelethil/"
  },

  {
    name: "Phillip Walsh",
    role: "Founder",
    image: "/images/MeAbout.jpg",
    linkedIn: "https://www.linkedin.com/in/phillipdwalsh/"
  },
  
  {
    name: "James Mason",
    role: "Business Development",
    image: "/images/James.jpg",
    linkedIn: "https://www.linkedin.com/in/musthafamelethil/"
  }
];



export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">About Miel Media</h1>
        <p className="text-xl">Transforming businesses through innovative digital solutions since 2017</p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {values.map((value) => (
          <div key={value.title} className="p-6 border rounded-lg">
            <value.icon className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>

      

      

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="mb-2">{member.role}</p>
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
                       {/* About Us Sections */}
      <div className="grid grid-cols-1 gap-8 mb-16">
        {/* Who We Are Section */}
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#F3F0CE]">Who We Are</h2>
          <p className="text-[#F3F0CE] mb-4">
            We are a pioneering digital marketing agency founded in 2017, specializing in AI-powered solutions for enterprise and real estate clients. Based in Downtown Dubai, our team of digital innovators combines cutting-edge artificial intelligence with proven marketing strategies to transform businesses' digital presence.
          </p>
        </div>

        {/* Our Approach Section */}
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#F3F0CE]">Our Approach</h2>
          <p className="text-[#F3F0CE] mb-4">
            We leverage advanced AI technology and deep industry expertise to deliver exceptional results. Our unified platform approach means:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Strategic integration of AI across all marketing channels",
              "Data-driven decision making and real-time optimization",
              "Seamless collaboration between our team and yours",
              "Custom solutions tailored to your specific industry needs"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                <p className="text-[#F3F0CE]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#F3F0CE]">Our Expertise</h2>
          <p className="text-[#F3F0CE] mb-4">Digital Marketing & AI Solutions:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Strategic Digital Marketing",
              "AI-Powered Analytics",
              "Real Estate Marketing Specialists",
              "Lead Generation",
              "Content Marketing",
              "Social Media Marketing",
              "Email Marketing Automation",
              "SEO Services",
              "Performance Marketing"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                <p className="text-[#F3F0CE]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Commitment Section */}
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#F3F0CE]">Client Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Transparent project management and communication",
              "Real-time collaboration tools and updates",
              "Multi-channel campaign management",
              "Regular performance reporting",
              "AI-driven insights and optimization",
              "Dedicated support team"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                <p className="text-[#F3F0CE]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Impact Section */}
        <div className="bg-zinc-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#F3F0CE]">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Proven track record in enterprise and real estate sectors",
              "AI-powered lead generation",
              "Integrated marketing solutions",
              "Multi-channel campaign success",
              "Client satisfaction across UAE and beyond"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-600" />
                <p className="text-[#F3F0CE]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>




    </div>
    


  )
}




