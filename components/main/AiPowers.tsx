"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const AiPowers = () => {
  return (
    <>
      <div className="flex items-center flex-col gap-3 text-center justify-center">
        <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white md:whitespace-nowrap whitespace-pre text-center">Custom Design & Development using AI</span>
        <h1 className="text-3xl servicesh2 font-bold text-blue-950 dark:text-white md:text-5xl leading-tight">
          Choose the Perfect <span className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">AI Technology</span> <br /> for Your Business
        </h1>
      </div>
      <HorizontalScrollCarousel />
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 text-center p-8 text-5xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default AiPowers;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/13.png",
    title: "Web Development",
    id: 1,
  },
  {
    url: "/14.png",
    title: "Mobile App Development",
    id: 2,
  },
  {
    url: "/15.png",
    title: "Desktop Application Development",
    id: 3,
  },
  {
    url: "/16.png",
    title: "Web Design",
    id: 4,
  },
  {
    url: "/17.png",
    title: "Mobile App Design",
    id: 5,
  },
  {
    url: "/18.png",
    title: "Desktop Application Design",
    id: 6,
  },
  {
    url: "/19.png",
    title: "UI/UX Design",
    id: 7,
  },
];
