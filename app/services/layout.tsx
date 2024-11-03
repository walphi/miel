import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Miel Media",
  description: "Explore our comprehensive range of digital marketing and AI-powered services.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}