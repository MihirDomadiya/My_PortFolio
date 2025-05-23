"use client"
import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        text: "Mihir transformed our outdated website into a modern, responsive platform that perfectly represents our brand. His attention to detail and technical expertise exceeded our expectations.",
        rating: 5
    },
    {
        id: 2,
        name: "David Chen",
        role: "Founder, DesignHub",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        text: "Working with Mihir was a game-changer for our startup. He built our entire web application from scratch, implementing complex features while maintaining excellent performance.",
        rating: 5
    },
    {
        id: 3,
        name: "Priya Patel",
        role: "Marketing Director, GrowthLabs",
        image: "https://randomuser.me/api/portraits/women/63.jpg",
        text: "Mihir's full-stack expertise helped us create a seamless e-commerce platform. His ability to solve complex problems and deliver on time made our project a success.",
        rating: 4
    },
    {
        id: 4,
        name: "Alex Rodriguez",
        role: "Product Manager, InnovateCorp",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "I've worked with many developers, but Mihir stands out for his communication skills and technical knowledge. He's not just a coder but a true problem solver.",
        rating: 5
    },
    {
        id: 5,
        name: "Emma Wilson",
        role: "Freelance Designer",
        image: "https://randomuser.me/api/portraits/women/17.jpg",
        text: "Mihir helped me bring my design concepts to life with clean, efficient code. His collaborative approach made the development process smooth and enjoyable.",
        rating: 5
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Client Testimonials</h2>
                
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation buttons */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-full"
                        aria-label="Previous testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-full"
                        aria-label="Next testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                    
                    {/* Testimonial card */}
                    <div className={`bg-[#111] p-8 md:p-12 rounded-2xl shadow-lg border border-[#313131] transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="flex-shrink-0">
                                <img 
                                    src={testimonials[activeIndex].image} 
                                    alt={testimonials[activeIndex].name}
                                    className="w-24 h-24 rounded-full object-cover border-2 border-[#3f92ff]"
                                />
                            </div>
                            
                            <div className="flex-1">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                
                                <blockquote className="text-xl md:text-2xl mb-6 italic text-gray-300">
                                    "{testimonials[activeIndex].text}"
                                </blockquote>
                                
                                <div>
                                    <h4 className="text-lg font-semibold">{testimonials[activeIndex].name}</h4>
                                    <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Indicators */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (isAnimating) return;
                                    setIsAnimating(true);
                                    setActiveIndex(index);
                                    setTimeout(() => setIsAnimating(false), 500);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-[#3f92ff] w-6' : 'bg-gray-600'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}