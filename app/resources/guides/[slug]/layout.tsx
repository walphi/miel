import { Metadata } from "next";

interface GuideLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: GuideLayoutProps): Promise<Metadata> {
  // This would typically fetch data from a CMS or API
  const title = params.slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Marketing Guides | Miel Media`,
    description: "Learn about data-driven marketing strategies and analytics to improve your marketing ROI.",
  };
}

export default function GuideLayout({ children }: GuideLayoutProps) {
  return <>{children}</>;
}