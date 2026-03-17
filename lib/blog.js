import posts from '../data/blog.json';

export function getPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getPostSlugs() {
  return posts.map((p) => p.slug);
}

export function getFeaturedPost() {
  return posts.find((p) => p.featured) || posts[0];
}

export function getRelatedPosts(slug, count = 3) {
  return posts.filter((p) => p.slug !== slug).slice(0, count);
}
