import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useT } from '../utils/translations';
import MorphBackground from './MorphBackground';

export function Hero() {
  const t = useT('Hero');

  return (
    <section
      id="hero"
      className="min-h-screen px-4 py-24 snap-start relative flex items-center justify-center"
    >
      <MorphBackground />
      <div className="flex-col items-center justify-center relative max-w-5xl mx-auto">
        <div className="w-full">
          <div className="w-32 md:w-72 h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
          <h1 className="mb-8 text-8xl tracking-tight font-anton uppercase">{t('name')}</h1>
          <div className="inline-block p-2 border border-gray-900 dark:border-gray-300 text-sm tracking-wide">
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
        <div className="w-full mt-16">
          <div className="flex gap-6 justify-center">
            <Button asChild variant="default" size="lg" className="px-8">
              <a href="#contact">{t('getInTouch')}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 hover:text-amber-50">
              <a href="#projects">{t('viewProjects')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
