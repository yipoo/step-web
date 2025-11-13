import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const detailedFeatures = [
    {
      icon: '⚡',
      title: t('features.quickAdd.title'),
      description: t('features.quickAdd.description'),
      benefits: [
        locale === 'zh' ? '自然语言识别时间和优先级' : 'Natural language time and priority recognition',
        locale === 'zh' ? '5秒快速添加任务' : '5-second quick task creation',
        locale === 'zh' ? '支持语音输入' : 'Voice input support',
        locale === 'zh' ? '灵感不流失' : 'Never lose an idea',
      ],
    },
    {
      icon: '🎯',
      title: t('features.habits.title'),
      description: t('features.habits.description'),
      benefits: [
        locale === 'zh' ? '多种循环模式（每天/工作日/自定义）' : 'Multiple repeat modes (daily/weekday/custom)',
        locale === 'zh' ? '连续打卡天数统计' : 'Streak counter',
        locale === 'zh' ? '完成率趋势图' : 'Completion rate trends',
        locale === 'zh' ? '习惯养成激励系统' : 'Habit-building motivation system',
      ],
    },
    {
      icon: '🍅',
      title: t('features.pomodoro.title'),
      description: t('features.pomodoro.description'),
      benefits: [
        locale === 'zh' ? '标准25分钟番茄钟' : 'Standard 25-minute Pomodoro',
        locale === 'zh' ? '任务预计番茄数' : 'Estimated tomatoes per task',
        locale === 'zh' ? '专注时长统计' : 'Focus time statistics',
        locale === 'zh' ? '每日/每周趋势分析' : 'Daily/weekly trend analysis',
      ],
    },
    {
      icon: '📊',
      title: t('features.statistics.title'),
      description: t('features.statistics.description'),
      benefits: [
        locale === 'zh' ? '完成任务数统计' : 'Task completion statistics',
        locale === 'zh' ? '分类时间分布' : 'Category time distribution',
        locale === 'zh' ? '完成率趋势图表' : 'Completion rate charts',
        locale === 'zh' ? '成长轨迹可视化' : 'Growth visualization',
      ],
    },
    {
      icon: '🏷️',
      title: locale === 'zh' ? '多维度分类系统' : 'Multi-dimensional Classification',
      description: locale === 'zh' 
        ? '通过分类、标签、时间等多个维度组织任务。工作、生活、学习，清晰分类。'
        : 'Organize tasks through categories, tags, and time dimensions. Work, life, study - clearly categorized.',
      benefits: [
        locale === 'zh' ? '预设和自定义分类' : 'Preset and custom categories',
        locale === 'zh' ? '多标签支持' : 'Multi-tag support',
        locale === 'zh' ? '智能筛选功能' : 'Smart filtering',
        locale === 'zh' ? '快速查找任务' : 'Quick task search',
      ],
    },
    {
      icon: '🔔',
      title: locale === 'zh' ? '智能提醒系统' : 'Smart Reminder System',
      description: locale === 'zh'
        ? '智能提醒系统，确保不遗漏重要事项。截止提醒、习惯提醒、逾期提醒。'
        : 'Smart reminder system ensures you never miss important tasks. Deadline, habit, and overdue reminders.',
      benefits: [
        locale === 'zh' ? '任务截止提醒' : 'Task deadline reminders',
        locale === 'zh' ? '循环任务提醒' : 'Recurring task reminders',
        locale === 'zh' ? '逾期温和提示' : 'Gentle overdue notifications',
        locale === 'zh' ? '自定义提醒规则' : 'Custom reminder rules',
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('features.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {detailedFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
                      <p className="text-gray-400 text-lg">{feature.icon}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-indigo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('cta.subtitle')}
          </p>
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-brand-blue bg-white hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}

