'use client';

import { useEffect } from 'react';
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCcw } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#F5F2D0]`}>
          Something went wrong
        </h1>
        <p className="text-xl text-[#F5F2D0]/80">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={reset}
            className="bg-[#F36523] hover:bg-[#F36523]/90"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-[#F5F2D0] text-[#F5F2D0] hover:bg-[#F5F2D0]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}