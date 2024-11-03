import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Guides & Resources | Miel Media",
  description: "Explore our comprehensive collection of marketing guides and resources to help grow your business.",
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}