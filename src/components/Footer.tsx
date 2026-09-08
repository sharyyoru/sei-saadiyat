'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/images/Main logo.png"
              alt="SEI Saadiyat"
              width={64}
              height={64}
              className="mb-6 w-16 h-16"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              SEI Saadiyat by Aldar - A sanctuary of refined living on Abu
              Dhabi&apos;s most prestigious island.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/50">
              <li>
                <a href="#about" className="hover:text-[#c9a962] transition-colors">
                  About SEI
                </a>
              </li>
              <li>
                <a href="#units" className="hover:text-[#c9a962] transition-colors">
                  Residences
                </a>
              </li>
              <li>
                <a href="#payment" className="hover:text-[#c9a962] transition-colors">
                  Payment Plan
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#c9a962] transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-[#c9a962] transition-colors">
                  Register Interest
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <span>+971 800 ALDAR (25327)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <span>info@aldar.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <span>Saadiyat Island, Abu Dhabi, UAE</span>
              </li>
            </ul>
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
              <a href="#" className="hover:text-[#c9a962] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#c9a962] transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-[#c9a962] transition-colors">
                Cookie Policy
              </a>
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
