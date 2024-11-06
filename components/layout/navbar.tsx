'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Playfair_Display } from "next/font/google";
import { SearchDialog } from './search-dialog';

const playfair = Playfair_Display({ subsets: ["latin"] });

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      items: [
        {
          name: 'Digital Marketing',
          href: '/services/digital-marketing',
          items: [
            { name: 'Strategic Digital Marketing', href: '/services/digital-marketing/strategic' },
            { name: 'Performance Marketing', href: '/services/digital-marketing/performance' },
            { name: 'SEO Services', href: '/services/digital-marketing/seo' },
            { name: 'Social Media Marketing', href: '/services/digital-marketing/social-media' },
            { name: 'Email Marketing Automation', href: '/services/digital-marketing/email' }
            
            
          ]
        },
        { name: 'Real Estate Marketing', href: '/services/real-estate' },
        { name: 'Lead Generation', href: '/services/lead-generation' },
        { name: 'AI Solutions', href: '/services/ai-marketing' },
        { name: 'Consultancy', href: '/services/consultancy' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Creative Services', href: '/services/creative' }
      ],
    },
    {
      name: 'Resources',
      items: [
        { name: 'Blog', href: '/resources/blog' },
        { name: 'Guides', href: '/resources/guides' },
        { name: 'Case Studies', href: '/resources/case-studies' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleDropdownClick = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubmenu(null);
  };

  const handleSubmenuClick = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className="fixed w-full bg-[#1A1A1A] z-50 border-b border-[#2A2A2A]">
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={cn(playfair.className, "text-2xl font-bold text-[#F5F2D0]")}>
              Miel Media
            </Link>
          </div>

          {/* Search (Desktop) */}
          <div className="hidden lg:block mx-4 flex-1 max-w-md">
            <SearchDialog />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.main.map((item) => (
              <div key={item.name} className="relative group">
                {item.items ? (
                  <button
                    onClick={() => handleDropdownClick(item.name)}
                    className={cn(
                      "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                      openDropdown === item.name ? "text-[#F36523]" : "text-[#F5F2D0] hover:text-[#F36523]"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "py-2 text-sm font-medium transition-colors",
                      isActive(item.href) ? "text-[#F36523]" : "text-[#F5F2D0] hover:text-[#F36523]"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.items && (
                  <div
                    className={cn(
                      "absolute left-0 top-full w-64 bg-[#1A1A1A] rounded-md shadow-lg py-2 transition-all transform",
                      openDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}
                  >
                    {item.items.map((subItem) => (
                      <div key={subItem.name}>
                        {subItem.items ? (
                          <div>
                            <button
                              onClick={() => handleSubmenuClick(subItem.name)}
                              className={cn(
                                "flex items-center justify-between w-full px-4 py-2 text-sm transition-colors",
                                openSubmenu === subItem.name ? "text-[#F36523] bg-[#2A2A2A]" : "text-[#F5F2D0] hover:text-[#F36523] hover:bg-[#2A2A2A]"
                              )}
                            >
                              {subItem.name}
                              <ChevronDown className={cn(
                                "h-4 w-4 transition-transform",
                                openSubmenu === subItem.name ? "rotate-180" : ""
                              )} />
                            </button>
                            <div
                              className={cn(
                                "pl-4 space-y-1",
                                openSubmenu === subItem.name ? "block" : "hidden"
                              )}
                            >
                              {subItem.items.map((childItem) => (
                                <Link
                                  key={childItem.name}
                                  href={childItem.href}
                                  className={cn(
                                    "block px-4 py-2 text-sm transition-colors",
                                    isActive(childItem.href) ? "text-[#F36523] bg-[#2A2A2A]" : "text-[#F5F2D0] hover:text-[#F36523] hover:bg-[#2A2A2A]"
                                  )}
                                >
                                  {childItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors",
                              isActive(subItem.href) ? "text-[#F36523] bg-[#2A2A2A]" : "text-[#F5F2D0] hover:text-[#F36523] hover:bg-[#2A2A2A]"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Get Started Button */}
            <Button className="bg-[#F36523] hover:bg-[#F36523]/90 text-white">
              <Link href="/#booking-section">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Search and Menu */}
          <div className="flex lg:hidden items-center gap-4">
            <SearchDialog />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#F5F2D0]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-black/20 z-50 lg:hidden transition-opacity",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#1A1A1A] shadow-lg p-6 transition-transform"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className={cn(playfair.className, "text-2xl font-bold text-[#F5F2D0]")}>
                Miel Media
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-[#F5F2D0]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="divide-y divide-[#2A2A2A]">
              {navigation.main.map((item) => (
                <div key={item.name} className="py-3">
                  {item.items ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="flex items-center justify-between w-full text-left text-base font-medium text-[#F5F2D0] py-2"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openDropdown === item.name ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "mt-2 space-y-2 pl-4",
                          openDropdown === item.name ? "block" : "hidden"
                        )}
                      >
                        {item.items.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.items ? (
                              <div>
                                <button
                                  onClick={() => handleSubmenuClick(subItem.name)}
                                  className="flex items-center justify-between w-full text-left text-sm font-medium text-[#F5F2D0] py-2"
                                >
                                  {subItem.name}
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 transition-transform",
                                      openSubmenu === subItem.name ? "rotate-180" : ""
                                    )}
                                  />
                                </button>
                                <div
                                  className={cn(
                                    "mt-2 space-y-2 pl-4",
                                    openSubmenu === subItem.name ? "block" : "hidden"
                                  )}
                                >
                                  {subItem.items.map((childItem) => (
                                    <Link
                                      key={childItem.name}
                                      href={childItem.href}
                                      className={cn(
                                        "block py-2 text-sm",
                                        isActive(childItem.href) ? "text-[#F36523]" : "text-[#F5F2D0] hover:text-[#F36523]"
                                      )}
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {childItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block py-2 text-sm",
                                  isActive(subItem.href) ? "text-[#F36523]" : "text-[#F5F2D0] hover:text-[#F36523]"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-base font-medium",
                        isActive(item.href) ? "text-[#F36523]" : "text-[#F5F2D0] hover:text-[#F36523]"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="w-full bg-[#F36523] hover:bg-[#F36523]/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}