'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useT } from '../utils/translations';

const skills = [
  {
    title: 'Full Stack Development',
    content:
      'TypeScript, JavaScript, React, Next.js, Node.js, NestJS, REST APIs, GraphQL, HTML, CSS / Sass',
  },
  {
    title: 'Data & State Management',
    content: 'MySQL, NoSQL, Firebase, PostgreSQL, Redis',
  },
  {
    title: 'DevOps & Infrastructure',
    content: 'Docker, Vercel, Azure, Cloud Services',
  },
  {
    title: 'Testing',
    content: 'Jest, Cypress',
  },
  {
    title: 'Software Engineering',
    content: 'Clean Code, OOP, Agile Methodologies, Code Review, Technical Architecture',
  },
  {
    title: 'Artificial Intelligence',
    content:
      'Machine Learning Integration, AI APIs (OpenAI / etc), Audio Processing, AI-Assisted Development',
  },
];

export function Skills() {
  const t = useT('Skills');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-white dark:bg-black snap-start">
      <div className="max-w-5xl mx-auto">
        <div className="text-left my-12">
          <h2 className="mb-4 text-6xl md:text-7xl tracking-tight uppercase font-anton">
            {t('heading')}
          </h2>
        </div>
        <div className="mt-8">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const open = openIndex === index;

              return (
                <li key={index} className="group">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full justify-between items-center text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-8">
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-900 dark:text-gray-100 text-xl"
                      >
                        <Plus className="size-7" />
                      </motion.span>
                      <h3 className="md:text-lg lg:text-xl font-semibold text-base tracking-wide uppercase">
                        {skill.title}
                      </h3>
                    </div>

                    {/* <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-neutral-500 text-xl"
                  >
                    <Plus className="size-7" />
                  </motion.span> */}
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                        animate={{ height: 'auto', opacity: 1, filter: 'blur(0px)' }}
                        exit={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 text-neutral-700 max-w-xl font-space-grotesk">
                          {skill.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
