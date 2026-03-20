import Link from 'next/link';

import { parseISO, format, compareDesc } from 'date-fns';
import { Hero } from '@/src/components/Hero';
import { About } from '@/src/components/About';
import { Skills } from '@/src/components/Skills';
import { Projects } from '@/src/components/Projects';
import { Contact } from '@/src/components/Contact';
import { Experience } from '@/src/components/Experience';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Posts } from '@/src/components/Posts';
import { CustomCursor } from '../components/CustomCursor';

export default async function Home() {
  return (
    <div className="custom-cursor-page">
      <CustomCursor />
      <Header />
      <main className="pt-20">
        <Hero />
        <Skills />
        <Projects />
        <Posts />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
