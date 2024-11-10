"use client"

import Image from "next/image";
import React, { useState, useRef } from "react";

function AboutMe() {

    return (
        <div id="ABOUT ME" className="flex justify-center items-center">
            <div className="m-10 max-w-sm">
                <div className="rounded-lg border bg-black px-4 pt-8 pb-10 shadow-lg">
                    <div className="relative mx-auto w-36 rounded-full">
                        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                        <Image className="mx-auto h-auto w-full rounded-full" src="/image/pf.png" alt="" width={300} height={200} />
                    </div>
                    <h1 className="my-1 text-center text-xl font-black leading-8 text-gray-700 font-mono">Aummu</h1>
                    <h3 className="font-lg text-semibold font-black text-center leading-6 text-gray-700 font-mono">Website Developer</h3>
                    <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">In this blog, I hope to share my experiences and thoughts about anime. along with discovering new stories together. If you want to get to know me Click here and join us on this journey together!</p>
                    <div className="flex justify-center">
                        <button className="button mt-5" onClick={() => window.open("https://exsinnot.com/Aummu/", "_blank")}>
                            <span className="text">View All</span>
                            <div className="liquid">
                                <div className="bubble"></div>
                                <div className="bubble"></div>
                                <div className="bubble"></div>
                                <div className="bubble"></div>
                                <div className="bubble"></div>
                                <div className="bubble"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            <div className="flex justify-center flex-col sm:flex sm:overflow-hidden">
                {/* Card 1 */}
                <div className="relative w-72 rounded-xl bg-red-600 p-4 shadow-lg m-10 hidden sm:block">
                    <div className="absolute -left-1 top-0 -z-10 h-5 w-5 skew-x-[28deg] bg-red-600"></div>
                    <p className="text-white">
                        <span className="text-lg font-bold text-white"> “ </span>
                        There is no curse as twisted as love.
                        <span className="text-lg font-bold text-white"> ” </span>
                    </p>
                    <div className="mt-4 flex items-center">
                        <a href="#" className="relative block">
                            <Image alt="" src="/image/gojo.jpg" className="mx-auto h-10 w-10 rounded-full object-cover" width={300} height={200} />
                        </a>
                        <div className="ml-2 flex flex-col justify-between">
                            <span className="text-sm font-semibold text-white"> Gojo Satoru </span>
                            <span className="flex items-center text-xs text-white"> Jujutsu Kaisen </span>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative w-72 rounded-xl bg-red-600 p-4 shadow-lg m-10 hidden sm:block">
                    <div className="absolute -left-1 top-0 -z-10 h-5 w-5 skew-x-[28deg] bg-red-600"></div>
                    <p className="text-white">
                        <span className="text-lg font-bold text-white"> “ </span>
                        All humans can fight. It depends on whether you choose to fight or not.
                        <span className="text-lg font-bold text-white"> ” </span>
                    </p>
                    <div className="mt-4 flex items-center">
                        <a href="#" className="relative block">
                            <Image alt="" src="/image/kirito.jpg" className="mx-auto h-10 w-10 rounded-full object-cover" width={300} height={200} />
                        </a>
                        <div className="ml-2 flex flex-col justify-between">
                            <span className="text-sm font-semibold text-white"> Kirigaya Kazuto </span>
                            <span className="flex items-center text-xs text-white"> Sword Art Online </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe