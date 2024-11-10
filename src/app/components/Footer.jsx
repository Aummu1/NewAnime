"use client"

import Image from "next/image";
import React, { useState, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {

    return (
        <div id="CONTACT" className="flex justify-center items-center">
            <footer className="footer">
                <div className="social">
                    <a href="https://github.com/Aummu1"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/a.aum.mu/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100010649329546"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.tiktok.com/@_xa.aumxx_"><i className="fa-brands fa-tiktok"></i></a>
                </div>
                <ul className="list">
                    <li><a href="">FAQ</a></li>
                    <li><a href="#services">Service</a></li>
                    <li><a href="#home">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="">Privacy Policies</a></li>
                </ul>
                <p className="copyright">
                    Copyright By Aummu
                </p>
            </footer>
        </div>
    )
}

export default Footer