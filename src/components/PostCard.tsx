import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getExcerpt(html: string, maxLength: number = 120): string {
  const text = stripHtml(html);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function PostCard(post: Post) {
  return (
    <div className="border-2 border-foreground bg-background flex flex-col h-full">
      {post.image && (
        <div className="aspect-video overflow-hidden border-b-2 border-foreground">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <time
          dateTime={post.date}
          className="font-ibm-plex-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          {format(parseISO(post.date), 'MMMM d, yyyy')}
        </time>
        <h3 className="mt-3 font-anton text-2xl uppercase leading-tight tracking-tight text-foreground">
          <Link href={post.url} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 font-space-grotesk text-sm text-muted-foreground line-clamp-3 flex-1">
          {getExcerpt(post.body.html)}
        </p>
        <div className="mt-auto pt-4">
          <div className="h-0.5 w-8 bg-foreground"></div>
        </div>
      </div>
    </div>
  );
}
