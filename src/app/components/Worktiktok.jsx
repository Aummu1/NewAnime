"use client"

import Image from "next/image";
import React, { useState, useRef } from "react";

function Worktiktok() {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
                <div className="mb-4 md:mr-6 md:mb-0">
                    <Image className="h-56 rounded-lg object-cover md:w-56" src="/image/lucifer.jpeg" alt="" width={5000} height={5000} />
                </div>
                <div className="">
                    <p className="text-xl font-medium text-gray-700">Aum.m</p>
                    <p className="mb-4 text-sm font-medium text-gray-500">@_xa.aumxx_</p>
                    <div className="flex space-x-2">
                        <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                            <p className="text-sm font-medium text-gray-500">Followers</p>
                            <p className="text-3xl font-medium text-gray-600">67.6K</p>
                        </div>
                        <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                            <p className="text-sm font-medium text-gray-500">Like</p>
                            <p className="text-3xl font-medium text-gray-600">1.9M</p>
                        </div>
                        <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                            <p className="text-sm font-medium text-gray-500">Vedio</p>
                            <p className="text-3xl font-medium text-gray-600">292</p>
                        </div>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex space-x-2">
                        <ul className="example-2">
                            <li className="icon-content">
                                <a data-social="instagram" aria-label="Tiktok" href="https://www.tiktok.com/@_xa.aumxx_">
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 48 48"
                                        fill="currentColor"
                                    >
                                        <path d="M33.5 4H27v24.5c0 3.6-2.9 6.5-6.5 6.5-2 0-3.8-.9-5-2.3-1-1.2-1.5-2.7-1.5-4.2 0-3.6 2.9-6.5 6.5-6.5.7 0 1.3.1 2 .3v-5.8c-.6-.1-1.3-.2-2-.2-6.9 0-12.5 5.6-12.5 12.5 0 3.4 1.4 6.6 3.7 8.8C14.4 39.9 17.5 41 21 41c6.9 0 12.5-5.6 12.5-12.5V14c1.3 1 2.8 1.8 4.5 2.2v-6.1c-1.4-.2-2.7-.7-4-1.4z" />
                                    </svg>
                                </a>
                                <div className="tooltip">Tiktok</div>
                            </li>
                        </ul>

                        <button
                            onClick={() => window.open("https://www.tiktok.com/@_xa.aumxx_", "_blank")}
                            className="w-full rounded-lg border-2 border-transparent px-4 py-2 font-medium text-white"
                            style={{
                                background: "linear-gradient(45deg, #405de6, #5b51db, #b33ab4, #c135b4, #e1306c, #fd1f1f)",
                            }}
                        >
                            Follow
                        </button>

                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center sm:flex-row">
                <div className="tiktok-embed-container mr-5">
                    <iframe
                        src="https://www.tiktok.com/embed/7088523279765474587"  // ใส่คลิป ID ที่ได้จากการ Copy Link
                        width="320"
                        height="575"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="TikTok video"
                    ></iframe>
                </div>

                <div className="tiktok-embed-container mr-5">
                    <iframe
                        src="https://www.tiktok.com/embed/7113068244990299419"  // ใส่คลิป ID ที่ได้จากการ Copy Link
                        width="320"
                        height="575"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="TikTok video"
                    ></iframe>
                </div>

                <div className="tiktok-embed-container">
                    <iframe
                        src="https://www.tiktok.com/embed/7065851622961761563"  // ใส่คลิป ID ที่ได้จากการ Copy Link
                        width="320"
                        height="575"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="TikTok video"
                    ></iframe>
                </div>
            </div>

            <div className="flex flex-col justify-center sm:flex-row mt-5">
                <div className="tiktok-embed-container mr-5">
                    <iframe
                        src="https://www.tiktok.com/embed/7072607147695066394"  // ใส่คลิป ID ที่ได้จากการ Copy Link
                        width="320"
                        height="575"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="TikTok video"
                    ></iframe>
                </div>

                <div className="tiktok-embed-container mr-5">
                    <iframe
                        src="https://www.tiktok.com/embed/7187247468621335835"  // ใส่คลิป ID ที่ได้จากการ Copy Link
                        width="320"
                        height="575"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="TikTok video"
                    ></iframe>
                </div>

                <div className="tiktok-embed-container">
                    <iframe
                        src="https://www.tiktok.com/embed/7171251608381115675"  // ใส่คลิป ID ที่ได้จากการ Copy Link
                        width="320"
                        height="575"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="TikTok video"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Worktiktok