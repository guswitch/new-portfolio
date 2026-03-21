'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useT } from '../utils/translations';
import { skills } from '../const/skills';

export function Skills() {
  const t = useT('Skills');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="min-h-screen py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-left my-6">
          <h2 className="mb-4 text-6xl md:text-7xl tracking-tight uppercase font-anton">
            {t('heading')}
          </h2>
          <div className="w-full h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-left">
            {t('paragraph')}
          </p>
        </div>

        <div className="mt-8">
          <ol className="grid grid-cols-1 gap-8">
            {skills.map((skill, index) => {
              const open = openIndex === index;

              return (
                <li
                  key={index}
                  className="group border-b border-gray-300 dark:border-gray-700 pb-4"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full justify-between items-center text-left cursor-pointer"
                  >
                    <div className={`flex items-center gap-8`}>
                      <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-gray-900 dark:text-gray-100 text-xl"
                      >
                        {open ? <Minus className="size-7" /> : <Plus className="size-7" />}
                        {/* <Plus className="size-7" /> */}
                      </motion.span>
                      <h3 className="text-xl font-semibold tracking-wide uppercase">
                        {t(skill.key)}
                      </h3>
                    </div>
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
                        <div className="ml-3 mt-3 text-neutral-700 dark:text-gray-100 max-w-xl font-space-grotesk">
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
