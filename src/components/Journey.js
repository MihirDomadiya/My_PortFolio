"use client"
import React, { useEffect, useRef } from 'react'

export default function Journey() {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            observer.observe(item);
        });

        // Line animation
        const timelineLine = document.querySelector('.timeline-line');
        if (timelineLine) {
            const lineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        timelineLine.classList.add('animate-line');
                    }
                });
            }, { threshold: 0.1 });

            lineObserver.observe(timelineLine);
        }

        return () => {
            timelineItems.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className="journey-container py-20 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">My Tech Journey</h2>

                <div className="timeline relative" ref={timelineRef}>
                    {/* Timeline line */}
                    <div className="timeline-line absolute left-4 md:left-1/2 h-full w-0.5 bg-white transform md:translate-x-[-50%] z-0"></div>

                    {/* BCA */}
                    <div className="timeline-item mb-16 md:mb-24 relative flex flex-col md:flex-row opacity-0 transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 hidden md:block">
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#313131] shadow-lg transition">
                                <h3 className="text-2xl font-bold text-blue-400 mb-2">Bachelor of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Bhagwan Mahavir University</p>
                                <p className="text-gray-400">Completed my undergraduate degree in Computer Applications</p>
                            </div>
                        </div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 z-10 border-4 border-white/20">
                                <i className="fas fa-graduation-cap text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:hidden">
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#313131] shadow-lg transition">
                                <h3 className="text-2xl font-bold text-blue-400 mb-2">Bachelor of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Bhagwan Mahavir University</p>
                                <p className="text-gray-400">Completed my undergraduate degree in Computer Applications</p>
                            </div>
                        </div>
                    </div>

                    {/* Jr. Backend Developer */}
                    <div className="timeline-item mb-16 md:mb-24 relative flex flex-col md:flex-row opacity-0 transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 z-10 border-4 border-white/20">
                                <i className="fas fa-code text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-2 md:order-3">
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#313131] shadow-lg transition">
                                <h3 className="text-2xl font-bold text-green-400 mb-2">Jr. Backend Developer</h3>
                                <p className="text-gray-300 mb-2">Tatvam Technologies</p>
                                <p className="text-gray-400">Sep 2023 - Mar 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* MCA */}
                    <div className="timeline-item mb-16 md:mb-24 relative flex flex-col md:flex-row opacity-0 transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 hidden md:block">
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#313131] shadow-lg transition">
                                <h3 className="text-2xl font-bold text-purple-400 mb-2">Master of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Jain University</p>
                                <p className="text-gray-400">Expected completion in 2026</p>
                            </div>
                        </div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 z-10 border-4 border-white/20">
                                <i className="fas fa-university text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-3 md:hidden">
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#313131] shadow-lg transition">
                                <h3 className="text-2xl font-bold text-purple-400 mb-2">Master of Computer Applications</h3>
                                <p className="text-gray-300 mb-2">Jain University</p>
                                <p className="text-gray-400">Expected completion in 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* Fullstack Developer */}
                    <div className="timeline-item relative flex flex-col md:flex-row opacity-0 transition-all duration-1000 translate-y-10">
                        <div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
                        <div className="timeline-badge absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 z-10 border-4 border-white/20">
                                <i className="fas fa-laptop-code text-white"></i>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 order-2 md:order-3">
                            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#313131] shadow-lg transition">
                                <h3 className="text-2xl font-bold text-red-400 mb-2">Fullstack Developer</h3>
                                <p className="text-gray-300 mb-2">Rain Infotech</p>
                                <p className="text-gray-400">Sep 2024 - Present</p>
                                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-sm">
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
