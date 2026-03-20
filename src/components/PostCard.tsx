import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { PostDate } from '@/src/app/posts/[slug]/PostDate';

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getExcerpt(html: string, maxLength: number = 120): string {
  const text = stripHtml(html);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + ' ...';
}

export function PostCard(post: Post) {
  return (
    <div className="border border-foreground bg-background flex flex-col h-full">
      {post.image && (
        <div className="aspect-video overflow-hidden border-b border-foreground">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="mt-3 font-anton text-2xl uppercase leading-tight tracking-normal text-foreground">
          <Link href={post.url} className="hover:underline">
            {getExcerpt(post.title, 40)}
          </Link>
        </h3>
        <p className="mt-4 font-space-grotesk text-sm text-muted-foreground line-clamp-3 flex-1">
          {getExcerpt(post.body.html, 120)}
        </p>
        <span className="mt-4 block font-ibm-plex-mono text-right">
          <PostDate date={post.date} />
        </span>
      </div>
    </div>
  );
}
