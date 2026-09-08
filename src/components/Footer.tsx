'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/">
              <Image
                src="/images/sei_saadiyat_logo_light_en.webp"
                alt="SEI Saadiyat"
                width={140}
                height={50}
                className="mb-6 h-10 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              SEI Saadiyat by Aldar - A sanctuary of refined living on Abu
              Dhabi&apos;s most prestigious island.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/50">
              <li>
                <Link href="/#about" className="hover:text-[#c9a962] transition-colors">
                  About SEI
                </Link>
              </li>
              <li>
                <Link href="/#units" className="hover:text-[#c9a962] transition-colors">
                  Residences
                </Link>
              </li>
              <li>
                <Link href="/#payment" className="hover:text-[#c9a962] transition-colors">
                  Payment Plan
                </Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-[#c9a962] transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/#register" className="hover:text-[#c9a962] transition-colors">
                  Register Interest
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#c9a962] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Location</h4>
            <div className="flex items-start gap-3 text-white/50">
              <MapPin className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
              <span>Saadiyat Island, Abu Dhabi, UAE</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Developer</h4>
            <Image
              src="/images/aldar-logo.webp"
              alt="Aldar Properties"
              width={120}
              height={40}
              className="mb-4 opacity-80"
            />
            <p className="text-white/50 text-sm">
              Abu Dhabi&apos;s leading real estate developer
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Aldar Properties. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-[#c9a962] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-[#c9a962] transition-colors">
                Terms of Use
              </Link>
              <Link href="/cookie-policy" className="hover:text-[#c9a962] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          <p className="text-xs text-white/30 mt-6 text-center">
            Disclaimer: All images, plans, and specifications are for
            illustration purposes only and are subject to change without notice.
            The developer reserves the right to make revisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
