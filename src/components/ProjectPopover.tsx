'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Project } from '../types/project';

type ProjectPopoverProps = {
  project: Project;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function ProjectPopover({ project, open, setOpen }: ProjectPopoverProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, []);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="bg-neutral-300 dark:bg-neutral-800 border border-neutral-800 p-8 max-w-xl w-full"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

            <p className="text-neutral-800 dark:text-neutral-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <p className="text-sm text-neutral-800 dark:text-neutral-400 mb-2">Technologies</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs border border-neutral-700 px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="border border-neutral-700 px-4 py-2 hover:bg-neutral-900 transition"
                >
                  Github
                </a>
              )}

              {/* {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="border border-neutral-700 px-4 py-2 hover:bg-neutral-900 transition"
                >
                  Live
                </a>
              )} */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
