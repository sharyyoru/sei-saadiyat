'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/tracking';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#units', label: 'Residences' },
  { href: '#payment', label: 'Payment Plan' },
  { href: '#location', label: 'Location' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegisterClick = () => {
    trackCTAClick('header_register', 'header');
    const form = document.getElementById('register');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Image
              src="/images/sei-logo.png"
              alt="SEI Saadiyat"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
            <div className="hidden md:block h-8 w-px bg-white/30" />
            <Image
              src="/images/aldar-logo.webp"
              alt="Aldar Properties"
              width={80}
              height={40}
              className="hidden md:block h-6 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleRegisterClick}
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Register Interest
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-white/20 pt-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/90 hover:text-white text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={handleRegisterClick} className="mt-4">
                Register Interest
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
