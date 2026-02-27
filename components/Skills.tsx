import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Redux'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Linux'],
    },
    {
      category: 'Other',
      skills: ['GraphQL', 'REST APIs', 'WebSockets', 'Testing', 'Agile', 'Microservices'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight">Skills & Technologies</h2>
          <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm tracking-wider mb-6 text-gray-500 dark:text-gray-500">{category.category}</h3>
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