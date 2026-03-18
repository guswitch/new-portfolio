'use client';

import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/pop.min.css';

export function CodeHighlighter({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [html]);

  return (
    <div
      ref={containerRef}
      className="font-space-grotesk prose prose-lg text-foreground prose-headings:font-anton prose-headings:uppercase prose-headings:tracking-tight prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:font-ibm-plex-mono prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
