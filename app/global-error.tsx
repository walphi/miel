'use client';

import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#1A1A1A]">
          <div className="text-center space-y-6 max-w-2xl">
            <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#F5F2D0]`}>
              Something went wrong
            </h1>
            <p className="text-xl text-[#F5F2D0]/80">
              A critical error occurred. Please try refreshing the page.
            </p>
            <Button
              onClick={reset}
              className="bg-[#F36523] hover:bg-[#F36523]/90"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}