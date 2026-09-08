import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts, getBlogPost, getAllBlogSlugs } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | SEI Saadiyat Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#0a0a0a] pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="inline-block bg-[#c9a962] text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/60">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-semibold prose-headings:text-[#0a0a0a]
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-strong:text-[#0a0a0a]
                prose-ul:text-gray-600
                prose-li:marker:text-[#c9a962]
                prose-table:text-sm
                prose-th:bg-[#0a0a0a] prose-th:text-white prose-th:px-4 prose-th:py-2
                prose-td:border prose-td:px-4 prose-td:py-2"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#0a0a0a] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl text-white font-light mb-4">
              Interested in <span className="font-semibold text-[#c9a962]">SEI Saadiyat</span>?
            </h2>
            <p className="text-white/60 mb-6">
              Starting from AED 2.95M with a flexible 50/50 payment plan.
            </p>
            <Link 
              href="/#register"
              className="inline-flex items-center gap-2 bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Register Your Interest
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-12">
            Related <span className="font-semibold">Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <article 
                key={relatedPost.slug}
                className="group"
              >
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[#c9a962] text-xs font-semibold uppercase tracking-wider">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0a0a0a] mt-2 group-hover:text-[#c9a962] transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.some(c => c.includes('---'))) return '';
      const isHeader = cells.every(c => !c.includes('✓') && !c.includes('AED'));
      const tag = isHeader ? 'th' : 'td';
      return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table><tbody>$&</tbody></table>')
    .replace(/^(?!<[huplt])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hut])/g, '$1')
    .replace(/(<\/[hut][^>]*>)<\/p>/g, '$1');
}
