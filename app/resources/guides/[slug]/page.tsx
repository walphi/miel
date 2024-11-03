import { notFound } from "next/navigation";
import { GuideContent } from "@/components/resources/guide-content";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

// This would typically come from a CMS or API
const guides = {
  "analytics-data-driven-marketing": {
    title: "Analytics and Data-Driven Marketing",
    description: "Learn how to leverage data analytics to make informed marketing decisions and improve ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Analytics",
    readTime: "14 min",
    publishDate: "January 15, 2024",
    content: "Guide content here..."
  }
};

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = guides[params.slug as keyof typeof guides];

  if (!guide) {
    notFound();
  }

  const breadcrumbs = [
    { title: "Resources", href: "/resources" },
    { title: "Guides", href: "/resources/guides" },
    { title: guide.title, href: `/resources/guides/${params.slug}` }
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <GuideContent {...guide} />
      </div>
    </main>
  );
}