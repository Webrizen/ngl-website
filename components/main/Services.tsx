"use client";
import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

const services = [
    {
        id: 1,
        title: "Service name 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico",
    },
    {
        id: 2,
        title: "Service name 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico"
    },
    {
        id: 3,
        title: "Service name 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico"
    },
    {
        id: 4,
        title: "Service name 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis placeat, atque nostrum praesentium veritatis enim repudiandae corporis",
        icon: "default-ico"
    }
]

export default function Services() {
    return (
        <section className="py-32 min-h-screen w-full ">
            <div className="md:container w-full mx-auto">
                <div className="flex flex-col  space-y-16 px-5 sm:px-16 md:px-20 lg:px-28 py-8">
                    <div className="flex flex-col justify-center text-center mx-auto md:max-w-3xl max-w-full space-y-5">
                        <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white md:whitespace-nowrap whitespace-pre text-center">Custom Design & Development for Your Business</span>
                        <h1 className="text-3xl servicesh2 font-bold text-blue-950 dark:text-white md:text-5xl leading-tight">
                            Choose the Perfect <span className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Technology Solution </span> for Your Business
                        </h1>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3 w-full">
                        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] w-full">
                            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                            <EvervaultCard text="Web" />

                            <h2 className="dark:text-white text-black mt-4 text-lg font-semibold">
                                Development Services for Web
                            </h2>
                            <p className="text-sm font-light rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                                Providing high-quality web development solutions.
                            </p>
                        </div>

                        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] w-full">
                            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                            <EvervaultCard text="Mobile" />

                            <h2 className="dark:text-white text-black mt-4 text-lg font-semibold">
                                Development Services for Mobile Apps
                            </h2>
                            <p className="text-sm font-light rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                                Crafting innovative mobile applications.
                            </p>
                        </div>

                        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] w-full">
                            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                            <EvervaultCard text="Desktop" />

                            <h2 className="dark:text-white text-black mt-4 text-lg font-semibold">
                                Development Services for Desktop Applications
                            </h2>
                            <p className="text-sm font-light rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                                Building powerful desktop applications.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}