'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

// componente de carrossel em cliente; o `map` dos slides fica com você
function PostsCarousel() {
  // Exemplo de array, você substitui pelo que quiser
  const slides: any[] = [];

  return (
    <section className="py-12">
      <h2 className="text-center text-2xl font-bold mb-6">Posts em destaque</h2>

      <Carousel className="relative">
        <CarouselPrevious />
        <CarouselNext />

        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="p-4">
              {/* renderize aqui o conteúdo de cada slide */}
              {slide}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default function Page() {
  return <PostsCarousel />;
}
