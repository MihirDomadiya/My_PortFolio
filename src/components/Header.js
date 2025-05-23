'use client'

import React, { useState } from "react";
import "../../public/assets/css/style.css";
import Image from "next/image";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false); // Close menu after clicking
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
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
                <i onClick={toggleMobileMenu} className="bi d-lg-none d-block bi-list text-white text-[30px] absolute top-[3px] right-[5%] cursor-pointer"></i>
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
                <button onClick={() => scrollToSection('connect')} className="btn text-white rounded-pill btn-connect text-[11px] h-[30px]">
                    Let's Connect
                </button>
                <i onClick={toggleMobileMenu} className="bi d-lg-none d-block bi-list text-white text-[30px] absolute top-[3px] right-[2%] cursor-pointer"></i>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <i className="bi bi-x-lg text-[30px]"></i>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center gap-8 text-center">
                        <a onClick={() => scrollToSection('home')} className="text-white text-2xl font-medium hover:text-blue-400 transition-colors cursor-pointer">
                            Home
                        </a>
                        <a onClick={() => scrollToSection('about')} className="text-white text-2xl font-medium hover:text-blue-400 transition-colors cursor-pointer">
                            About Me
                        </a>
                        <a onClick={() => scrollToSection('journey')} className="text-white text-2xl font-medium hover:text-blue-400 transition-colors cursor-pointer">
                            Journey
                        </a>
                        <a onClick={() => scrollToSection('skills')} className="text-white text-2xl font-medium hover:text-blue-400 transition-colors cursor-pointer">
                            Skills
                        </a>
                        <button onClick={() => scrollToSection('connect')} className="btn text-white rounded-pill btn-connect px-6 py-3 mt-4 text-lg">
                            Let's Connect
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
