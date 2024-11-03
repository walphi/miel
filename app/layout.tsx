import './globals.css';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const playfair = Playfair_Display({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Miel Media | AI-First Digital Marketing Agency',
  description: 'Leading AI-driven digital marketing agency specializing in enterprise solutions, real estate marketing, and innovative digital strategies.',
  keywords: 'digital marketing agency dubai, ai marketing agency, real estate marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-gb" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://miel.media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={openSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}