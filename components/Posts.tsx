import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { PostCard } from './PostCard';

export function Posts() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <section id="posts" className="py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight">Posts</h2>
          <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
        </div>
        <Carousel className="relative">
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent>
            {posts.map((post, idx) => (
              <CarouselItem key={idx} className="p-4">
                <PostCard key={idx} {...post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
