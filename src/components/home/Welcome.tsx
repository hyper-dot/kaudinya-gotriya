"use client";

import React from "react";
import Link from "next/link";
import { H2, H1 } from "../typography";
import { homeDictionary } from "@/dictionary/home";
import { Button } from "../ui/button";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export const Welcome = ({ lang }: { lang: string }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const carouselItems = [
    {
      title: "Kaundinya Rishi",
      content:
        "Kaundinya Rishi, an ancient sage of revered wisdom in Hindu mythology, is celebrated for his profound spiritual knowledge and contributions to Vedic teachings. Believed to have lived during the Vedic period, he is renowned for founding several ancestral lineages (gotras) and is revered in Hindu tradition for his role in shaping cultural and religious practices. His legacy endures through temples and rituals dedicated to him, where devotees seek his blessings for enlightenment and spiritual guidance.",
      image: "/rishi/rishi.svg",
    },
    {
      title: "Organization Info",
      content:
        "Welcome to Kaundinya Rishi Ashram, a spiritual sanctuary dedicated to the teachings of the ancient sage Kaundinya Rishi. Our ashram is a place of spiritual learning and practice, where devotees can immerse themselves in the wisdom of the Vedic tradition. We offer a range of services and programs to support spiritual growth and personal development, including meditation, yoga, and Vedic rituals. Our ashram is a place of peace and tranquility, where visitors can connect with their inner selves and experience the transformative power of spiritual practice.",
      image: "/home/message/photo.svg",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{ loop: true }}
        className="relative mx-auto h-fit w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="container px-4 md:flex md:space-x-8 lg:px-8">
                <H1 className="mb-8 block text-center text-3xl font-semibold md:hidden md:text-3xl lg:hidden">
                  {item.title}
                </H1>
                <div className="mb-8 flex-shrink-0 md:mb-0">
                  <Image
                    alt={item.title}
                    src={item.image}
                    height={500}
                    width={600}
                    className="h-[200px] w-full rounded-md md:h-[400px] md:w-[400px] lg:h-[350px] lg:w-[400px]"
                  />
                </div>
                <div className="flex-1 space-y-4 md:space-y-6">
                  <H1 className="hidden text-2xl font-semibold md:block md:text-3xl lg:block lg:text-4xl">
                    {item.title}
                  </H1>
                  <p
                    className={`text-justify ${lang === "en" ? "text-base" : "text-lg"} leading-8 md:text-left md:text-[14px] md:leading-8 lg:text-justify lg:text-lg lg:leading-8`}
                  >
                    {item.content}
                  </p>
                  <Button asChild variant="outline" className="border-primary">
                    <Link
                      href="/about"
                      className="block py-3 text-center text-lg text-primary md:py-4 md:text-xl"
                    >
                      View More
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className=" bottom-0  flex w-full justify-center gap-3 py-4">
          {carouselItems.map((item: any, idx: number) => (
            <div
              key={item}
              style={{ transition: "width 0.2s ease" }}
              className={cn(
                "h-2 w-4 rounded-full border-2 border-primary",
                idx === current - 1 ? "w-8 bg-primary" : "",
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
