import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Miel Media",
  description: "Expert insights and articles on real estate marketing, digital strategies, and property market trends.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}