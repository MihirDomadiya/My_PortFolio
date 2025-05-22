"use client"
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function Connect() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const requirements = ["Web Development", "API Integration", "Admin Panel", "Authentication"];

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
        );
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    
    const validate = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validate()) return;
        
        setIsSubmitting(true);
        
        try {
            // Prepare data for submission
            const submissionData = {
                ...formData,
                requirements: selectedTags.join(', '),
                date: new Date().toISOString()
            };
            
            // Send data to API route
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });
            
            if (response.ok) {
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setSelectedTags([]);
                
                // Show success toast
                toast.success('Message sent successfully!', {
                    style: {
                        background: '#111',
                        color: '#fff',
                        border: '1px solid #313131'
                    },
                    iconTheme: {
                        primary: '#3f92ff',
                        secondary: '#111'
                    }
                });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again.', {
                style: {
                    background: '#111',
                    color: '#fff',
                    border: '1px solid #313131'
                }
            });
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="connect" className="w-full connect-container bg-black py-10 overflow-hidden text-white">
            <Toaster position="top-right" />
            <h1 className="text-[137px] font-extrabold uppercase tracking-wider text-center vertical-fade-text-2 leading-none mb-10">
                Let's connect
            </h1>
            <div className="container mx-auto px-4">
                <div className="row d-flex flex-column-reverse flex-lg-row ">
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <div className="bg-[#111] rounded-xl p-6 shadow-lg border-1 border-[#313131]">
                            <h1 className="text-xl font-semibold mb-4">Connect with me</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <label className="text-[#c2c2c2] text-sm">First name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First name"
                                            className={`form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 ${errors.firstName ? 'border-red-500' : 'border-[#4d4d4d]'} mt-1`}
                                        />
                                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                    </div>
                                    <div className="col-6">
                                        <label className="text-[#c2c2c2] text-sm">Last name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className={`form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 ${errors.email ? 'border-red-500' : 'border-[#4d4d4d]'} mt-1`}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div className="col-6">
                                        <label className="text-[#c2c2c2] text-sm">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
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
                                    <label className="text-[#c2c2c2] text-sm mb-1">How can I help? *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Feel free to outline your ideas or needs..."
                                        rows="4"
                                        className={`form-control bg-[#202020] text-white placeholder-[#6e6e6e] border-1 ${errors.message ? 'border-red-500' : 'border-[#4d4d4d]'} mt-1`}
                                    />
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>
                                <div>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition disabled:opacity-70"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
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
