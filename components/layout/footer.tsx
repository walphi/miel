import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const navigation = {
  services: [
    { name: 'AI Marketing', href: '/services/ai-marketing' },
    { name: 'Real Estate Marketing', href: '/services/real-estate' },
    { name: 'Enterprise Solutions', href: '/services/enterprise' },
  ],
  solutions: [
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Lead Generation', href: '/solutions/lead-generation' },
    { name: 'Marketing Automation', href: '/solutions/marketing-automation' },
  ],
  resources: [
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Guides', href: '/resources/guides' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
};

const social = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <div className="bg-[#1A1A1A] border-t border-[#2A2A2A]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6 pb-8 pt-16 sm:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-[#F5F2D0]">
              Miel Media
            </Link>
            <p className="text-sm leading-6 text-[#F5F2D0]/80">
              Transforming digital marketing with AI-powered solutions for enterprise and real estate clients.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#F5F2D0]/60 hover:text-[#F5F2D0]"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-[#F5F2D0]">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[#F5F2D0]/60 hover:text-[#F5F2D0]">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-[#F5F2D0]">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[#F5F2D0]/60 hover:text-[#F5F2D0]">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-[#F5F2D0]">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[#F5F2D0]/60 hover:text-[#F5F2D0]">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-[#F5F2D0]">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-[#F5F2D0]/60 hover:text-[#F5F2D0]">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-[#2A2A2A] pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-[#F5F2D0]/60">
            &copy; {new Date().getFullYear()} Miel Media. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}