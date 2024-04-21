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
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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
                    longdescription={`
                    Are you a creative thinker with a passion for user experience design? NGL Agency is seeking a talented UX/UI Designer to join our collaborative team. As a UX/UI Designer, you will be instrumental in shaping digital products and experiences that resonate with users on a profound level. From wireframes to prototypes, you'll leverage your design expertise to craft visually compelling and user-friendly interfaces.
<br/><br/>
Responsibilities:
<br/><br/>
Conduct user research and gather insights to inform design decisions.
Create wireframes, prototypes, and visual designs that effectively communicate design concepts and interactions.
Collaborate closely with frontend engineers and backend developers to ensure seamless integration of design solutions.
Iterate on designs based on user feedback, usability testing, and data analysis.
Maintain brand consistency and adhere to design guidelines throughout the design process.
Qualifications:
<br/><br/>
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
                imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Modern"
                heading="Dress for the best."
            >
                <ExampleContent
                    title="Full Stack Developer - Building Robust Digital Solutions"
                    description="Join NGL Agency as a Full Stack Developer and drive the development of robust digital solutions from concept to deployment. Collaborate with multidisciplinary teams to architect, implement, and maintain scalable web applications."
                    longdescription={`
                    Are you a versatile developer with a passion for building innovative web applications? NGL Agency is seeking a skilled Full Stack Developer to join our dynamic team. As a Full Stack Developer, you will play a key role in developing end-to-end solutions that empower our clients to thrive in the digital landscape. From frontend interfaces to backend logic, you'll leverage your expertise to deliver high-quality, performant applications.
                    <br/><br/>
Responsibilities:
<br/><br/>
Develop frontend components and features using modern web technologies such as HTML5, CSS3, and JavaScript frameworks (e.g., React, Angular, Vue.js).
Design and implement backend services and APIs using server-side technologies (e.g., Node.js, Python, Ruby on Rails).
Collaborate with designers, UX/UI specialists, and other developers to translate requirements into technical solutions.
Write clean, maintainable code and conduct thorough testing to ensure software quality and reliability.
Stay updated on emerging technologies and best practices in full stack development.
Qualifications:
<br/><br/>
Bachelor's degree in Computer Science, Engineering, or a related field.
Proven experience in full stack development, with a strong portfolio showcasing your projects and contributions.
Proficiency in both frontend and backend technologies, with a solid understanding of software architecture and design patterns.
Experience with databases and ORM frameworks (e.g., SQL, MongoDB, Sequelize).
Strong problem-solving skills and attention to detail.
Excellent communication and teamwork abilities.
Join us at NGL Agency and be part of a collaborative environment where your expertise and creativity will drive the development of innovative digital solutions. Apply now and let's build something extraordinary together!
                    `}
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
                    longdescription={`
                    Are you a strategic thinker with a knack for digital marketing? NGL Agency is seeking a results-oriented Digital Marketing Specialist to join our team. As a Digital Marketing Specialist, you will be responsible for devising and implementing comprehensive marketing strategies that maximize online visibility and engagement. From SEO optimization to content marketing, you'll leverage your analytical skills to drive meaningful outcomes for our clients.
                    <br/><br/>
Responsibilities:
<br/><br/>
Develop and execute digital marketing campaigns across various channels, including search engines, social media, email, and display advertising.
Conduct keyword research, competitor analysis, and audience segmentation to inform marketing strategies.
Create compelling content, including blog posts, social media posts, and ad copy, that resonates with target audiences.
Monitor and analyze campaign performance metrics, such as traffic, conversion rates, and ROI, to optimize marketing efforts.
Stay abreast of industry trends and best practices in digital marketing to drive continuous improvement.
Qualifications:
<br/><br/>
Bachelor's degree in Marketing, Communications, or a related field.
Proven experience in digital marketing, with a track record of successfully executing campaigns across multiple channels.
Expertise in SEO, SEM, and PPC advertising, with proficiency in tools such as Google Analytics, Google Ads, and SEO platforms.
Strong analytical skills and the ability to derive actionable insights from data.
Excellent communication and writing skills, with a creative flair for content creation.
Ability to thrive in a fast-paced, collaborative environment.
Join us at NGL Agency and be part of a dynamic team where your passion for digital marketing will drive measurable results for our clients. Apply now and let's elevate brands together in the digital space!
`}
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
                <DrawerContent className="w-full">
                    <DrawerHeader className="max-w-7xl mx-auto">
                        <DrawerTitle className="text-4xl font-bold text-neutral-200 my-3">{title || "Loading..."}</DrawerTitle>
                        <DrawerDescription className="text-neutral-400 text-lg h-[55vh] overflow-y-auto custom_y_scrollbar_design">
                            <div className="h-min" dangerouslySetInnerHTML={{ __html: longdescription }} />
                            <section className="text-gray-300 max-w-7xl mx-auto">
                                <div className="w-full flex p-5 md:flex-row flex-col items-center">
                                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                        <h1 className="title-font md:text-2xl text-xl mb-4 font-medium text-gray-50">Thank you for showing us your interest to join us! We're coming back to you very quickly.
                                        </h1>
                                        <img className="object-cover object-center rounded" alt="hero" src="/logo.png" />
                                    </div>
                                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                        <form className="w-full">
                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-lg font-medium text-slate-200">Name</label>
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-lg font-medium text-slate-200">Email</label>
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="message" className="block text-lg font-medium text-slate-200">Message</label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="resume" className="block text-lg font-medium text-slate-200">Resume</label>
                                                <Input
                                                    type="file"
                                                    id="resume"
                                                    name="resume"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-row w-full gap-4 justify-start items-center">
                                                <Button
                                                    type="submit"
                                                >
                                                    Apply Now
                                                </Button>
                                                <DrawerClose>
                                                    <Button variant="outline">Cancel</Button>
                                                </DrawerClose>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </DrawerDescription>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>
        </div>
    </div>
);