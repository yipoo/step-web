import { getPostBySlug, getAllPostSlugs, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export async function generateStaticParams({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const slugs = getAllPostSlugs(locale);
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');

  const post = await getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  // 获取所有文章用于显示热门文章
  const allPosts = getAllPosts(locale);
  const recentPosts = allPosts.filter(p => p.slug !== slug).slice(0, 5);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-brand-blue hover:text-blue-600 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t('backToBlog')}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Header */}
              <header className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-base">
                  <time>
                    {new Date(post.date).toLocaleDateString(
                      locale === 'zh' ? 'zh-CN' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </time>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-brand-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Content */}
              <div className="blog-content">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {locale === 'zh' ? '热门文章' : 'Popular Posts'}
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((recentPost) => (
                        <Link
                          key={recentPost.slug}
                          href={`/${locale}/blog/${recentPost.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                            {recentPost.title}
                          </h4>
                          <time className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                            {new Date(recentPost.date).toLocaleDateString(
                              locale === 'zh' ? 'zh-CN' : 'en-US',
                              {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              }
                            )}
                          </time>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {locale === 'zh' ? '文章标签' : 'Tags'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="bg-gradient-to-br from-brand-blue to-brand-indigo rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">
                    {locale === 'zh' ? '喜欢这篇文章？' : 'Like this article?'}
                  </h3>
                  <p className="text-blue-100 text-sm mb-4">
                    {locale === 'zh' ? '分享给你的朋友们' : 'Share with your friends'}
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                      {locale === 'zh' ? '分享' : 'Share'}
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

