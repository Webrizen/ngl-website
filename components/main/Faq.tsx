import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
    return (
        <> 
        <section className="py-10">
            <div className="container mx-auto relative">
                <div className="absolute right-0 top-0 left-0 mx-auto h-full w-full flex justify-center">
                    <div className="w-36 h-36 overflow-hidden flex rounded-xl relative blur-2xl">
                        <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                        <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-indigo-500 rounded-md rotate-45" />
                        <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
                    </div>
                </div>
                <div className="flex flex-col  space-y-16 px-5 sm:px-16 md:px-20 lg:px-28 py-8">
                    <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
                        <span className="rounded-lg px-2.5 py-1 text-lg w-max mx-auto font-semibold tracking-wide  bg-gradient-to-r from-cyan-400 to-green-500 inline-block text-transparent bg-clip-text">Let's answer some questions</span>
                        <h1 className="text-5xl font-semibold text-blue-950 dark:text-white md:text-7xl leading-tight">
                            FAQs
                        </h1>
                    </div>
                    <div className="w-full">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='md:text-xl'>What is web development?</AccordionTrigger>
                                <AccordionContent className='text-lg'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className='md:text-xl'>How do I know if I need it?</AccordionTrigger>
                                <AccordionContent className='text-lg'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className='md:text-xl'>What does it cost?</AccordionTrigger>
                                <AccordionContent className='text-lg'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className='md:text-xl'>What about SEO?</AccordionTrigger>
                                <AccordionContent className='text-lg'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
