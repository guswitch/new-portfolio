'use client';

import { useEffect, useState } from 'react';

export default function Logo() {
  const text = '.dev';
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 120);
    }

    if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 4000);
    }

    if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, 150);
    }

    if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <div className="flex items-center">
      <span className="font-bold text-blue-500 dark:text-green-300 mr-2"> {'>'} </span>
      <h1 className="text-2xl font-thin tracking-tight font-space-grotesk">
        guswitch
        <span className="font-bold">{displayed}</span>
        <span className="animate-blink ml-1">|</span>
      </h1>
    </div>
  );
}
