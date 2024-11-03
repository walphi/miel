import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Miel Media",
  description: "Learn about our mission, values, and the team behind Miel Media.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}