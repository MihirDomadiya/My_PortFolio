'use client'

import React from "react";
import "../../public/assets/css/style.css";
import Image from "next/image";

export default function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="relative d-sm-block d-none">
                <div className="col-xl-7 col-9 bg-transparent mt-3 nav-container">
                    <div className="inner-nav text-white">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <Image
                                    src="/assets/images/mihir.png"
                                    alt="Mihir"
                                    width={40}
                                    height={40}
                                    className="rounded-circle me-2"
                                />
                                <h5 className="mb-0 fw-bold">Mihir</h5>
                            </div>
                            <div className="mb-1 gap-4 d-lg-flex d-none">
                                <a onClick={() => scrollToSection('home')} className="text-white nav-item text-decoration-none cursor-pointer">
                                    Home
                                </a>
                                <a onClick={() => scrollToSection('about')} className="text-white nav-item text-decoration-none cursor-pointer">
                                    About Me
                                </a>
                                <a onClick={() => scrollToSection('journey')} className="text-white nav-item text-decoration-none cursor-pointer">
                                    Journey
                                </a>
                                <a onClick={() => scrollToSection('skills')} className="text-white nav-item text-decoration-none cursor-pointer">
                                    Skills
                                </a>
                            </div>
                            <button onClick={() => scrollToSection('connect')} className="btn text-white rounded-pill btn-connect px-4 py-2">
                                Let's Connect
                            </button>
                        </div>
                    </div>
                </div>
                <i className="bi d-lg-none d-block bi-list text-white text-[30px] absolute top-[3px] right-[5%]"></i>
            </div>

            <div className="col-12 border-b-[1px] border-[#1c1c1c] pr-14 py-2 pl-3 justify-between align-items-center d-sm-none d-flex">
                <div className="d-flex align-items-center">
                    <Image
                        src="/assets/images/mihir.png"
                        alt="Mihir"
                        width={35}
                        height={35}
                        className="rounded-circle me-2"
                    />
                    <h5 className="mb-0 fw-bold text-white">Mihir</h5>
                </div>
                <button className="btn text-white rounded-pill btn-connect text-[11px] h-[30px]">
                    Let's Connect
                </button>
                <i className="bi d-lg-none d-block bi-list text-white text-[30px] absolute top-[3px] right-[2%]"></i>

            </div>
        </>
    );
}
