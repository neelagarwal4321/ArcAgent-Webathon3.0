import Head from 'next/head';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs, getRelatedPosts } from '../../lib/blog';
import Badge from '../../components/ui/Badge';
import Card from '../../components/ui/Card';
import CTABanner from '../../components/shared/CTABanner';
import ScrollReveal from '../../components/shared/ScrollReveal';

export default function BlogPost({ post, relatedPosts }) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{`${post.title} — ArcAgent Blog`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      {/* ── Post Header ── */}
      <section className="page-section bg-[#0A0F2C]">
        <div className="page-container">
          <div className="max-w-prose mx-auto">
            <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-figtree text-sm text-[#8088A8] hover:text-white transition-colors mb-8"
            >
              ← All Posts
            </Link>

            <div className="mb-5">
              <Badge text={post.category} />
            </div>

            <h1 className="font-syne font-bold text-3xl md:text-[42px] leading-[1.1] -tracking-[0.02em] text-white mb-6">
              {post.title}
            </h1>

            <p className="font-figtree text-lg text-[#C8CCE0] leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-white/10">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shrink-0"
                style={{ background: '#2539E7' }}
              >
                {post.author.initials}
              </div>
              <div>
                <p className="font-figtree text-sm font-semibold text-white">{post.author.name}</p>
                {post.author.role && (
                  <p className="font-figtree text-xs text-[#8088A8]">{post.author.role}</p>
                )}
              </div>
              <div className="ml-auto text-right">
                <p className="font-figtree text-xs text-[#8088A8]">{post.date}</p>
                <p className="font-figtree text-xs text-[#8088A8]">{post.readTime}</p>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Post Body ── */}
      <section className="page-section bg-[#0E1435]">
        <div className="page-container">
          <div className="max-w-prose mx-auto">
            <ScrollReveal>
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </ScrollReveal>
          </div>

          {/* ── Author Bio Card ── */}
          <div className="max-w-prose mx-auto mt-14">
            <ScrollReveal>
              <Card hover={false} className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-mono text-sm font-bold shrink-0"
                    style={{ background: '#2539E7' }}
                  >
                    {post.author.initials}
                  </div>
                  <div>
                    <p className="font-figtree text-xs font-medium tracking-widest uppercase text-[#6B7094] mb-1">Written by</p>
                    <p className="font-syne font-bold text-lg text-[#0A0F2C] mb-0.5">{post.author.name}</p>
                    {post.author.role && (
                      <p className="font-figtree text-sm text-[#3D4260] mb-3">{post.author.role}</p>
                    )}
                    <p className="font-figtree text-sm text-[#6B7094] leading-relaxed">
                      Part of the ArcAgent leadership team, focused on building the future of autonomous revenue operations for enterprise companies.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="page-section bg-[#0A0F2C]">
          <div className="page-container">
            <ScrollReveal>
              <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-primary mb-2">Keep Reading</p>
              <h2 className="font-syne font-bold text-2xl text-white mb-8">Related Articles</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related, i) => (
                <ScrollReveal key={related.slug} delay={i * 0.08}>
                  <Link href={`/blog/${related.slug}`} className="group block h-full">
                    <article className="bg-[#F5F0E8] rounded-card border border-[rgba(10,15,44,0.06)] shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-[250ms] flex flex-col h-full overflow-hidden">
                      <div
                        className="h-1.5 w-full shrink-0"
                        style={{ background: related.category === 'Engineering' ? '#00E5FF' : related.category === 'Product' ? '#2539E7' : '#7C3AED' }}
                      />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="mb-3">
                          <Badge text={related.category} />
                        </div>
                        <h3 className="font-syne font-bold text-base text-[#0A0F2C] leading-snug mb-3 group-hover:text-[#2539E7] transition-colors flex-1">
                          {related.title}
                        </h3>
                        <p className="font-figtree text-sm text-[#3D4260] leading-relaxed mb-4 line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-auto">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white font-mono text-[9px] font-bold shrink-0"
                            style={{ background: '#2539E7' }}
                          >
                            {related.author.initials}
                          </div>
                          <span className="font-figtree text-xs text-[#6B7094]">{related.author.name} · {related.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner headline="Ready to see ArcAgent transform your revenue operations?" buttonText="Schedule a Demo →" />

      {/* Prose styles scoped via a global style block */}
      <style jsx global>{`
        .blog-prose h2 {
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1.25;
          color: #ffffff;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .blog-prose h3 {
          font-family: var(--font-syne), sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
          color: #ffffff;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .blog-prose p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #C8CCE0;
          margin-bottom: 1.4rem;
        }
        .blog-prose ul,
        .blog-prose ol {
          padding-left: 1.5rem;
          margin-bottom: 1.4rem;
          color: #C8CCE0;
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.0625rem;
          line-height: 1.75;
        }
        .blog-prose li {
          margin-bottom: 0.4rem;
        }
        .blog-prose strong {
          color: #ffffff;
          font-weight: 600;
        }
        .blog-prose em {
          color: #C8CCE0;
        }
        .blog-prose a {
          color: #2539E7;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-prose a:hover {
          color: #3348F5;
        }
        .blog-prose blockquote {
          border-left: 3px solid #2539E7;
          padding-left: 1.25rem;
          margin-left: 0;
          color: #8088A8;
          font-style: italic;
        }
        .blog-prose code {
          font-family: monospace;
          font-size: 0.875rem;
          background: rgba(37, 57, 231, 0.12);
          color: #00E5FF;
          padding: 0.15em 0.4em;
          border-radius: 4px;
        }
        .blog-prose hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin: 2rem 0;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  const relatedPosts = getRelatedPosts(params.slug, 3);
  return {
    props: { post, relatedPosts },
  };
}
