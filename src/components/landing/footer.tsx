import { Logo } from '../logo';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-4 max-w-sm text-muted-foreground">
                Your partner in mental wellness. We provide a safe space for
                growth and healing.
              </p>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold">Connect</h3>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p>appointments@mindsutra.health</p>
                <p>+91 93924 49896</p>
                <p>+91 9136728496</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} HolisticMind Clinic. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ✅ FLOATING OFFICIAL WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919392449896"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </>
  );
}
