import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/src/components/Logo';
import { ThemeToggle } from '@/src/components/ThemeToggle';
import { LanguageSwitcher } from '@/src/components/LanguageSwitcher';
import { CodeHighlighter } from '@/src/components/CodeHighlighter';
import { ReadingProgress } from '@/src/components/ReadingProgress';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath })).filter((p) => p.slug);

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  let slug = await params.then((p) => p.slug);
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) notFound();
  return { title: post.title };
};

const PostLayout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  let slug = await params.then((p) => p.slug);
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) notFound();

  return (
    <>
      <ReadingProgress />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black">
        <nav className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl tracking-tight text-gray-900 dark:text-gray-100">
              <Logo />
            </Link>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-background pt-32">
        <Link
          href="/"
          className="fixed left-4 top-1/2 z-50 hidden border-2 border-foreground bg-foreground p-3 text-background hover:bg-background hover:text-foreground md:left-16 lg:block"
        >
          <ArrowLeft size={24} />
        </Link>

        <article className="mx-auto max-w-[680px] px-6 pb-16">
          <header className="mb-12 border-b-4 border-foreground pb-8">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-3 py-1 text-sm text-background hover:bg-background hover:text-foreground md:hidden"
            >
              <ArrowLeft size={16} />
              <span className="font-ibm-plex-mono text-xs uppercase">Back</span>
            </Link>
            <time
              dateTime={post.date}
              className="mb-4 block font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </time>
            <h1 className="font-anton text-4xl uppercase leading-[0.9] tracking-tight text-foreground md:text-5xl">
              {post.title}
            </h1>
          </header>

          <CodeHighlighter html={post.body.html} />
        </article>
      </main>
    </>
  );
};

export default PostLayout;
