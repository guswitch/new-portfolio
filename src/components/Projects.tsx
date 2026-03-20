'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Project } from '../types/project';
import { ProjectPopover } from './ProjectPopover';
import { ProjectCard } from './ProjectCard';
import { projects } from '../lib/projects';

export function Projects() {
  const t = useTranslations('Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 ml-auto text-right">
          <h2 className="mb-4 text-6xl md:text-7xl tracking-tight uppercase font-anton">
            {t('heading')}
          </h2>
          <div className="w-full h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-right">
            {t('paragraph')}
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>

          <ProjectPopover
            project={selectedProject as Project}
            open={!!selectedProject}
            setOpen={() => setSelectedProject(null)}
          />
        </div>
      </div>
    </section>
  );
}
