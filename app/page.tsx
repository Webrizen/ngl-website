import AiPowers from "@/components/main/AiPowers";
import Encryption from "@/components/main/Encryption";
import Faq from "@/components/main/Faq";
import Features from "@/components/main/Features";
import Hero from "@/components/main/Hero";
import MainServices from "@/components/main/MainServices";
import Services from "@/components/main/Services";
import Skills from "@/components/main/Skills";
import Testimonial from "@/components/main/Testimonial";

export default function Home() {
  return (
    <main className="h-full w-full" style={{ zIndex: 999999 }}>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <div className="bg-transparent py-6 sm:py-8 lg:py-12">
          <div className="mx-auto container px-4 md:px-8">
            <div className="flex items-center flex-col gap-3 text-center justify-center w-full mb-20">
              <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white md:whitespace-nowrap whitespace-pre text-center">Custom Design & Development using AI</span>
              <h1 className="text-3xl servicesh2 font-bold text-blue-950 dark:text-white md:text-5xl leading-tight">
                Choose the Perfect <span className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">AI Technology</span> <br /> for Your Business
              </h1>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
              </a>
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
              </a>
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
              </a>
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
              </a>
            </div>
          </div>
        </div>
        <Encryption />
        <Services />
        <Features />
        <MainServices />
        <Testimonial />
        <Faq />
      </div>
    </main>
  );
}
