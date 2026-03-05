import { Badge } from './ui/badge';
import { useTranslations } from 'next-intl';

// ref https://dribbble.com/shots/26368138-Skills-Section-UI-design

export function Skills() {
  const t = useTranslations('Skills');

  const skillCategories = [
    {
      category: t('categories.frontend'),
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Redux'],
    },
    {
      category: t('categories.backend'),
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: t('categories.devops'),
      skills: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Linux'],
    },
    {
      category: t('categories.other'),
      skills: ['GraphQL', 'REST APIs', 'WebSockets', 'Testing', 'Agile', 'Microservices'],
    },
  ];

  return (
    <section
      id="skills"
      data-index="1"
      className="h-screen py-24 px-4 bg-white dark:bg-black snap-start"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-5xl md:text-6xl tracking-tight font-anton uppercase">
            {t('heading')}
          </h2>
          <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-space-grotesk">
            {t('paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm tracking-wider mb-6 text-gray-500 dark:text-gray-500">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
