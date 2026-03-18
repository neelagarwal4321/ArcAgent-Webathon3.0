import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getPosts, getFeaturedPost } from '../../lib/blog';
import SectionHeader from '../../components/ui/SectionHeader';
import Badge from '../../components/ui/Badge';
import CTABanner from '../../components/shared/CTABanner';
import ScrollReveal from '../../components/shared/ScrollReveal';

function PostCard({ post }) {
  return (
    <article className="bg-[#F5F0E8] rounded-card border border-[rgba(10,15,44,0.06)] shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-[250ms] flex flex-col overflow-hidden">
      {/* Color strip based on category */}
      <div
        className="h-1.5 w-full shrink-0"
        style={{ background: post.category === 'Engineering' ? '#00E5FF' : post.category === 'Product' ? '#2539E7' : '#7C3AED' }}
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <Badge text={post.category} />
        </div>
        <h3 className="font-syne font-bold text-lg text-[#0A0F2C] leading-snug mb-3 flex-1">
          {post.title}
        </h3>
        <p className="font-figtree text-sm text-[#3D4260] leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(10,15,44,0.08)]">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white font-mono text-[10px] font-bold shrink-0"
              style={{ background: '#2539E7' }}
            >
              {post.author.initials}
            </div>
            <div>
              <p className="font-figtree text-xs font-medium text-[#0A0F2C]">{post.author.name}</p>
              <p className="font-figtree text-[11px] text-[#6B7094]">{post.date} · {post.readTime}</p>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="font-figtree text-xs font-medium text-[#2539E7] hover:underline underline-offset-2"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogIndex({ posts, featuredPost }) {
  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  // Exclude featured from grid to avoid duplication
  const gridPosts = filteredPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      <Head>
        <title>Blog — ArcAgent</title>
        <meta name="description" content="Insights on AI, revenue operations, and the future of autonomous enterprise from the ArcAgent team." />
      </Head>

      {/* ── Hero ── */}
      <section className="page-section bg-[#0A0F2C]">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Blog"
              heading="Insights on AI, Revenue, and the Future of Work"
              subtext="Perspectives from the ArcAgent team on agentic AI, revenue operations, and how enterprise companies are scaling without adding headcount."
              centered
              dark
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="page-section bg-[#0E1435]">
        <div className="page-container">
          <ScrollReveal>
            <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-primary mb-6">Featured</p>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="bg-[#F5F0E8] rounded-card overflow-hidden grid md:grid-cols-2 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-[250ms]">
                {/* Image placeholder */}
                <div
                  className="h-64 md:h-auto flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #2539E7 0%, #1428CC 50%, #0A0F2C 100%)' }}
                >
                  <div className="text-center px-8">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">✦</span>
                    </div>
                    <span className="font-mono text-xs font-medium tracking-widest uppercase text-white/60">Featured Article</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge text={featuredPost.category} />
                  </div>
                  <h2 className="font-syne font-bold text-2xl md:text-3xl text-[#0A0F2C] leading-tight mb-4 group-hover:text-[#2539E7] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-figtree text-base text-[#3D4260] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shrink-0"
                      style={{ background: '#2539E7' }}
                    >
                      {featuredPost.author.initials}
                    </div>
                    <div>
                      <p className="font-figtree text-sm font-semibold text-[#0A0F2C]">{featuredPost.author.name}</p>
                      <p className="font-figtree text-xs text-[#6B7094]">{featuredPost.date} · {featuredPost.readTime}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-figtree text-sm font-medium text-[#2539E7]">
                    Read Article →
                  </span>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="page-section bg-[#0A0F2C]">
        <div className="page-container">
          {/* Category filter */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-figtree text-sm font-medium px-4 py-2 rounded-pill border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#2539E7] border-[#2539E7] text-white'
                      : 'border-white/20 text-[#C8CCE0] hover:border-white/40 hover:text-white bg-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {gridPosts.length === 0 ? (
            <ScrollReveal>
              <p className="font-figtree text-[#8088A8] text-center py-16">No posts in this category yet.</p>
            </ScrollReveal>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.07}>
                  <PostCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner headline="Want to see ArcAgent in action?" buttonText="Schedule a Demo →" />
    </>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  const featuredPost = getFeaturedPost();
  return {
    props: { posts, featuredPost },
  };
}
