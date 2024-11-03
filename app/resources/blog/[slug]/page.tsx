import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { Calendar, Clock, Tag, User } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { TagLink } from "@/components/blog/tag-link";
import { blogPosts } from "../data";

const playfair = Playfair_Display({ subsets: ["latin"] });

type Props = {
  params: {
    slug: string
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    };
  }

  return {
    title: `${post.title} | Miel Media Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { title: "Resources", href: "/resources" },
    { title: "Blog", href: "/resources/blog" },
    { title: post.title, href: `/resources/blog/${params.slug}` }
  ];

  return (
    <main className="min-h-screen pt-24">
      <article className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="text-secondary">{post.category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
            <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-6 border-t">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <TagLink key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}