import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import { blogPosts } from "@/app/resources/blog/data";
import { BlogCard } from "@/components/blog/blog-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const decodedTag = decodeURIComponent(params.tag);
  return {
    title: `${decodedTag} Articles | Miel Media Blog`,
    description: `Explore our articles tagged with ${decodedTag}`,
  };
}

export default function TagPage({ params }: TagPageProps) {
  const decodedTag = decodeURIComponent(params.tag);
  const taggedPosts = blogPosts.filter(post => 
    post.tags.some(tag => tag.toLowerCase() === decodedTag.toLowerCase())
  );

  if (taggedPosts.length === 0) {
    notFound();
  }

  const breadcrumbs = [
    { title: "Resources", href: "/resources" },
    { title: "Blog", href: "/resources/blog" },
    { title: `Tag: ${decodedTag}`, href: `/tags/${params.tag}` }
  ];

  return (
    <main className="min-h-screen pt-24">
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
              Articles Tagged: {decodedTag}
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our articles and insights related to {decodedTag}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taggedPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  const tags = new Set(blogPosts.flatMap(post => post.tags));
  return Array.from(tags).map(tag => ({
    tag: encodeURIComponent(tag),
  }));
}