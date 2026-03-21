import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '@/src/const/contact';

export function Footer() {
  return (
    <footer className="border-t border-foreground py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground">
              © {new Date().getFullYear()} guswitch.dev
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground p-2 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground p-2 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="border border-foreground p-2 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
