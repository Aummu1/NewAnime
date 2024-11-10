'use client'
import React from "react";
import Image from "next/image";
import Link from 'next/link';

function Nav() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    };
    return (
        <header className="mb-2 px-4 shadow ">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/" className="flex items-center text-2xl font-black">
                    <span className="mr-2 text-3xl text-blue-600">
                        <Image src="/image/torii-gate.png" alt="" width={50} height={50} />
                    </span>
                    <span>Aummu</span>
                </Link>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className="cursor-pointer">
                            <Link href="#ABOUT_US" className="text-gray-600 hover:text-blue-600">ABOUT US</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="#Best" className="text-gray-600 hover:text-blue-600">BEST</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="#BLOG" className="text-gray-600 hover:text-blue-600">BLOG</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="#DID_YOU_KNOW" className="text-gray-600 hover:text-blue-600">DID YOU KNOW</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="#ABOUT_ME" className="text-gray-600 hover:text-blue-600">ABOUT ME</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="#Workings" className="text-gray-600 hover:text-blue-600">WORKINGS</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="#CONTACT" className="text-gray-600 hover:text-blue-600">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav