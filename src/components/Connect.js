"use client"
import React, { useState } from 'react';

export default function Connect() {
    const [selectedTags, setSelectedTags] = useState([]);
    const requirements = ["Web Development", "API Integration", "Admin Panel", "Authentication"];

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="w-full connect-container bg-black py-10 overflow-hidden text-white">
            <h1 className="text-4xl md:text-6xl lg:text-[137px] font-extrabold uppercase tracking-wider text-center vertical-fade-text leading-none mb-10">
                Let's connect
            </h1>

            <div className="container mx-auto px-4">
                <div className="row d-flex flex-column-reverse flex-lg-row ">
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <div className="bg-[#111] rounded-xl p-6 shadow-lg border-1 border-[#313131]">
                            <h1 className="text-xl font-semibold mb-4">Connect with me</h1>

                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="text-[#c2c2c2] text-sm">First name *</label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 border-[#4d4d4d] mt-1"
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="text-[#c2c2c2] text-sm">Last name</label>
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 border-[#4d4d4d] mt-1"
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="text-[#c2c2c2] text-sm">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 border-[#4d4d4d] mt-1"
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="text-[#c2c2c2] text-sm">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="📞 Phone"
                                        className="form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 border-[#4d4d4d] mt-1"
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="text-[#c2c2c2] text-sm mb-1">Your Requirement</label>
                                <div className="flex flex-wrap gap-2">
                                    {requirements.map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => toggleTag(item)}
                                            className={`px-4 py-2 text-sm rounded-lg border-1 ${selectedTags.includes(item)
                                                ? "bg-[#1a1a1a] border-blue-500"
                                                : "bg-[#1a1a1a] border-[#4d4d4d] hover:bg-[#2c2c2c]"
                                                } transition`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="text-[#c2c2c2] text-sm mb-1">How can I help?</label>
                                <textarea
                                    placeholder="Feel free to outline your ideas or needs..."
                                    rows="4"
                                    className="form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 border-[#4d4d4d] mt-1"
                                />
                            </div>

                            <div>
                                <button className="w-full py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center rounded-xl p-6 shadow-lg border-1 border-[#313131]">
                        <div className="w-full max-w-[600px] aspect-video rounded-lg overflow-hidden">
                            <iframe
                                src="https://my.spline.design/animatedshapeblend-be2af8e55f4eb519febb9cf26c6ff2a8/"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                style={{ width: "100%", height: "100%", border: "none" }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
