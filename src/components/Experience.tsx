import { Briefcase, GraduationCap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Experience() {
  const t = useTranslations('Experience');

  const experiences = [
    {
      type: 'work',
      title: 'Senior Software Engineer',
      organization: 'TechCorp Inc.',
      period: '2022 - Present',
      description:
        'Lead development of microservices architecture serving 1M+ users. Mentored junior developers and improved system performance by 40%.',
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'StartupXYZ',
      period: '2020 - 2022',
      description:
        'Built and shipped multiple features for SaaS platform. Implemented CI/CD pipeline and reduced deployment time by 60%.',
    },
    {
      type: 'work',
      title: 'Software Developer',
      organization: 'Digital Solutions Ltd.',
      period: '2019 - 2020',
      description:
        'Developed responsive web applications using React and Node.js. Collaborated with design team to implement pixel-perfect UIs.',
    },
    {
      type: 'education',
      title: 'B.S. Computer Science',
      organization: 'University of Technology',
      period: '2015 - 2019',
      description:
        'Graduated with honors. Focused on software engineering, algorithms, and distributed systems.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-right my-6">
          <h2 className="mb-4 text-6xl md:text-7xl tracking-tight uppercase font-anton">
            {t('heading')}
          </h2>
          <div className="w-full h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-left">
            {t('paragraph')}
          </p>
        </div>

        <div className="relative">
          <div className="space-y-8 border-l-2 border-foreground">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="border-2 border-l-0 border-foreground p-6 bg-background w-full"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-foreground p-2 bg-foreground text-background">
                      {item.type === 'work' ? (
                        <Briefcase size={20} strokeWidth={1.5} />
                      ) : (
                        <GraduationCap size={20} strokeWidth={1.5} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-anton text-xl md:text-2xl uppercase tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="font-space-grotesk text-sm text-muted-foreground mt-1">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <span className="font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <div className="h-0.5 w-8 bg-foreground mb-4"></div>
                <p className="font-space-grotesk text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
