import { Metadata } from 'next';

interface GenerateMetadataProps {
  locale: string;
}

export function generateMetadata({ locale }: GenerateMetadataProps): Metadata {
  const isZh = locale === 'zh';

  return {
    title: isZh ? 'Step - 跬步 | 智能待办清单' : 'Step - Smart Todo List',
    description: isZh
      ? 'Step（跬步）是一款帮助你掌控节奏、养成习惯、实现目标的智能待办清单应用。支持快速添加、循环打卡、番茄钟专注、数据统计。极简设计，本地存储，完全免费。'
      : 'Step is an intelligent todo list app that helps you take control of your rhythm, build habits, and achieve your goals. Features quick add, habit tracking, Pomodoro focus, and data visualization. Minimalist design, local storage, completely free.',
    keywords: isZh
      ? ['待办清单', '任务管理', '习惯养成', '打卡', '番茄钟', '时间管理', 'GTD', '效率工具', '自律', '目标管理']
      : ['todo list', 'task management', 'habit tracking', 'productivity', 'pomodoro', 'time management', 'GTD', 'goal setting'],
    authors: [{ name: 'Step Team' }],
    creator: 'Step',
    publisher: 'Step',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://stepapp.com'),
    alternates: {
      canonical: '/',
      languages: {
        'zh-CN': '/zh',
        'en-US': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: isZh ? 'zh_CN' : 'en_US',
      url: '/',
      siteName: 'Step',
      title: isZh ? 'Step - 跬步 | 智能待办清单' : 'Step - Smart Todo List',
      description: isZh
        ? '不积跬步，无以至千里。让每一步都算数。'
        : 'Every step counts. Make your journey meaningful.',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Step App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh ? 'Step - 跬步 | 智能待办清单' : 'Step - Smart Todo List',
      description: isZh
        ? '不积跬步，无以至千里。让每一步都算数。'
        : 'Every step counts. Make your journey meaningful.',
      images: ['/twitter-image.png'],
      creator: '@stepapp',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
      google: 'your-google-verification-code',
      // 添加其他搜索引擎验证码
    },
  };
}

