import { MetadataRoute } from 'next';
import { locales } from '@/i18n/request';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stepapp.com';

  // 主要页面
  const routes = ['', '/features', '/blog', '/help', '/privacy', '/terms'].flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/privacy' || route === '/terms' ? 'monthly' as const : 'weekly' as const,
      priority: route === '' ? 1 : route === '/features' ? 0.9 : 0.7,
    }))
  );

  // 博客文章
  const blogPosts = locales.flatMap((locale) => {
    const posts = getAllPosts(locale);
    return posts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  });

  return [...routes, ...blogPosts];
}

