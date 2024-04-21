"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header
                className="bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl fixed top-0 w-full"
                style={{ zIndex: "99" }}
            >
                <div className="container mx-auto flex flex-row flex-wrap p-3 md:py-4 justify-between items-center">
                    <Link
                        href="/"
                        className="flex title-font font-medium items-center text-slate-700 mr-4 pr-4 md:mb-0"
                    >
                        <img
                            src="/logo.png"
                            alt="NGL's Logo"
                            className="w-auto h-10 filter dark:filter-none invert"
                        />
                    </Link>
                    <nav
                        className={`lg:flex lg:flex-row flex-col gap-3 justify-end md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-sm items-center ${isMenuOpen ? "grid grid-cols-2 justify-start place-items-start place-content-start bg-gradient-to-b from-slate-950 to-[rgba(0,0,0,0.1)] p-4 h-screen" : " hidden"
                            }`}
                    >
                        <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                            <Link href="/">Home</Link>
                        </Button>
                        <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                            <Link href="/blogs">Blogs</Link>
                        </Button>
                        <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                            <Link href="/about">About</Link>
                        </Button>
                        <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                            <Link href="/career">Career</Link>
                        </Button>
                    </nav>
                    <div className="md:hidden flex justify-end items-center gap-1">
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                        <button
                            className="inline-flex w-10 h-10 justify-center items-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded lg:hidden">
                            <Sheet>
                                <SheetTrigger>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                                        />
                                    </svg>
                                </SheetTrigger>
                                <SheetContent className="py-20 grid grid-cols-1 justify-start place-items-start place-content-start bg-gradient-to-b from-slate-950 to-[rgba(0,0,0,0.1)]">
                                    <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                                        <Link href="/">Home</Link>
                                    </Button>
                                    <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                                        <Link href="/blogs">Blogs</Link>
                                    </Button>
                                    <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                                        <Link href="/about">About</Link>
                                    </Button>
                                    <Button asChild className="dark:bg-[rgba(225,225,225,0.1)] border-2 border-[rgba(225,225,225,0.1)] rounded-full dark:text-slate-50 backdrop-blur-xl dark:hover:bg-[rgba(225,225,225,0.2)] text-lg py-3 px-5md:w-auto w-full">
                                        <Link href="/career">Career</Link>
                                    </Button>
                                </SheetContent>
                            </Sheet>

                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}