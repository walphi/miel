import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consultancy Services Dubai | Business Solutions",
  description: "Expert consultancy services in Dubai offering strategic business solutions and guidance.",
};

export default function ConsultancyPage() {
  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F3F0CE]">
      {/* Content goes here */}
      <h1>Consultancy Services</h1>
    </main>
  );
}