'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n/request';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    
    // 如果当前路径包含语言代码，替换它
    if (locales.includes(segments[1] as any)) {
      segments[1] = newLocale;
    } else {
      // 否则在开头添加新的语言代码
      segments.splice(1, 0, newLocale);
    }
    
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => switchLocale('zh')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          locale === 'zh'
            ? 'bg-white dark:bg-gray-700 text-brand-blue shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          locale === 'en'
            ? 'bg-white dark:bg-gray-700 text-brand-blue shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}

