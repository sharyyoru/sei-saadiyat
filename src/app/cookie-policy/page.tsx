import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | SEI Saadiyat',
  description: 'Cookie Policy for SEI Saadiyat website - Learn about how we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
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
              Cookie <span className="font-semibold">Policy</span>
            </h1>
            <p className="text-white/50 mt-4">Last updated: September 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use cookies and similar technologies for various purposes:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span><strong className="text-[#0a0a0a]">Essential Cookies:</strong> Required for the website to function properly</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span><strong className="text-[#0a0a0a]">Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span><strong className="text-[#0a0a0a]">Functional Cookies:</strong> Remember your preferences and settings</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span><strong className="text-[#0a0a0a]">Marketing Cookies:</strong> Track your activity to deliver relevant advertisements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0a0a0a] text-white">
                    <th className="px-4 py-3 text-left">Cookie Type</th>
                    <th className="px-4 py-3 text-left">Purpose</th>
                    <th className="px-4 py-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-600">Session Cookies</td>
                    <td className="px-4 py-3 text-gray-600">Essential website functionality</td>
                    <td className="px-4 py-3 text-gray-600">Session</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-600">Analytics Cookies</td>
                    <td className="px-4 py-3 text-gray-600">Website usage analysis</td>
                    <td className="px-4 py-3 text-gray-600">Up to 2 years</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-600">Preference Cookies</td>
                    <td className="px-4 py-3 text-gray-600">Remember user preferences</td>
                    <td className="px-4 py-3 text-gray-600">Up to 1 year</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-600">Marketing Cookies</td>
                    <td className="px-4 py-3 text-gray-600">Targeted advertising</td>
                    <td className="px-4 py-3 text-gray-600">Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may use third-party services that place cookies on your device. These services help us analyze website traffic, provide social media features, and deliver personalized advertisements. Third-party cookies are subject to the respective privacy policies of these providers.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span><strong className="text-[#0a0a0a]">Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span><strong className="text-[#0a0a0a]">Opt-Out Tools:</strong> Many advertising networks offer opt-out mechanisms</li>
              <li className="flex gap-3 text-gray-600"><span className="text-[#c9a962]">•</span><strong className="text-[#0a0a0a]">Device Settings:</strong> Mobile devices offer cookie management options</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">6. Local Storage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In addition to cookies, we may use local storage technologies to store data on your device. This helps us remember your preferences and improve your browsing experience. Local storage data can be managed through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">7. Do Not Track Signals</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Some browsers offer a &quot;Do Not Track&quot; feature that signals websites not to track your browsing activity. Our website may not respond to all Do Not Track signals, but we respect your privacy preferences where technically feasible.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We encourage you to periodically review this page for the latest information.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about our use of cookies, please contact us through the registration form on our website.
            </p>

            <div className="mt-12 p-6 bg-[#fafafa] rounded-xl">
              <p className="text-gray-600 text-sm">
                For more information about how we handle your data, please see our <Link href="/privacy-policy" className="text-[#c9a962] hover:underline">Privacy Policy</Link> and <Link href="/terms-of-use" className="text-[#c9a962] hover:underline">Terms of Use</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
