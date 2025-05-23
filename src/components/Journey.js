"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function Journey() {
    const timelineRef = useRef(null);
    const [activeItem, setActiveItem] = useState(1);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    // Get the id from the data attribute
                    const id = entry.target.getAttribute('data-id');
                    if (id) setActiveItem(parseInt(id));
                }
            });
        }, { threshold: 0.3 });

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            observer.observe(item);
        });

        // Ensure first item is visible on load
        const firstItem = document.querySelector('.timeline-item[data-id="1"]');
        if (firstItem) {
            firstItem.classList.add('animate-fade-in');
        }

        // Line animation
        const timelineLine = document.querySelector('.timeline-line');
        if (timelineLine) {
            timelineLine.classList.add('animate-line');
        }

        return () => {
            timelineItems.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div id="journey" className="journey-container py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-[#0a0a0a]">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">My Tech Journey</h2>
                <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Exploring the path that shaped my development career and technical expertise</p>

                <div className="timeline relative" ref={timelineRef}>
                    {/* Timeline line with enhanced glow effect */}
                    <div className="timeline-line absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-purple-500 transform md:translate-x-[-50%] z-0 shadow-[0_0_20px_rgba(63,146,255,0.7)]"></div>

                    {/* BCA */}
                    <div data-id="1" className="timeline-item mb-16 md:mb-24 relative flex flex-col md:flex-row transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 hidden md:block">
                            <div className={`bg-[#0d0d0d] p-6 rounded-xl border ${activeItem === 1 ? 'border-blue-400 shadow-[0_0_15px_rgba(63,146,255,0.5)]' : 'border-[#313131]'} shadow-lg transition-all duration-300 hover:border-blue-400 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(63,146,255,0.4)]`}>
                                <div className="flex items-center justify-end mb-3">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">2018 - 2021</span>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-400 mb-2">Bachelor of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Bhagwan Mahavir University</p>
                                <p className="text-gray-400">Completed my undergraduate degree in Computer Applications, focusing on programming fundamentals, data structures, and web technologies.</p>
                            </div>
                        </div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 z-10 border-4 border-black">
                                <i className="fas fa-graduation-cap text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:hidden">
                            <div className={`bg-[#0d0d0d] p-6 rounded-xl border ${activeItem === 1 ? 'border-blue-400 shadow-[0_0_15px_rgba(63,146,255,0.5)]' : 'border-[#313131]'} shadow-lg transition-all duration-300`}>
                                <div className="flex items-center mb-3">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">2018 - 2021</span>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-400 mb-2">Bachelor of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Bhagwan Mahavir University</p>
                                <p className="text-gray-400">Completed my undergraduate degree in Computer Applications, focusing on programming fundamentals, data structures, and web technologies.</p>
                            </div>
                        </div>
                    </div>

                    {/* Jr. Backend Developer */}
                    <div data-id="2" className="timeline-item mb-16 md:mb-24 relative flex flex-col md:flex-row transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 z-10 border-4 border-black">
                                <i className="fas fa-code text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-2 md:order-3">
                            <div className={`bg-[#0d0d0d] p-6 rounded-xl border ${activeItem === 2 ? 'border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)]' : 'border-[#313131]'} shadow-lg transition-all duration-300 hover:border-green-400 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]`}>
                                <div className="flex items-center mb-3">
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Sep 2023 - Mar 2024</span>
                                </div>
                                <h3 className="text-2xl font-bold text-green-400 mb-2">Jr. Backend Developer</h3>
                                <p className="text-gray-300 mb-2">Tatvam Technologies</p>
                                <p className="text-gray-400">Developed and maintained RESTful APIs, implemented database solutions, and collaborated with frontend teams to deliver complete web applications.</p>
                                <div className="flex mt-3 gap-2 flex-wrap">
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Node.js</span>
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Express</span>
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MCA */}
                    <div data-id="3" className="timeline-item mb-16 md:mb-24 relative flex flex-col md:flex-row transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 hidden md:block">
                            <div className={`bg-[#0d0d0d] p-6 rounded-xl border ${activeItem === 3 ? 'border-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.5)]' : 'border-[#313131]'} shadow-lg transition-all duration-300 hover:border-purple-400 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]`}>
                                <div className="flex items-center justify-end mb-3">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">2023 - 2026</span>
                                </div>
                                <h3 className="text-2xl font-bold text-purple-400 mb-2">Master of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Jain University</p>
                                <p className="text-gray-400">Pursuing advanced studies in software development, cloud computing, and AI/ML technologies to expand my technical expertise.</p>
                                <div className="flex justify-end mt-3 gap-2 flex-wrap">
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Advanced Algorithms</span>
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Cloud Computing</span>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 z-10 border-4 border-black">
                                <i className="fas fa-university text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:hidden">
                            <div className={`bg-[#0d0d0d] p-6 rounded-xl border ${activeItem === 3 ? 'border-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.5)]' : 'border-[#313131]'} shadow-lg transition-all duration-300`}>
                                <div className="flex items-center mb-3">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">2023 - 2026</span>
                                </div>
                                <h3 className="text-2xl font-bold text-purple-400 mb-2">Master of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Jain University</p>
                                <p className="text-gray-400">Pursuing advanced studies in software development, cloud computing, and AI/ML technologies to expand my technical expertise.</p>
                                <div className="flex mt-3 gap-2 flex-wrap">
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Advanced Algorithms</span>
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Cloud Computing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fullstack Developer */}
                    <div data-id="4" className="timeline-item relative flex flex-col md:flex-row transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 z-10 border-4 border-black">
                                <i className="fas fa-laptop-code text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-2 md:order-3">
                            <div className={`bg-[#0d0d0d] p-6 rounded-xl border ${activeItem === 4 ? 'border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.5)]' : 'border-[#313131]'} shadow-lg transition-all duration-300 hover:border-red-400 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(248,113,113,0.4)]`}>
                                <div className="flex items-center mb-3">
                                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Sep 2024 - Present</span>
                                </div>
                                <h3 className="text-2xl font-bold text-red-400 mb-2">Fullstack Developer</h3>
                                <p className="text-gray-300 mb-2">Rain Infotech</p>
                                <p className="text-gray-400">Building end-to-end web applications, implementing responsive designs, and optimizing performance for enterprise-level solutions.</p>
                                <div className="flex mt-3 gap-2 flex-wrap">
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">React</span>
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Next.js</span>
                                    <span className="px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded text-xs">Node.js</span>
                                </div>
                                <div className="mt-4 inline-block px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-sm border border-green-800 animate-pulse">
                                    Current
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
