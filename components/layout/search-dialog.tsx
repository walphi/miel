'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    setIsOpen(false);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full justify-start text-[#F5F2D0] border-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#F5F2D0]"
        >
          <SearchIcon className="mr-2 h-4 w-4" />
          Search...
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <form onSubmit={handleSearch} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search articles, guides, and pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F2D0] placeholder:text-[#F5F2D0]/60"
              autoFocus
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-[#F36523] hover:bg-[#F36523]/90"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <SearchIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}