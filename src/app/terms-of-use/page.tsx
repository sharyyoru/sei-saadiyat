import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use | SEI Saadiyat',
  description: 'Terms of Use for SEI Saadiyat website - Please read these terms carefully before using our website.',
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#0a0a0a] pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl text-white font-light">
              Terms of <span className="font-semibold">Use</span>
            </h1>
            <p className="text-white/50 mt-4">Last updated: September 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">2. Use of Website</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Infringe the rights of others</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Restrict or inhibit anyone else&apos;s use of the website</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Violate any applicable laws or regulations</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Transmit harmful, offensive, or illegal content</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of the website owner and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">4. Property Information Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All property information, including prices, specifications, floor plans, renders, and other details provided on this website are for general information purposes only. They are subject to change without notice and do not constitute an offer or contract. Actual properties may vary from the representations shown.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">5. No Warranty</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This website is provided &quot;as is&quot; without any warranties, expressed or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of this website or any content provided herein.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">7. User Submissions</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Any information you submit through this website, including registration forms and inquiries, must be accurate and truthful. You are responsible for maintaining the confidentiality of any account information.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites and do not endorse them.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">9. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You agree to indemnify and hold harmless the website owner and its affiliates from any claims, damages, losses, or expenses arising from your violation of these terms or your use of the website.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">10. Modifications</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of any modifications.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Abu Dhabi.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">12. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about these Terms of Use, please contact us through the registration form on our website.
            </p>

            <div className="mt-12 p-6 bg-[#fafafa] rounded-xl">
              <p className="text-gray-600 text-sm">
                By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our <Link href="/privacy-policy" className="text-[#c9a962] hover:underline">Privacy Policy</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
