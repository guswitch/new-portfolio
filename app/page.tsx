import Link from 'next/link';

import { parseISO, format, compareDesc } from 'date-fns';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Posts } from '@/components/Posts';

export default async function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Posts />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
