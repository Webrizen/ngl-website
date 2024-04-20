import Encryption from "@/components/main/Encryption";
import Faq from "@/components/main/Faq";
import Features from "@/components/main/Features";
import Hero from "@/components/main/Hero";
import MainServices from "@/components/main/MainServices";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import Skills from "@/components/main/Skills";
import Testimonial from "@/components/main/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full" style={{ zIndex: 999999 }}>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
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
