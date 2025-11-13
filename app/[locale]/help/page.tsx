import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function HelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('help');

  const faqs = [
    {
      question: locale === 'zh' ? '如何快速添加待办事项？' : 'How to quickly add a todo?',
      answer: locale === 'zh' 
        ? '点击"+"按钮或使用快捷键，输入内容如"明天下午3点开会 重要"，Step 会自动识别时间和优先级。支持自然语言输入，让添加任务变得简单快速。'
        : 'Click the "+" button or use keyboard shortcuts, type something like "Meeting at 3pm tomorrow important", and Step will automatically recognize time and priority. Natural language input makes adding tasks simple and fast.',
    },
    {
      question: locale === 'zh' ? '如何使用循环任务功能？' : 'How to use recurring tasks?',
      answer: locale === 'zh'
        ? '创建任务时，选择"循环"选项，可以设置每天、工作日或自定义频率。适合晨跑、学习、阅读等需要长期坚持的习惯。每次完成会记录连续打卡天数。'
        : 'When creating a task, select "Recurring" option to set daily, weekday, or custom frequency. Perfect for habits like morning runs, studying, or reading. Each completion records your streak.',
    },
    {
      question: locale === 'zh' ? '什么是番茄钟？如何使用？' : 'What is Pomodoro? How to use it?',
      answer: locale === 'zh'
        ? '番茄钟是一种时间管理方法：专注工作25分钟，休息5分钟。在任务详情中点击番茄钟图标开始计时，帮助你保持专注，提高效率。'
        : 'Pomodoro is a time management method: focus for 25 minutes, rest for 5 minutes. Click the Pomodoro icon in task details to start timing, helping you stay focused and improve efficiency.',
    },
    {
      question: locale === 'zh' ? '数据存储在哪里？安全吗？' : 'Where is my data stored? Is it safe?',
      answer: locale === 'zh'
        ? '所有数据存储在您的设备本地，不上传到云端。您完全掌控自己的数据，无需担心隐私泄露。未来会提供可选的 iCloud 同步功能。'
        : 'All data is stored locally on your device, not uploaded to the cloud. You have complete control over your data without privacy concerns. Optional iCloud sync will be available in the future.',
    },
    {
      question: locale === 'zh' ? 'Step 是免费的吗？' : 'Is Step free?',
      answer: locale === 'zh'
        ? 'Step 完全免费，无广告，无内购，无订阅。我们相信好的工具应该让更多人使用。未来可能会推出付费的高级功能，但核心功能永久免费。'
        : 'Step is completely free with no ads, in-app purchases, or subscriptions. We believe good tools should be accessible to everyone. Premium features may be introduced in the future, but core features will always be free.',
    },
    {
      question: locale === 'zh' ? '如何设置任务提醒？' : 'How to set task reminders?',
      answer: locale === 'zh'
        ? '在任务详情中点击"提醒"按钮，选择提醒时间。可以设置在截止时间前提醒，或为循环任务设置每日提醒。确保在系统设置中允许 Step 发送通知。'
        : 'In task details, click the "Reminder" button and select reminder time. You can set reminders before deadline or daily reminders for recurring tasks. Make sure Step has notification permission in system settings.',
    },
    {
      question: locale === 'zh' ? '如何查看统计数据？' : 'How to view statistics?',
      answer: locale === 'zh'
        ? '在底部导航栏点击"统计"图标，可以查看完成任务数、完成率趋势、分类时间分布、最长连续打卡等数据，帮助你了解自己的成长轨迹。'
        : 'Tap the "Statistics" icon in the bottom navigation bar to view completed tasks, completion rate trends, category time distribution, longest streaks, and more to track your growth journey.',
    },
    {
      question: locale === 'zh' ? '如何备份数据？' : 'How to backup data?',
      answer: locale === 'zh'
        ? '目前数据存储在本地，建议定期使用 iCloud 或 iTunes 备份您的设备。未来版本会提供导出功能，让您可以手动备份数据到文件。'
        : 'Currently data is stored locally. We recommend regular iCloud or iTunes device backups. Future versions will include export features for manual data backup to files.',
    },
    {
      question: locale === 'zh' ? '支持多设备同步吗？' : 'Does it support multi-device sync?',
      answer: locale === 'zh'
        ? 'iCloud 同步功能正在开发中，很快就会发布。届时您的数据可以在 iPhone、iPad 和 Mac 之间自动同步。'
        : 'iCloud sync is under development and will be released soon. Your data will automatically sync across iPhone, iPad, and Mac.',
    },
    {
      question: locale === 'zh' ? '遇到问题如何联系客服？' : 'How to contact support?',
      answer: locale === 'zh'
        ? '您可以通过邮箱 support@stepapp.com 联系我们，或在 App 内"设置"中使用"反馈"功能。我们会尽快回复您的问题。'
        : 'Contact us at support@stepapp.com or use the "Feedback" feature in "Settings" within the app. We will respond to your questions as soon as possible.',
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {locale === 'zh' ? '帮助中心' : 'Help Center'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '常见问题解答，帮助您更好地使用 Step' 
                : 'Frequently asked questions to help you better use Step'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-start">
                  <span className="inline-block w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-11">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'zh' ? '没有找到答案？' : "Didn't find an answer?"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {locale === 'zh' 
              ? '我们随时为您提供帮助' 
              : "We're here to help"}
          </p>
          <a
            href="mailto:support@stepapp.com"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-brand-blue hover:bg-blue-600 transition-colors"
          >
            {locale === 'zh' ? '联系我们' : 'Contact Us'}
          </a>
        </div>
      </section>
    </div>
  );
}

