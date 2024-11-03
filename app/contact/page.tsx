'use client';

import { Playfair_Display } from "next/font/google";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const playfair = Playfair_Display({ subsets: ["latin"] });

const breadcrumbs = [
  { title: "Contact", href: "/contact" }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="max-w-3xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your digital presence and drive results for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}