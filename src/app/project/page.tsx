"use client";

import { projectsData } from "@/lib/data";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../../components/ui/button";

import { SquareArrowDownRight } from "lucide-react";
import Footer from "../../components/footer";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const bgColor = [
  "bg-gradient-to-r from-[#27437f] to-[#263791]",
  "bg-gradient-to-r from-[#57343a] to-[#2f1b3f]",
  "bg-gradient-to-r from-[#AC693B] to-[#C45A11]",
  "bg-gradient-to-r from-[#276055] to-[#0e826b]",
  "bg-gradient-to-r from-[#B84C3B] to-[#D3290E]",
];

function ProjectPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // );

  return (
    <Carousel
      setApi={setApi}
      // plugins={[plugin.current]}
      className="w-[100vw]"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="m-0">
        {projectsData.map((_, index) => (
          <CarouselItem key={index} className={cn("p-0", bgColor[index])}>
            <div className=" relative h-[100vh]  bg-gradient-radial from-transparent to-black/60 text-white w-full flex items-center p-10">
              <div className="flex flex-col gap-5 w-[45%] items-start">
                <h2 className=" uppercase text-lg font-bold">{_.subtitle}</h2>
                <h1 className=" uppercase text-7xl font-extrabold">
                  {_.title}
                </h1>
                <p className=" w-full font-thin text-sm leading-6">
                  {_.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {_.tags.map((tag) => (
                    <span
                      key={tag}
                      className=" border-white border px-2 py-1 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="text-lg font-light p-0">
                  <SquareArrowDownRight className=" mr-2" strokeWidth={0.5} />
                  Take A Look
                </Button>
              </div>

              <div className="absolute left-[50%] p-4">
                <Image
                  src={_.imageUrl}
                  alt={_.title}
                  className=" h-[500px] w-[100%] object-cover object-left rounded-xl"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="fixed bottom-0 flex flex-col px-5 mr-7 w-full text-white">
        <div className=" flex justify-between">
          <CarouselPrevious className=" left-10 relative w-12 h-12" />
          <div className=" flex gap-1">
            {projectsData.map((_, index) => (
              <div
                key={index}
                className={cn(
                  " w-10 h-2",
                  index === current - 1 ? " bg-white" : " bg-white/10"
                )}
              ></div>
            ))}
          </div>
          <CarouselNext className=" right-10 relative w-12 h-12" />
        </div>

        <Footer />
      </div>
    </Carousel>
  );
}

export default ProjectPage;
