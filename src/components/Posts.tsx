'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/src/components/ui/carousel';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { PostCard } from './PostCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useT } from '../utils/translations';

export function Posts() {
  const t = useT('Posts');

  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <section id="posts" className="min-h-screen py-24 px-4 bg-white dark:bg-black snap-start">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4 text-6xl md:text-7xl tracking-tight uppercase font-anton">
            {t('heading')}
          </h2>
          <div className="w-full h-px bg-gray-900 dark:bg-gray-100 mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('paragraph')}
          </p>
        </div>
        <Carousel className="relative">
          <CarouselContent className="-ml-4">
            {posts.map((post, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2">
                <PostCard {...post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between mt-10">
            <CarouselPrevious className="static size-12 rounded-none border-2 border-foreground bg-foreground text-white hover:bg-background hover:text-foreground disabled:bg-muted disabled:text-muted-foreground disabled:border-muted">
              <ChevronLeft size={20} />
            </CarouselPrevious>
            <CarouselNext className="static size-12 rounded-none border-2 border-foreground bg-foreground text-white hover:bg-background hover:text-foreground disabled:bg-muted disabled:text-muted-foreground disabled:border-muted">
              <ChevronRight size={20} />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
