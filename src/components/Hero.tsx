import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useT } from '../utils/translations';
import MorphBackground from './MorphBackground';

export function Hero() {
  const t = useT('Hero');

  return (
    <>
      {/* <section className="min-h-screen flex items-center justify-center relative px-4 py-24">
        <div className="max-w-3xl mx-auto text-left">
          <div className="w-32 h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
          <div className="mb-16">
            <h1 className="mb-8 text-9xl tracking-tight font-anton uppercase">{t('name')}</h1>
            <div className="inline-block p-2 border border-gray-300 dark:border-gray-700 text-sm tracking-wide">
              {t('tagLine')}
            </div>
            <p className="text-right text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-space-grotesk">
              {t('description')}
            </p>
          </div>

          <div className="flex gap-6 justify-center mb-16">
            <Button asChild variant="default" size="lg" className="px-8">
              <a href="#contact">{t('getInTouch')}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <a href="#projects">{t('viewProjects')}</a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Github className="size-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Linkedin className="size-5" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Mail className="size-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          <ArrowDown className="size-5" strokeWidth={1.5} aria-label={t('arrowAlt')} />
        </a>
      </section> */}
      <section className="min-h-screen px-4 py-24">
        <div className="flex-col items-center justify-center relative max-w-5xl mx-auto">
          <div className="w-full">
            <div className="w-32 md:w-72 h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
            <h1 className="mb-8 text-8xl tracking-tight font-anton uppercase">{t('name')}</h1>
            <div className="inline-block p-2 border border-gray-300 dark:border-gray-700 text-sm tracking-wide">
              {t('tagLine')}
            </div>
          </div>
          <div className="w-full grid grid-flow-row md:grid-flow-col justify-between mt-8">
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Github className="size-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Linkedin className="size-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:alex@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Mail className="size-5" strokeWidth={1.5} />
              </a>
            </div>
            <div className="mt-5 md:mt-0">
              <p className="text-left md:text-right text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-space-grotesk">
                {t('description')}
              </p>
            </div>
          </div>
          <div className="w-full mt-12">
            <div className="flex gap-6 justify-center mb-16">
              <Button asChild variant="default" size="lg" className="px-8">
                <a href="#contact">{t('getInTouch')}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="#projects">{t('viewProjects')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <MorphBackground />
    </>
  );
}
