import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#F5F2D0]`}>
          404 - Page Not Found
        </h1>
        <p className="text-xl text-[#F5F2D0]/80">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-[#F36523] hover:bg-[#F36523]/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}