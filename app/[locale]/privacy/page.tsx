import { setRequestLocale } from 'next-intl/server';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === 'zh' ? {
    title: '隐私政策',
    lastUpdated: '最后更新：2025年11月13日',
    intro: 'Step（跬步）非常重视用户的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的信息。',
    sections: [
      {
        title: '1. 信息收集',
        content: [
          '**我们不收集任何个人信息。**',
          'Step 采用完全本地化的数据存储方案，所有数据都存储在您的设备上，包括：',
          '• 待办事项内容',
          '• 任务完成记录',
          '• 循环任务打卡数据',
          '• 统计和分析数据',
          '• 应用设置偏好',
          '',
          '我们不会：',
          '• 收集您的姓名、邮箱或电话号码',
          '• 追踪您的位置信息',
          '• 访问您的联系人或照片',
          '• 读取您的剪贴板内容',
          '• 收集设备标识符用于追踪',
        ],
      },
      {
        title: '2. 数据存储',
        content: [
          '所有数据存储在您的设备本地存储空间中，使用 iOS 系统提供的安全存储机制。',
          '',
          '数据存储特点：',
          '• 完全离线存储',
          '• 不上传到任何服务器',
          '• 不与第三方共享',
          '• 您拥有完全控制权',
          '• 卸载应用会删除所有数据',
        ],
      },
      {
        title: '3. 权限使用',
        content: [
          'Step 可能请求以下系统权限：',
          '',
          '**通知权限**',
          '用于发送任务提醒和习惯打卡提醒。您可以在系统设置中随时关闭。',
          '',
          '**语音识别（可选）**',
          '用于语音输入添加任务。语音识别在设备本地完成，不会上传到服务器。',
          '',
          '我们不会请求：',
          '• 相机和照片库访问',
          '• 通讯录访问',
          '• 位置信息',
          '• 麦克风（除非您主动使用语音输入）',
        ],
      },
      {
        title: '4. 数据安全',
        content: [
          '我们采取以下措施保护您的数据：',
          '• 使用 iOS 系统的安全沙盒机制',
          '• 数据加密存储',
          '• 不通过网络传输数据',
          '• 定期安全审查',
          '',
          '建议您：',
          '• 定期备份设备数据',
          '• 使用设备密码或 Face ID 保护',
          '• 及时更新 Step 到最新版本',
        ],
      },
      {
        title: '5. iCloud 同步（未来功能）',
        content: [
          '当我们推出 iCloud 同步功能时：',
          '• 这是完全可选的功能',
          '• 数据将加密后存储在您的 iCloud 账户中',
          '• 我们无法访问您的 iCloud 数据',
          '• 您可以随时关闭同步功能',
          '• 关闭同步不会删除本地数据',
        ],
      },
      {
        title: '6. 分析数据',
        content: [
          'Step 不使用任何第三方分析服务。',
          '',
          '我们可能收集的唯一非个人信息是：',
          '• 崩溃报告（不包含任何用户数据）',
          '• 基本设备型号（用于优化兼容性）',
          '',
          '这些信息完全匿名，无法识别个人身份。',
        ],
      },
      {
        title: '7. 儿童隐私',
        content: [
          'Step 适合所有年龄段用户使用。我们不会故意收集13岁以下儿童的信息。',
          '',
          '由于我们不收集任何个人信息，因此不存在儿童隐私问题。',
        ],
      },
      {
        title: '8. 政策更新',
        content: [
          '我们可能会不时更新本隐私政策。更新后的政策将在应用内和官网发布。',
          '',
          '重大变更会通过应用内通知告知用户。继续使用 Step 即表示您接受更新后的政策。',
        ],
      },
      {
        title: '9. 您的权利',
        content: [
          '由于数据完全存储在本地，您拥有完全的数据控制权：',
          '• 随时查看所有数据',
          '• 随时删除任何数据',
          '• 随时导出数据（未来功能）',
          '• 卸载应用即可删除所有数据',
        ],
      },
      {
        title: '10. 联系我们',
        content: [
          '如果您对本隐私政策有任何疑问，请联系我们：',
          '',
          '邮箱：privacy@stepapp.com',
          '官网：https://stepapp.com',
          '',
          '我们会在7个工作日内回复您的询问。',
        ],
      },
    ],
  } : {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: November 13, 2025',
    intro: 'Step takes your privacy very seriously. This Privacy Policy explains how we collect, use, store, and protect your information.',
    sections: [
      {
        title: '1. Information Collection',
        content: [
          '**We do not collect any personal information.**',
          'Step uses a fully local data storage solution. All data is stored on your device, including:',
          '• Todo item content',
          '• Task completion records',
          '• Recurring task check-in data',
          '• Statistics and analytics data',
          '• App preference settings',
          '',
          'We do not:',
          '• Collect your name, email, or phone number',
          '• Track your location',
          '• Access your contacts or photos',
          '• Read your clipboard content',
          '• Collect device identifiers for tracking',
        ],
      },
      {
        title: '2. Data Storage',
        content: [
          'All data is stored in your device\'s local storage using iOS system-provided secure storage mechanisms.',
          '',
          'Data storage features:',
          '• Completely offline storage',
          '• Not uploaded to any servers',
          '• Not shared with third parties',
          '• You have complete control',
          '• Uninstalling the app deletes all data',
        ],
      },
      {
        title: '3. Permission Usage',
        content: [
          'Step may request the following system permissions:',
          '',
          '**Notification Permission**',
          'Used to send task reminders and habit check-in reminders. You can turn it off anytime in system settings.',
          '',
          '**Speech Recognition (Optional)**',
          'Used for voice input when adding tasks. Speech recognition is done locally on device, not uploaded to servers.',
          '',
          'We will not request:',
          '• Camera and photo library access',
          '• Contacts access',
          '• Location information',
          '• Microphone (unless you actively use voice input)',
        ],
      },
      {
        title: '4. Data Security',
        content: [
          'We take the following measures to protect your data:',
          '• Use iOS system security sandbox mechanism',
          '• Encrypted data storage',
          '• No network data transmission',
          '• Regular security reviews',
          '',
          'We recommend you:',
          '• Regularly backup device data',
          '• Use device passcode or Face ID protection',
          '• Update Step to the latest version promptly',
        ],
      },
      {
        title: '5. iCloud Sync (Future Feature)',
        content: [
          'When we introduce iCloud sync:',
          '• It will be completely optional',
          '• Data will be encrypted and stored in your iCloud account',
          '• We cannot access your iCloud data',
          '• You can turn off sync anytime',
          '• Turning off sync will not delete local data',
        ],
      },
      {
        title: '6. Analytics Data',
        content: [
          'Step does not use any third-party analytics services.',
          '',
          'The only non-personal information we may collect:',
          '• Crash reports (containing no user data)',
          '• Basic device model (for compatibility optimization)',
          '',
          'This information is completely anonymous and cannot identify individuals.',
        ],
      },
      {
        title: '7. Children\'s Privacy',
        content: [
          'Step is suitable for users of all ages. We do not knowingly collect information from children under 13.',
          '',
          'Since we do not collect any personal information, there are no children\'s privacy concerns.',
        ],
      },
      {
        title: '8. Policy Updates',
        content: [
          'We may update this Privacy Policy from time to time. Updated policies will be published in-app and on our website.',
          '',
          'Major changes will be notified through in-app notifications. Continued use of Step indicates acceptance of the updated policy.',
        ],
      },
      {
        title: '9. Your Rights',
        content: [
          'Since data is stored completely locally, you have complete control:',
          '• View all data anytime',
          '• Delete any data anytime',
          '• Export data anytime (future feature)',
          '• Uninstall app to delete all data',
        ],
      },
      {
        title: '10. Contact Us',
        content: [
          'If you have any questions about this Privacy Policy, please contact us:',
          '',
          'Email: privacy@stepapp.com',
          'Website: https://stepapp.com',
          '',
          'We will respond to your inquiry within 7 business days.',
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
                      } ${
                        paragraph.startsWith('**') ? 'font-semibold text-gray-900 dark:text-white' : ''
                      }`}
                    >
                      {paragraph.replace(/\*\*/g, '')}
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
                ? '感谢您信任 Step，我们将持续保护您的隐私。' 
                : 'Thank you for trusting Step. We will continue to protect your privacy.'}
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

