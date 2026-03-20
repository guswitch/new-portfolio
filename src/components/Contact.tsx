'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { CONTACT_INFO } from '@/src/lib/contact';

export function Contact() {
  const t = useTranslations('Contact');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send');

      toast.success('Message sent successfully!');
      e.currentTarget.reset();
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-left my-6">
          <h2 className="mb-4 text-6xl md:text-7xl tracking-tight uppercase font-anton">
            {t('heading')}
          </h2>
          <div className="w-full h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-left">
            {t('paragraph')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="border border-foreground p-2 bg-foreground text-background">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground block">
                    {t('emailLabel')}
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-space-grotesk hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="border border-foreground p-2 bg-foreground text-background">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground block">
                    {t('phoneLabel')}
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="font-space-grotesk hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="border border-foreground p-2 bg-foreground text-background">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground block">
                    {t('locationLabel')}
                  </span>
                  <span className="font-space-grotesk">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="border border-foreground p-6">
              <p className="font-space-grotesk text-sm text-muted-foreground leading-relaxed">
                {t('footer')}
              </p>
            </div>
          </div>

          <div className="border-l border-foreground p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                id="name"
                placeholder={t('form.name')}
                required
                className="h-12 border border-foreground bg-white font-space-grotesk"
              />
              <Input
                name="email"
                id="email"
                type="email"
                placeholder={t('form.email')}
                required
                className="h-12 border border-foreground bg-white font-space-grotesk"
              />
              <Input
                name="subject"
                id="subject"
                placeholder={t('form.subject')}
                required
                className="h-12 border border-foreground bg-white font-space-grotesk"
              />
              <Textarea
                name="message"
                id="message"
                placeholder={t('form.message')}
                rows={5}
                required
                className="resize-none border border-foreground bg-white font-space-grotesk"
              />
              <Button
                type="submit"
                variant="default"
                disabled={isLoading}
                className="w-full h-12 font-ibm-plex-mono uppercase tracking-wide cursor-pointer"
              >
                <Send size={16} className="mr-2" />
                {isLoading ? 'Sending...' : t('form.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
