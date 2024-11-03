import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Consultancy | Miel Media",
  description: "Expert digital marketing consultancy services to transform your business.",
};

export default function ConsultancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}