import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions | Miel Media",
  description: "Digital transformation and marketing solutions for enterprise organizations.",
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}