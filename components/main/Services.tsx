"use client";
import React from "react";

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
        <section className="py-32 min-h-screen w-full dark:bg-gray-950">
            <div className="md:container w-full mx-auto">
                <div className="flex flex-col  space-y-16 px-5 sm:px-16 md:px-20 lg:px-28 py-8 dark:bg-gray-950">
                    <div className="flex flex-col justify-center text-center mx-auto md:max-w-3xl max-w-full space-y-5">
                        <span className="rounded-lg bg-blue-50 dark:bg-gray-900 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white md:whitespace-nowrap whitespace-pre text-center">Custom Design & Development for Your Business</span>
                        <h1 className="text-3xl servicesh2 font-bold text-blue-950 dark:text-white md:text-5xl leading-tight">
                            Choose the Perfect Technology Solution for Your Business
                        </h1>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-2 w-full">
                        <div className="relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-xl">
                            <a
                                href="https://saasblocks.app"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="absolute inset-0"
                            >
                                <span className="sr-only">To SaaS Blocks website</span>
                            </a>
                            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 stroke-gradient gradient-fresh-mint">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-heading">
                                An awesome feature
                            </h3>
                            <p className="font-medium text-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <span className="flex space-x-2 font-medium text-cyan-400">
                                Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </span>
                        </div>
                        <div className="relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-xl">
                            <a
                                href="https://saasblocks.app"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="absolute inset-0"
                            >
                                <span className="sr-only">To SaaS Blocks website</span>
                            </a>
                            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 stroke-gradient gradient-peach">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-heading">
                                An awesome feature
                            </h3>
                            <p className="font-medium text-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <span className="flex space-x-2 font-medium text-cyan-400">
                                Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                </svg>
                            </span>
                        </div>
                        <div className="relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-xl">
                            <a
                                href="https://saasblocks.app"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="absolute inset-0"
                            >
                                <span className="sr-only">To SaaS Blocks website</span>
                            </a>
                            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 stroke-gradient gradient-sky">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-heading">
                                An awesome feature
                            </h3>
                            <p className="font-medium text-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <span className="flex space-x-2 font-medium text-cyan-400">
                                Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                        <div className="relative space-y-4 rounded-3xl py-6 px-8 hover:bg-layer-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-xl">
                            <a
                                href="https://saasblocks.app"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="absolute inset-0"
                            >
                                <span className="sr-only">To SaaS Blocks website</span>
                            </a>
                            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-muted-1 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 stroke-gradient gradient-dusk">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-heading">
                                An awesome feature
                            </h3>
                            <p className="font-medium text-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <span className="flex space-x-2 font-medium text-cyan-400">
                                Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}