'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Project } from '../types/project';

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => onOpen(project)}
      className="border border-neutral-200 p-6 cursor-pointer hover:bg-gray-300/40 dark:hover:bg-neutral-700/40 transition-colors "
    >
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

      <p className="text-sm text-neutral-500 mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((tech) => (
          <span key={tech} className="text-xs border border-gray-500 px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
