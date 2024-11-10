"use client"

import Image from "next/image";
import React, { useState, useRef } from "react";

function Contact() {

    return (
        <div id="CONTACT" className="flex justify-center items-center">
            <section className="contact" id="contact">
                <h2 className=" mt-10 text-xl font-black md:mt-24 md:text-4xl font-mono text-center">Contact <span>Me</span></h2>
                <form action="">
                    <div className="input-box">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="number" placeholder="Phone Number" required />
                        <input type="text" placeholder="Subject" required />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <div className="flex justify-center">
                        <button className="btn-53">
                            <div className="original">SEND MESSAGE</div>
                            <div className="letters">
                                <span>S</span>
                                <span>E</span>
                                <span>N</span>
                                <span>D</span>
                                <span className="mr-2"> </span>
                                <span>M</span>
                                <span>E</span>
                                <span>S</span>
                                <span>S</span>
                                <span>A</span>
                                <span>G</span>
                                <span>E</span>
                            </div>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact