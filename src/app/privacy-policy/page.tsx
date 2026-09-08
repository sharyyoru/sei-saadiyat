import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | SEI Saadiyat',
  description: 'Privacy Policy for SEI Saadiyat website - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
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
              Privacy <span className="font-semibold">Policy</span>
            </h1>
            <p className="text-white/50 mt-4">Last updated: September 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            
            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are committed to protecting your personal data and your right to privacy.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We may collect information about you in various ways, including:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Personal information you voluntarily provide (name, email, phone number)</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Information automatically collected (IP address, browser type, device information)</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Cookies and tracking technologies</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Information from third-party sources</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Provide, maintain, and improve our services</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Process your inquiries and respond to your requests</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Send you marketing and promotional communications (with your consent)</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Analyze usage patterns to enhance user experience</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">4. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Access your personal data</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Correct inaccurate data</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Request deletion of your data</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Withdraw consent for marketing communications</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">7. Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use cookies and similar tracking technologies to enhance your browsing experience. For more information, please see our <Link href="/cookie-policy" className="text-[#c9a962] hover:underline">Cookie Policy</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us through the registration form on our website.
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
