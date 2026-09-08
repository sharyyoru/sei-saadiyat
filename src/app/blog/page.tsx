import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog | SEI Saadiyat - Insights on Abu Dhabi Real Estate',
  description: 'Expert insights on Saadiyat Island real estate, UAE property investment, Golden Visa, and luxury living in Abu Dhabi.',
  openGraph: {
    title: 'Blog | SEI Saadiyat',
    description: 'Expert insights on Saadiyat Island real estate and UAE property investment.',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#0a0a0a] pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
            <p className="text-[#c9a962] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Insights & Updates
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
              SEI Saadiyat <span className="font-semibold">Blog</span>
            </h1>
            <p className="text-white/60 text-lg">
              Expert insights on Saadiyat Island real estate, UAE property investment, 
              and luxury living in Abu Dhabi.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#c9a962] text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-[#0a0a0a] mb-3 group-hover:text-[#c9a962] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#c9a962] font-medium text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-light mb-4">
            Ready to Invest in <span className="font-semibold text-[#c9a962]">Saadiyat Island</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Register your interest today and receive exclusive pricing for SEI Saadiyat residences.
          </p>
          <Link 
            href="/#register"
            className="inline-flex items-center gap-2 bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Register Your Interest
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
