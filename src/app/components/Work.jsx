"use client"

import Image from "next/image";
import React, { useState, useRef } from "react";

function Work() {

    return (
        <div id="Workings" className="flex flex-col justify-center items-center">
            <div className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
                <div className="mb-4 md:mr-6 md:mb-0">
                    <Image className="h-56 rounded-lg object-cover md:w-56" src="/image/yae-youtube.jpeg" alt="" width={5000} height={5000} />
                </div>
                <div className="">
                    <p className="text-xl font-medium text-gray-700">Aum.m</p>
                    <p className="mb-4 text-sm font-medium text-gray-500">@aum.m4385</p>
                    <div className="flex space-x-2">
                        <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                            <p className="text-sm font-medium text-gray-500">Followers</p>
                            <p className="text-3xl font-medium text-gray-600">489</p>
                        </div>
                        <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                            <p className="text-sm font-medium text-gray-500">Video</p>
                            <p className="text-3xl font-medium text-gray-600">133</p>
                        </div>
                        <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                            <p className="text-sm font-medium text-gray-500">viewing</p>
                            <p className="text-3xl font-medium text-gray-600">119,429</p>
                        </div>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex space-x-2">
                        <ul className="example-2">
                            <li className="icon-content">
                                <a data-social="youtube" aria-label="Youtube" href="https://youtube.com/@aum.m4385">
                                    <div className="filled"></div>
                                    <svg
                                        xmlSpace="preserve"
                                        viewBox="0 0 16 16"
                                        className="bi bi-youtube"
                                        fill="currentColor"
                                        height="16"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                                        ></path>
                                    </svg>
                                </a>
                                <div className="tooltip">Youtube</div>
                            </li>
                        </ul>

                        <button
                            onClick={() => window.open("https://youtube.com/@aum.m4385", "_blank")}
                            className="w-full rounded-lg border-2 border-transparent bg-red-600 px-4 py-2 font-medium text-white"
                        >
                            Follow
                        </button>

                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row">
                <div className="youtube m-2">
                    <div className="video-container">
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/GBoNkkh2uBQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="youtube m-2">
                    <div className="video-container">
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/YeYGjP-q41E"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row">
                <div className="youtube m-2">
                    <div className="video-container">
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/zB_RsTsDDtE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="youtube m-2">
                    <div className="video-container">
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/RXJEYfYcj7Y"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work