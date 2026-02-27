import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thanks for reaching out! This is a demo form.');
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight">Get In Touch</h2>
          <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="size-5 text-gray-600 dark:text-gray-400" strokeWidth={1.5} />
                  <span className="text-sm text-gray-500 dark:text-gray-500 tracking-wider">
                    EMAIL
                  </span>
                </div>
                <a
                  href="mailto:alex.chen@example.com"
                  className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  alex.chen@example.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="size-5 text-gray-600 dark:text-gray-400" strokeWidth={1.5} />
                  <span className="text-sm text-gray-500 dark:text-gray-500 tracking-wider">
                    PHONE
                  </span>
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="size-5 text-gray-600 dark:text-gray-400" strokeWidth={1.5} />
                  <span className="text-sm text-gray-500 dark:text-gray-500 tracking-wider">
                    LOCATION
                  </span>
                </div>
                <p className="text-gray-900 dark:text-gray-100">San Francisco, CA</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you
                have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <Input id="name" placeholder="Name" required className="h-12" />
              </div>

              <div>
                <Input id="email" type="email" placeholder="Email" required className="h-12" />
              </div>

              <div>
                <Input id="subject" placeholder="Subject" required className="h-12" />
              </div>

              <div>
                <Textarea
                  id="message"
                  placeholder="Message"
                  rows={6}
                  required
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-12">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
