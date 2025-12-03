import { setRequestLocale } from 'next-intl/server';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === 'zh' ? {
    title: '隐私政策',
    lastUpdated: '最后更新：2025年12月2日',
    intro: 'Step（跬步）非常重视用户的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的信息。',
    sections: [
      {
        title: '1. 账户注册与数据存储',
        content: [
          '**账户注册要求：**',
          '使用 Step 需要注册账户。我们使用手机号码和短信验证码进行账户注册和登录验证。',
          '',
          '**数据存储方式：**',
          'Step 采用混合存储模式，确保您的数据安全和隐私：',
          '',
          '**存储在服务器的信息（账户信息）：**',
          '• 手机号码（用于账户验证和登录）',
          '• 昵称（可选，用于个性化显示）',
          '• 账户设置和偏好',
          '',
          '**默认存储在本地设备的信息（核心功能数据）：**',
          '以下所有数据默认存储在您的设备本地，不会自动上传到服务器：',
          '• 待办事项内容和详情',
          '• 任务完成记录',
          '• 循环任务打卡数据',
          '• 番茄钟使用记录',
          '• 统计和分析数据',
          '• 应用设置偏好',
          '',
          '**可选云端同步功能：**',
          '您可以自主选择开启云端同步功能。开启后，您的本地数据将：',
          '• 加密后同步到云端服务器',
          '• 用于多设备间数据同步',
          '• 提供数据备份保护',
          '• 您可以随时关闭同步功能，关闭后数据将仅存储在本地',
          '',
          '**重要说明：**',
          '• 注册账户仅用于身份验证，不会影响您的数据存储方式',
          '• 所有核心功能数据默认存储在本地，您拥有完全控制权',
          '• 云端同步是完全可选的，您可以随时开启或关闭',
          '• 即使开启云端同步，您的本地数据仍然是主要数据源',
        ],
      },
      {
        title: '2. 信息收集',
        content: [
          '**我们收集的信息：**',
          '为了提供账户服务，我们需要收集以下信息：',
          '',
          '**账户信息（存储在服务器）：**',
          '• 手机号码（必需，用于账户验证和登录）',
          '• 昵称（可选，用于个性化显示）',
          '',
          '**功能数据（默认存储在本地，可选同步到云端）：**',
          '以下数据默认存储在您的设备上，仅在您开启云端同步时才会同步到服务器：',
          '• 待办事项内容',
          '• 任务完成记录',
          '• 循环任务打卡数据',
          '• 番茄钟使用记录',
          '• 统计和分析数据',
          '• 应用设置偏好',
          '',
          '**我们不收集的信息：**',
          '我们不会：',
          '• 收集您的姓名或邮箱地址',
          '• 追踪您的位置信息',
          '• 访问您的联系人或照片',
          '• 读取您的剪贴板内容',
          '• 收集设备标识符用于追踪',
          '• 将您的数据用于广告或营销目的',
          '• 在您未开启云端同步时访问您的功能数据',
        ],
      },
      {
        title: '3. 数据存储',
        content: [
          '**账户信息存储（服务器）：**',
          '您的账户信息（手机号码、昵称等）存储在安全的服务器上，用于：',
          '• 账户验证和登录',
          '• 账户管理和安全保护',
          '• 提供账户相关服务',
          '',
          '**功能数据存储（本地设备，默认）：**',
          '所有核心功能数据默认存储在您的设备本地存储空间中，使用 iOS 系统提供的安全存储机制：',
          '',
          '本地存储特点：',
          '• 完全离线存储（默认）',
          '• 不上传到任何服务器（除非您开启云端同步）',
          '• 不与第三方共享',
          '• 您拥有完全控制权',
          '• 卸载应用会删除所有本地数据',
          '',
          '**可选云端同步：**',
          '如果您选择开启云端同步功能，您的数据将：',
          '• 继续在本地设备上存储（主要数据源）',
          '• 加密后同步到云端服务器（用于备份和多设备同步）',
          '• 您可以随时关闭同步功能，关闭后数据将仅存储在本地',
          '• 关闭同步不会删除本地数据',
          '',
          '**数据访问权限：**',
          '• 我们无法访问您存储在本地设备上的功能数据（除非您开启云端同步）',
          '• 即使开启云端同步，您的本地数据仍然是主要数据源',
          '• 您可以随时导出或删除您的数据',
        ],
      },
      {
        title: '4. 权限使用',
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
        title: '5. 数据安全',
        content: [
          '我们采取以下措施保护您的数据：',
          '',
          '**账户信息安全：**',
          '• 使用加密传输（HTTPS）保护账户信息',
          '• 服务器端数据加密存储',
          '• 定期安全审查和更新',
          '',
          '**本地数据安全：**',
          '• 使用 iOS 系统的安全沙盒机制',
          '• 数据加密存储',
          '• 默认不通过网络传输数据',
          '',
          '**云端同步安全（如开启）：**',
          '• 端到端加密传输',
          '• 服务器端加密存储',
          '• 定期安全审查',
          '',
          '建议您：',
          '• 定期备份设备数据',
          '• 使用设备密码或 Face ID 保护',
          '• 及时更新 Step 到最新版本',
          '• 妥善保管账户登录信息',
        ],
      },
      {
        title: '6. iCloud 同步（未来功能）',
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
        title: '7. 分析数据',
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
        title: '8. 儿童隐私',
        content: [
          'Step 适合所有年龄段用户使用。我们不会故意收集13岁以下儿童的信息。',
          '',
          '如果您是13岁以下的儿童，请在家长或监护人的同意和指导下使用本应用。',
          '',
          '我们仅收集必要的账户信息（手机号码）用于账户验证，所有核心功能数据默认存储在本地设备上。',
        ],
      },
      {
        title: '9. 政策更新',
        content: [
          '我们可能会不时更新本隐私政策。更新后的政策将在应用内和官网发布。',
          '',
          '重大变更会通过应用内通知告知用户。继续使用 Step 即表示您接受更新后的政策。',
        ],
      },
      {
        title: '10. 您的权利',
        content: [
          '您对您的数据拥有完全的控制权：',
          '',
          '**本地数据控制：**',
          '• 随时查看所有本地数据',
          '• 随时删除任何本地数据',
          '• 随时导出数据（未来功能）',
          '• 卸载应用即可删除所有本地数据',
          '',
          '**云端数据控制（如开启同步）：**',
          '• 随时关闭云端同步',
          '• 随时删除云端数据',
          '• 随时导出云端数据（未来功能）',
          '',
          '**账户控制：**',
          '• 随时注销账户',
          '• 注销账户后，所有云端数据将被永久删除',
          '• 注销账户不会影响您的本地数据（如果已下载到设备）',
        ],
      },
      {
        title: '11. 联系我们',
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
    lastUpdated: 'Last Updated: December 2, 2025',
    intro: 'Step takes your privacy very seriously. This Privacy Policy explains how we collect, use, store, and protect your information.',
    sections: [
      {
        title: '1. Account Registration and Data Storage',
        content: [
          '**Account Registration Requirement:**',
          'Using Step requires account registration. We use phone numbers and SMS verification codes for account registration and login verification.',
          '',
          '**Data Storage Methods:**',
          'Step uses a hybrid storage model to ensure your data security and privacy:',
          '',
          '**Information Stored on Servers (Account Information):**',
          '• Phone number (for account verification and login)',
          '• Nickname (optional, for personalized display)',
          '• Account settings and preferences',
          '',
          '**Information Stored Locally by Default (Core Feature Data):**',
          'All of the following data is stored locally on your device by default and is not automatically uploaded to servers:',
          '• Todo item content and details',
          '• Task completion records',
          '• Recurring task check-in data',
          '• Pomodoro usage records',
          '• Statistics and analytics data',
          '• App preference settings',
          '',
          '**Optional Cloud Sync Feature:**',
          'You can choose to enable cloud sync. When enabled, your local data will:',
          '• Be encrypted and synced to cloud servers',
          '• Be used for multi-device data synchronization',
          '• Provide data backup protection',
          '• You can turn off sync at any time, and data will only be stored locally',
          '',
          '**Important Notes:**',
          '• Account registration is only for identity verification and does not affect your data storage method',
          '• All core feature data is stored locally by default, and you have complete control',
          '• Cloud sync is completely optional, and you can enable or disable it at any time',
          '• Even with cloud sync enabled, your local data remains the primary data source',
        ],
      },
      {
        title: '2. Information Collection',
        content: [
          '**Information We Collect:**',
          'To provide account services, we need to collect the following information:',
          '',
          '**Account Information (Stored on Servers):**',
          '• Phone number (required, for account verification and login)',
          '• Nickname (optional, for personalized display)',
          '',
          '**Feature Data (Stored Locally by Default, Optional Cloud Sync):**',
          'The following data is stored locally on your device by default and is only synced to servers when you enable cloud sync:',
          '• Todo item content',
          '• Task completion records',
          '• Recurring task check-in data',
          '• Pomodoro usage records',
          '• Statistics and analytics data',
          '• App preference settings',
          '',
          '**Information We Do Not Collect:**',
          'We do not:',
          '• Collect your name or email address',
          '• Track your location',
          '• Access your contacts or photos',
          '• Read your clipboard content',
          '• Collect device identifiers for tracking',
          '• Use your data for advertising or marketing purposes',
          '• Access your feature data when cloud sync is not enabled',
        ],
      },
      {
        title: '3. Data Storage',
        content: [
          '**Account Information Storage (Servers):**',
          'Your account information (phone number, nickname, etc.) is stored on secure servers for:',
          '• Account verification and login',
          '• Account management and security protection',
          '• Providing account-related services',
          '',
          '**Feature Data Storage (Local Device, Default):**',
          'All core feature data is stored locally on your device by default using iOS system-provided secure storage mechanisms:',
          '',
          'Local storage features:',
          '• Completely offline storage (by default)',
          '• Not uploaded to any servers (unless you enable cloud sync)',
          '• Not shared with third parties',
          '• You have complete control',
          '• Uninstalling the app deletes all local data',
          '',
          '**Optional Cloud Sync:**',
          'If you choose to enable cloud sync, your data will:',
          '• Continue to be stored on your local device (primary data source)',
          '• Be encrypted and synced to cloud servers (for backup and multi-device sync)',
          '• You can turn off sync at any time, and data will only be stored locally',
          '• Turning off sync will not delete local data',
          '',
          '**Data Access Rights:**',
          '• We cannot access your feature data stored on local devices (unless you enable cloud sync)',
          '• Even with cloud sync enabled, your local data remains the primary data source',
          '• You can export or delete your data at any time',
        ],
      },
      {
        title: '4. Permission Usage',
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
        title: '5. Data Security',
        content: [
          'We take the following measures to protect your data:',
          '',
          '**Account Information Security:**',
          '• Use encrypted transmission (HTTPS) to protect account information',
          '• Server-side encrypted data storage',
          '• Regular security reviews and updates',
          '',
          '**Local Data Security:**',
          '• Use iOS system security sandbox mechanism',
          '• Encrypted data storage',
          '• No network data transmission by default',
          '',
          '**Cloud Sync Security (If Enabled):**',
          '• End-to-end encrypted transmission',
          '• Server-side encrypted storage',
          '• Regular security reviews',
          '',
          'We recommend you:',
          '• Regularly backup device data',
          '• Use device passcode or Face ID protection',
          '• Update Step to the latest version promptly',
          '• Keep your account login information secure',
        ],
      },
      {
        title: '6. iCloud Sync (Future Feature)',
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
        title: '7. Analytics Data',
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
        title: '8. Children\'s Privacy',
        content: [
          'Step is suitable for users of all ages. We do not knowingly collect information from children under 13.',
          '',
          'If you are under 13 years old, please use this app with the consent and guidance of a parent or guardian.',
          '',
          'We only collect necessary account information (phone number) for account verification, and all core feature data is stored locally on your device by default.',
        ],
      },
      {
        title: '9. Policy Updates',
        content: [
          'We may update this Privacy Policy from time to time. Updated policies will be published in-app and on our website.',
          '',
          'Major changes will be notified through in-app notifications. Continued use of Step indicates acceptance of the updated policy.',
        ],
      },
      {
        title: '10. Your Rights',
        content: [
          'You have complete control over your data:',
          '',
          '**Local Data Control:**',
          '• View all local data anytime',
          '• Delete any local data anytime',
          '• Export data anytime (future feature)',
          '• Uninstall app to delete all local data',
          '',
          '**Cloud Data Control (If Sync Enabled):**',
          '• Turn off cloud sync anytime',
          '• Delete cloud data anytime',
          '• Export cloud data anytime (future feature)',
          '',
          '**Account Control:**',
          '• Delete your account anytime',
          '• Upon account deletion, all cloud data will be permanently deleted',
          '• Account deletion will not affect your local data (if already downloaded to device)',
        ],
      },
      {
        title: '11. Contact Us',
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

