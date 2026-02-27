import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
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
    <section id="experience" className="py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight">Experience</h2>
          <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {experiences.map((item, index) => (
            <div key={index} className="relative pl-12 border-l border-gray-300 dark:border-gray-700">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center">
                {item.type === 'work' ? (
                  <Briefcase className="size-3 text-gray-600 dark:text-gray-400" strokeWidth={1.5} />
                ) : (
                  <GraduationCap className="size-3 text-gray-600 dark:text-gray-400" strokeWidth={1.5} />
                )}
              </div>
              <div className="mb-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl">{item.title}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-500 tracking-wider mt-1">{item.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.organization}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}