'use client'

import React from "react";
import Image from "next/image";
import { useState, useEffect } from 'react';

function Header() {

    const [isChecked, setIsChecked] = useState(false);
    const [audio, setAudio] = useState(null);  // เริ่มต้นด้วย null

    useEffect(() => {
        if (typeof window !== "undefined") {  // ตรวจสอบให้แน่ใจว่าโค้ดทำงานในฝั่ง client
            const newAudio = new Audio('/audio/Woke Up In Tokyo (RUKA & ASA).mp3');
            setAudio(newAudio);  // กำหนด audio เมื่อทำงานใน client
        }
    }, []);

    const handleChange = () => {
        setIsChecked(!isChecked);
        if (audio) {
            if (!isChecked) {
                audio.play();  // เล่นเสียงเมื่อเลือก checkbox
            } else {
                audio.pause();  // หยุดเสียงเมื่อยกเลิก checkbox
            }
        }
    };

    return (
        <div className="w-screen ml-4">
            <div className="relative mx-auto flex justify-center flex-col sm:max-w-xl md:max-w-screen-xl md:flex-row">
                <div className="my-auto mx-auto mt-5 w-full max-w-xl md:mt-8 lg:max-w-screen-xl">
                    <div className="mb-10 lg:mb-0 lg:max-w-lg">
                        <div className="mb-6 max-w-xl">
                            <p className="mb-6 max-w-lg text-lg font-bold tracking-tight text-white-700 sm:text-2xl sm:leading-snug">
                                いらっしゃいませ
                            </p>
                            <p className="inline-block font-bold text-white-600 text-6xl font-mono mb-3">Welcome</p>
                            <p className="inline-block font-bold text-white-600 text-lg font-mono">The world of anime is waiting for you! Come and discover a thrilling new world!</p>
                        </div>

                        {/* --------------------------------- */}
                        {/* <div className="card flex justify-center">
                            <input
                                className="input"
                                type="checkbox"
                                aria-label="audio-command"
                                name="audio-command"
                                id="audio-command"
                                checked={isChecked}
                                onChange={handleChange}
                            />
                            <div className="inner-card">
                                <div className="trigger-wrap">
                                    <label className="trigger" htmlFor="audio-command"> </label>

                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mic"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        stroke="currentColor"
                                        fill="none"
                                    >
                                        <path
                                            d="m19.5,10.89c0,4.44-3.36,8.04-7.5,8.04s-7.5-3.6-7.5-8.04"
                                        ></path>
                                        <line x1="12" y1="22.42" x2="12" y2="18.93"></line>
                                        <rect
                                            x="8.38"
                                            y="1.81"
                                            width="7.23"
                                            height="13.25"
                                            rx="3.62"
                                            ry="3.62"
                                        ></rect>
                                    </svg>

                                    <div className="spectrum">
                                        {[...Array(45).keys()].map(index => (
                                            <b key={index} style={{ '--index': index }}></b>
                                        ))}
                                    </div>
                                </div>

                                <div className="content">
                                    <span>かわいらしいので注意してください。</span>
                                </div>
                            </div>
                        </div> */}

                        <div className="book relative   ">
                            <p className="mb-2 max-w-lg text-lg font-bold font-mono tracking-tight text-white-700 sm:text-2xl sm:leading-snug absolute bottom-0">
                                " Kon🦊 "
                            </p>
                            <div className="cover relative">
                                <p className="mb-2 max-w-lg text-lg font-bold font-mono tracking-tight text-white-700 sm:text-2xl sm:leading-snug absolute bottom-0">
                                    Hover Me!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end lg:px-2">
                    <div className="my-auto mb-20 hidden w-72 flex-col space-y-3 md:mt-2 lg:flex">
                        <div className="rounded-xl pt-10">
                            <Image className="rounded-xl object-contain" src="/image/header/3.png" alt="" width={1000} height={20} />
                        </div>
                    </div>
                    <div className="my-auto flex space-x-3 lg:mt-12 md:mt-20 sm:mt-2 md:w-60 md:flex-col md:space-y-3 md:space-x-0 md:px-4">
                        <div className="h-44 overflow-hidden">
                            <Image className="mx-auto rounded-xl h-full w-full object-cover" src="/image/header/marin.jpg" alt="" width={5000} height={5000} />
                        </div>
                        <div className="h-44 overflow-hidden">
                            <Image className="mx-auto rounded-xl h-full w-full object-cover" src="/image/header/aria.jpg" alt="" width={5000} height={5000} />
                        </div>
                        <div className="h-44 overflow-hidden">
                            <Image className="mx-auto rounded-xl h-full w-full object-cover" src="/image/header/shikimori.jpeg" alt="" width={5000} height={5000} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header