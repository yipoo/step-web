'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

type ParticleQuoteProps = {
  locale: string;
};

export default function ParticleQuote({ locale }: ParticleQuoteProps) {
  const [init, setInit] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // 延迟显示动画以配合粒子加载
    const firstLineTimer = setTimeout(() => {
      setShowFirstLine(true);
    }, 500);

    // 2.5秒后显示第二句
    const secondLineTimer = setTimeout(() => {
      setShowSecondLine(true);
    }, 2800);

    return () => {
      clearTimeout(firstLineTimer);
      clearTimeout(secondLineTimer);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded', container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#007AFF', '#34C759'],
        },
        links: {
          color: '#007AFF',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative w-full py-0 overflow-hidden">
      {/* 粒子背景 */}
      {init && (
        <div className="absolute inset-0 pointer-events-none">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      )}

      {/* 文字内容 */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* 第一句 */}
        <div
          className="text-center mb-4 transition-all"
        >
          {locale === 'zh' ? (
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 dark:text-gray-100 leading-relaxed">
              不积
              <span className="text-brand-blue font-bold mx-1">跬步</span>
              ，无以至
              <span className="text-brand-green font-bold ml-1">千里</span>
            </h1>
          ) : (
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 dark:text-gray-100 leading-relaxed">
              Every <span className="text-brand-blue font-bold mx-1">Step</span> Counts
            </h1>
          )}
        </div>
      </div>

      {/* 添加发光效果的样式 */}
      <style jsx>{`
        .glow-text-blue {
          text-shadow: 0 0 10px #007AFF,
                       0 0 20px #007AFF,
                       0 0 30px rgba(0, 122, 255, 0.5);
          animation: glow-blue 2.5s ease-in-out infinite alternate;
        }

        .glow-text-green {
          text-shadow: 0 0 10px #34C759,
                       0 0 20px #34C759,
                       0 0 30px rgba(52, 199, 89, 0.5);
          animation: glow-green 2.5s ease-in-out infinite alternate;
        }

        @keyframes glow-blue {
          from {
            text-shadow: 0 0 5px #007AFF,
                         0 0 10px #007AFF,
                         0 0 15px rgba(0, 122, 255, 0.3);
          }
          to {
            text-shadow: 0 0 10px #007AFF,
                         0 0 20px #007AFF,
                         0 0 40px rgba(0, 122, 255, 0.6);
          }
        }

        @keyframes glow-green {
          from {
            text-shadow: 0 0 5px #34C759,
                         0 0 10px #34C759,
                         0 0 15px rgba(52, 199, 89, 0.3);
          }
          to {
            text-shadow: 0 0 10px #34C759,
                         0 0 20px #34C759,
                         0 0 40px rgba(52, 199, 89, 0.6);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        /* 移动端减少发光效果 */
        @media (max-width: 640px) {
          .glow-text-blue,
          .glow-text-green {
            text-shadow: 0 0 5px currentColor;
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
