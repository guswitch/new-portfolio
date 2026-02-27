import { Code2, Database, Cloud, Palette } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern web technologies',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Python, and database design',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Experience with AWS, Azure, and scalable systems',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Strong eye for design and user experience',
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight">About Me</h2>
          <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I'm a passionate software engineer with 5+ years of experience building
            scalable web applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-300 dark:bg-gray-800">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-12 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <item.icon className="size-8 mb-6 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
              <h3 className="text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}