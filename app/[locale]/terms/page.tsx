import { setRequestLocale } from 'next-intl/server';

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === 'zh' ? {
    title: '服务条款',
    lastUpdated: '最后更新：2025年11月13日',
    intro: '欢迎使用 Step（跬步）。使用我们的服务前，请仔细阅读以下条款。',
    sections: [
      {
        title: '1. 接受条款',
        content: [
          '通过下载、安装或使用 Step 应用程序，您表示同意遵守本服务条款。',
          '',
          '如果您不同意这些条款，请不要使用 Step。',
        ],
      },
      {
        title: '2. 服务说明',
        content: [
          'Step 是一款个人效率管理应用，提供以下功能：',
          '• 待办事项管理',
          '• 循环任务和习惯养成',
          '• 番茄钟计时',
          '• 数据统计和分析',
          '• 任务提醒',
          '',
          '我们保留随时修改、暂停或终止服务的权利，恕不另行通知。',
        ],
      },
      {
        title: '3. 用户责任',
        content: [
          '您同意：',
          '• 仅将 Step 用于合法目的',
          '• 不尝试破解、反编译或修改应用',
          '• 不利用应用进行任何违法活动',
          '• 对您账户的所有活动负责',
          '• 保护好您的设备和数据安全',
        ],
      },
      {
        title: '4. 知识产权',
        content: [
          'Step 的所有内容，包括但不限于：',
          '• 应用程序代码',
          '• 界面设计',
          '• Logo 和商标',
          '• 文档和帮助内容',
          '',
          '均为 Step 团队所有，受知识产权法保护。',
          '',
          '您不得：',
          '• 复制、修改或分发应用',
          '• 使用 Step 的商标或 Logo',
          '• 创建衍生作品',
        ],
      },
      {
        title: '5. 用户内容',
        content: [
          '您创建的所有内容（待办事项、笔记等）归您所有。',
          '',
          '我们不会：',
          '• 访问您的内容',
          '• 使用您的内容',
          '• 与第三方共享您的内容',
          '',
          '您有责任备份自己的数据。我们不对数据丢失负责。',
        ],
      },
      {
        title: '6. 免责声明',
        content: [
          'Step 按"现状"提供，不提供任何明示或暗示的保证。',
          '',
          '我们不保证：',
          '• 服务不会中断',
          '• 完全无错误',
          '• 满足您的所有需求',
          '• 数据不会丢失',
          '',
          '您使用 Step 的风险由您自行承担。',
        ],
      },
      {
        title: '7. 责任限制',
        content: [
          '在法律允许的最大范围内，Step 团队不对以下情况承担责任：',
          '• 直接或间接损失',
          '• 利润损失',
          '• 数据丢失',
          '• 业务中断',
          '• 其他任何损害',
          '',
          '即使我们已被告知可能发生此类损害。',
        ],
      },
      {
        title: '8. 隐私保护',
        content: [
          '我们非常重视您的隐私。详细信息请参阅我们的隐私政策。',
          '',
          '要点：',
          '• 数据存储在本地',
          '• 不收集个人信息',
          '• 不与第三方共享',
        ],
      },
      {
        title: '9. 更新和修改',
        content: [
          '我们可能会：',
          '• 定期更新应用',
          '• 添加新功能',
          '• 修复错误',
          '• 改进性能',
          '',
          '部分更新可能需要您接受新的条款。',
          '',
          '我们保留随时修改这些条款的权利。重大更改会通过应用内通知告知。',
        ],
      },
      {
        title: '10. 账户终止',
        content: [
          '您可以随时停止使用 Step 并卸载应用。',
          '',
          '我们保留在以下情况下终止或限制您访问的权利：',
          '• 违反本服务条款',
          '• 滥用服务',
          '• 从事非法活动',
          '',
          '终止后，您对应用的使用权限立即失效。',
        ],
      },
      {
        title: '11. 第三方服务',
        content: [
          'Step 可能包含第三方服务的链接（如 App Store）。',
          '',
          '我们不对第三方服务负责，这些服务受其自己的条款约束。',
        ],
      },
      {
        title: '12. 适用法律',
        content: [
          '本条款受中华人民共和国法律管辖。',
          '',
          '任何争议应首先通过友好协商解决。协商不成的，可提交至 Step 所在地有管辖权的法院解决。',
        ],
      },
      {
        title: '13. 可分割性',
        content: [
          '如果本条款的任何部分被认定为无效或不可执行，该部分将被修改以实现其目的，其余部分继续有效。',
        ],
      },
      {
        title: '14. 联系我们',
        content: [
          '如果您对本服务条款有任何疑问，请联系我们：',
          '',
          '邮箱：legal@stepapp.com',
          '官网：https://stepapp.com',
          '',
          '我们会尽快回复您的询问。',
        ],
      },
    ],
  } : {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: November 13, 2025',
    intro: 'Welcome to Step. Please read these terms carefully before using our service.',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: [
          'By downloading, installing, or using the Step application, you agree to be bound by these Terms of Service.',
          '',
          'If you do not agree to these terms, please do not use Step.',
        ],
      },
      {
        title: '2. Service Description',
        content: [
          'Step is a personal productivity management application providing:',
          '• Todo item management',
          '• Recurring tasks and habit formation',
          '• Pomodoro timer',
          '• Data statistics and analysis',
          '• Task reminders',
          '',
          'We reserve the right to modify, suspend, or terminate the service at any time without notice.',
        ],
      },
      {
        title: '3. User Responsibilities',
        content: [
          'You agree to:',
          '• Use Step only for lawful purposes',
          '• Not attempt to crack, decompile, or modify the app',
          '• Not use the app for any illegal activities',
          '• Be responsible for all activities in your account',
          '• Protect your device and data security',
        ],
      },
      {
        title: '4. Intellectual Property',
        content: [
          'All Step content, including but not limited to:',
          '• Application code',
          '• Interface design',
          '• Logos and trademarks',
          '• Documentation and help content',
          '',
          'Is owned by the Step team and protected by intellectual property laws.',
          '',
          'You may not:',
          '• Copy, modify, or distribute the app',
          '• Use Step\'s trademarks or logos',
          '• Create derivative works',
        ],
      },
      {
        title: '5. User Content',
        content: [
          'All content you create (todos, notes, etc.) belongs to you.',
          '',
          'We will not:',
          '• Access your content',
          '• Use your content',
          '• Share your content with third parties',
          '',
          'You are responsible for backing up your data. We are not responsible for data loss.',
        ],
      },
      {
        title: '6. Disclaimer',
        content: [
          'Step is provided "as is" without any express or implied warranties.',
          '',
          'We do not guarantee that:',
          '• Service will be uninterrupted',
          '• Completely error-free',
          '• Meet all your requirements',
          '• Data will not be lost',
          '',
          'You use Step at your own risk.',
        ],
      },
      {
        title: '7. Limitation of Liability',
        content: [
          'To the maximum extent permitted by law, the Step team is not liable for:',
          '• Direct or indirect losses',
          '• Loss of profits',
          '• Data loss',
          '• Business interruption',
          '• Any other damages',
          '',
          'Even if we have been advised of the possibility of such damages.',
        ],
      },
      {
        title: '8. Privacy Protection',
        content: [
          'We take your privacy very seriously. For details, please refer to our Privacy Policy.',
          '',
          'Key points:',
          '• Data stored locally',
          '• No collection of personal information',
          '• Not shared with third parties',
        ],
      },
      {
        title: '9. Updates and Modifications',
        content: [
          'We may:',
          '• Regularly update the app',
          '• Add new features',
          '• Fix bugs',
          '• Improve performance',
          '',
          'Some updates may require you to accept new terms.',
          '',
          'We reserve the right to modify these terms at any time. Major changes will be notified through in-app notifications.',
        ],
      },
      {
        title: '10. Account Termination',
        content: [
          'You may stop using Step and uninstall the app at any time.',
          '',
          'We reserve the right to terminate or limit your access if:',
          '• You violate these Terms of Service',
          '• You abuse the service',
          '• You engage in illegal activities',
          '',
          'Upon termination, your right to use the app immediately ceases.',
        ],
      },
      {
        title: '11. Third-Party Services',
        content: [
          'Step may contain links to third-party services (such as App Store).',
          '',
          'We are not responsible for third-party services, which are governed by their own terms.',
        ],
      },
      {
        title: '12. Governing Law',
        content: [
          'These terms are governed by the laws of the People\'s Republic of China.',
          '',
          'Any disputes should first be resolved through friendly negotiation. If negotiation fails, they may be submitted to a court with jurisdiction where Step is located.',
        ],
      },
      {
        title: '13. Severability',
        content: [
          'If any part of these terms is deemed invalid or unenforceable, that part will be modified to achieve its purpose, and the remaining parts will remain in effect.',
        ],
      },
      {
        title: '14. Contact Us',
        content: [
          'If you have any questions about these Terms of Service, please contact us:',
          '',
          'Email: legal@stepapp.com',
          'Website: https://stepapp.com',
          '',
          'We will respond to your inquiry as soon as possible.',
        ],
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {content.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {content.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.intro}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={`text-gray-600 dark:text-gray-400 ${
                        paragraph.startsWith('•') ? 'ml-4' : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {locale === 'zh' 
                ? '感谢您使用 Step，祝您工作生活更高效！' 
                : 'Thank you for using Step. We wish you greater productivity!'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © 2025 Step. {locale === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

