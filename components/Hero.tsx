import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-16">
          <div className="inline-block mb-8 px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm tracking-wide">
            FULL-STACK SOFTWARE ENGINEER
          </div>
          <h1 className="mb-8 text-5xl md:text-7xl tracking-tight">
            Alex Chen
          </h1>
          <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I build exceptional digital experiences that combine clean code with intuitive design.
            Specializing in React, Node.js, and cloud architecture.
          </p>
        </div>

        <div className="flex gap-6 justify-center mb-16">
          <Button asChild variant="default" size="lg" className="px-8">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="size-5" strokeWidth={1.5} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin className="size-5" strokeWidth={1.5} />
          </a>
          <a
            href="mailto:alex@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Mail className="size-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
      >
        <ArrowDown className="size-5" strokeWidth={1.5} />
      </a>
    </section>
  );
}