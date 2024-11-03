import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Generation Solutions | Miel Media",
  description: "Generate high-quality leads with our proven strategies and solutions.",
};

export default function LeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}