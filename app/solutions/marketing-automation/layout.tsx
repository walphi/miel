import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Automation | Miel Media",
  description: "Transform your marketing operations with AI-powered automation solutions.",
};

export default function MarketingAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}