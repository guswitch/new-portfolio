'use client';

import { useEffect, useState } from 'react';

export default function SectionNav() {
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sectionNodes = Array.from(document.querySelectorAll<HTMLElement>('section'));

    // adiciona data-index automaticamente
    sectionNodes.forEach((section, i) => {
      section.setAttribute('data-index', String(i));
    });

    setSections(sectionNodes);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActive(index);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    sectionNodes.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function scrollToSection(index: number) {
    sections[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="fixed left-1/2 -bottom-1 -translate-x-1/2 -translate-y-1/2 flex flex-row gap-4 z-50 ">
      {Array.from({ length: sections.length }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className={`
            cursor-pointer
            w-5 h-2 border 
            border-neutral-900 
            dark:border-neutral-200
            transition-all duration-300
            ${active === i ? 'bg-neutral-900 dark:bg-neutral-200 scale-110' : 'bg-transparent'}
          `}
        />
      ))}
    </div>
  );
}
