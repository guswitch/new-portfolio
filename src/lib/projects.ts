import { Project } from '../types/project';

export const projects = [
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
] as Project[];
