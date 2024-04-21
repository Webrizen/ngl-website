"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

export const TextParallaxContentExample = () => {
    return (
        <div className="">
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Collaborate"
                heading="Built for all of us."
            >
                <ExampleContent
                    title="Frontend Engineer - Crafting Seamless User Experiences"
                    description="Join NGL Agency as a Frontend Engineer and be the architect behind captivating user interfaces. Collaborate with a dynamic team to shape interactive experiences that redefine digital engagement."
                    longdescription={`
                    Are you a creative thinker with a passion for user experience design? NGL Agency is seeking a talented UX/UI Designer to join our collaborative team. As a UX/UI Designer, you will be instrumental in shaping digital products and experiences that resonate with users on a profound level. From wireframes to prototypes, you'll leverage your design expertise to craft visually compelling and user-friendly interfaces.
<br /> <br />
Responsibilities:
<br /> <br />
Conduct user research and gather insights to inform design decisions.
Create wireframes, prototypes, and visual designs that effectively communicate design concepts and interactions.
Collaborate closely with frontend engineers and backend developers to ensure seamless integration of design solutions.
Iterate on designs based on user feedback, usability testing, and data analysis.
Maintain brand consistency and adhere to design guidelines throughout the design process.
Qualifications:
<br /><br />
Bachelor's degree in Design, Human-Computer Interaction, or a related field.
Proven experience in UX/UI design, with a strong portfolio showcasing your design process and outcomes.
Proficiency in design tools such as Sketch, Adobe XD, Figma, or similar.
Solid understanding of user-centered design principles and methodologies.
Excellent communication and collaboration skills, with the ability to articulate design decisions and rationale.
Join us at NGL Agency and embark on a journey to create transformative digital experiences that leave a lasting impression. Apply now and let's redefine the future of design together!
                    `}
                />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Quality"
                heading="Never compromise."
            >
                <ExampleContent
                    title="UX/UI Designer - Crafting Intuitive Digital Experiences"
                    description="Join NGL Agency as a UX/UI Designer and lead the creation of intuitive interfaces that seamlessly blend aesthetics with functionality. Collaborate with cross-functional teams to transform complex concepts into user-centric designs."
                    longdescription=""
                />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Modern"
                heading="Dress for the best."
            >
                <ExampleContent
                    title="Full Stack Developer - Building Robust Digital Solutions"
                    description="Join NGL Agency as a Full Stack Developer and drive the development of robust digital solutions from concept to deployment. Collaborate with multidisciplinary teams to architect, implement, and maintain scalable web applications."
                    longdescription=""
                />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://cdn.pixabay.com/photo/2019/09/26/11/59/sarajevo-4505752_640.jpg"
                subheading="Market"
                heading="Keep it engaging."
            >
                <ExampleContent
                    title="Digital Marketing Specialist - Driving Online Engagement Strategies"
                    description="Join NGL Agency as a Digital Marketing Specialist and lead the development and execution of data-driven marketing campaigns. Harness your expertise in SEO, SEM, and social media to amplify brand presence and drive measurable results."
                    longdescription=""
                />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
    imgUrl,
    subheading,
    heading,
    children,
}: {
    imgUrl: string;
    subheading: string;
    heading: string;
    children: ReactNode;
}) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({
    subheading,
    heading,
}: {
    subheading: string;
    heading: string;
}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = ({ longdescription, description, title }: any) => (
    <div className="mx-auto grid max-w-7xl grid-cols-1 z-50 gap-8 px-6 rounded-xl border border-transparent hover:border-cyan-200 py-12 md:grid-cols-12 my-12 bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl relative">
        <div className="absolute -z-10 right-0 left bottom-0 m-auto top-0 h-full w-full flex justify-center items-center">
            <div className="w-full h-full overflow-hidden flex rounded-xl relative blur-3xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
            </div>
        </div>
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            {title || `Additional content explaining the above card here`}
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-300 md:text-2xl">
                {description || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.`}
            </p>
            <Drawer>
                <DrawerTrigger>
                    <button className="w-full cursor-pointer rounded !bg-neutral-900 !px-9 !py-4 text-xl !text-white transition-colors hover:!bg-neutral-700 md:w-fit">
                        Apply Now
                    </button>
                </DrawerTrigger>
                <DrawerContent className="overflow-y-auto">
                    <DrawerHeader className="max-w-7xl mx-auto">
                        <DrawerTitle className="text-4xl font-bold text-neutral-200 my-3">{title || "Loading..."}</DrawerTitle>
                        <DrawerDescription className="text-neutral-400 text-lg"><div dangerouslySetInnerHTML={{ __html: longdescription }} /></DrawerDescription>
                    </DrawerHeader>
                    <section className="text-gray-300 body-font">
                        <div className="max-w-7xl mx-auto flex p-5 md:flex-row flex-col items-center">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img className="object-cover object-center rounded" alt="hero" src="/logo.png" />
                            </div>
                            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50">Thank you for showing us your interest to join us! We're coming back to you very quickly
                                </h1>
                               ...
                            </div>
                        </div>
                    </section>
                    <DrawerFooter className="max-w-7xl mx-auto flex flex-row w-full justify-start items-center">
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    </div>
);