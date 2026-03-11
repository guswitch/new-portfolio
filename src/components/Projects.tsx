'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Project } from '../types/project';
import { ProjectPopover } from './ProjectPopover';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const t = useTranslations('Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AI Stem Separator',
      description:
        'Web tool that separates music stems using AI models and detects BPM and musical key automatically.',
      tech: ['Next.js', 'Node.js', 'Demucs', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Audio BPM & Key Detector',
      description:
        'Audio analysis tool that identifies BPM and key signature from uploaded tracks using signal processing algorithms.',
      tech: ['TypeScript', 'Web Audio API', 'DSP', 'Next.js'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: '3D Interactive Portfolio',
      description:
        'Personal portfolio built with WebGL featuring interactive 3D elements and animated UI components.',
      tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Beat Marketplace',
      description:
        'Marketplace platform where producers can upload, preview and sell beats with waveform visualization.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'AI Sound Texture Generator',
      description:
        'Experimental tool that generates unique sound textures using AI and procedural synthesis.',
      tech: ['Python', 'TensorFlow', 'WebSockets', 'React'],
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Music Visualization Engine',
      description:
        'Real-time audio visualizer that reacts to frequency spectrum using WebGL shaders.',
      tech: ['Three.js', 'Web Audio API', 'GLSL', 'React'],
      github: '#',
      live: '#',
    },
  ];

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
