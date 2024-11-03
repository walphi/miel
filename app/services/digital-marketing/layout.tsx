import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Miel Media",
  description: "Transform your digital presence with our comprehensive marketing solutions.",
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}