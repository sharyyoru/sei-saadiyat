import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts, getBlogPost, getAllBlogSlugs } from '@/lib/blog-data';
import { BlogLeadCapture } from '@/components/BlogLeadCapture';

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
      <section className="bg-[#0a0a0a] pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <span className="text-white/20">|</span>
              <span className="bg-[#c9a962] text-black text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/50 text-sm">
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

      {/* Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div 
                className="max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </article>

            {/* Sidebar with Lead Capture */}
            <aside className="lg:col-span-1">
              <BlogLeadCapture />
            </aside>
          </div>
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
  // Split content into lines for processing
  const lines = content.trim().split('\n');
  let html = '';
  let inList = false;
  let inTable = false;
  let tableRows: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Skip empty lines
    if (!line) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      continue;
    }

    // Headers
    if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h2 class="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-6 pb-3 border-b border-gray-100">${line.slice(3)}</h2>`;
      continue;
    }
    if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h3 class="text-xl font-semibold text-[#0a0a0a] mt-8 mb-4">${line.slice(4)}</h3>`;
      continue;
    }

    // Tables
    if (line.startsWith('|') && line.endsWith('|')) {
      if (line.includes('---')) continue; // Skip separator row
      
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(line);
      
      // Check if next line is not a table
      const nextLine = lines[i + 1]?.trim() || '';
      if (!nextLine.startsWith('|') || !nextLine.endsWith('|') || nextLine.includes('---')) {
        if (lines[i + 1]?.includes('---')) continue;
      }
      if (!lines[i + 1]?.trim().startsWith('|')) {
        // Render table
        html += '<div class="overflow-x-auto my-8"><table class="w-full border-collapse rounded-lg overflow-hidden">';
        tableRows.forEach((row, idx) => {
          const cells = row.split('|').filter(c => c.trim());
          const tag = idx === 0 ? 'th' : 'td';
          const bgClass = idx === 0 ? 'bg-[#0a0a0a] text-white' : idx % 2 === 0 ? 'bg-gray-50' : 'bg-white';
          html += `<tr class="${bgClass}">`;
          cells.forEach(cell => {
            html += `<${tag} class="px-4 py-3 text-left border-b border-gray-100">${cell.trim()}</${tag}>`;
          });
          html += '</tr>';
        });
        html += '</table></div>';
        inTable = false;
        tableRows = [];
      }
      continue;
    }

    // List items
    if (line.startsWith('- ')) {
      if (!inList) {
        html += '<ul class="space-y-3 my-6">';
        inList = true;
      }
      const listContent = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0a0a0a]">$1</strong>');
      html += `<li class="flex gap-3 text-gray-600"><span class="text-[#c9a962] mt-1.5">•</span><span>${listContent}</span></li>`;
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      if (!inList) {
        html += '<ol class="space-y-3 my-6 list-decimal list-inside">';
        inList = true;
      }
      const listContent = line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0a0a0a]">$1</strong>');
      html += `<li class="text-gray-600">${listContent}</li>`;
      continue;
    }

    // Close list if open
    if (inList) {
      html += '</ul>';
      inList = false;
    }

    // Regular paragraph with bold text support
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0a0a0a] font-semibold">$1</strong>');
    html += `<p class="text-gray-600 leading-relaxed mb-6">${line}</p>`;
  }

  // Close any open tags
  if (inList) html += '</ul>';

  return html;
}
