"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 I'm Mihir's virtual assistant. How can I help you today?", sender: 'bot', time: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto responses based on keywords
    const autoResponses = [
        { keywords: ['hello', 'hi', 'hey'], response: "Hello! How can I assist you with your project today?" },
        { keywords: ['services', 'offer', 'provide'], response: "I offer full-stack development services including web applications, APIs, and responsive design. Would you like to know more about a specific service?" },
        { keywords: ['price', 'cost', 'pricing', 'quote'], response: "Pricing depends on project requirements. Would you like to discuss your project so I can provide a custom quote?" },
        { keywords: ['contact', 'email', 'reach'], response: "You can reach me at mihirdomadiya5@gmail.com or fill out the contact form on this page. Would you prefer I contact you?" },
        { keywords: ['portfolio', 'work', 'projects'], response: "My portfolio includes various web applications and websites. Is there a specific type of project you're interested in seeing?" },
        { keywords: ['experience', 'background'], response: "I have experience in full-stack development with React, Node.js, and various other technologies. Any specific skill you'd like to know about?" },
        { keywords: ['thanks', 'thank you'], response: "You're welcome! Feel free to ask if you have any other questions." }
    ];

    // Scroll to bottom of messages
    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [isOpen, messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = { 
            id: messages.length + 1, 
            text: inputValue, 
            sender: 'user', 
            time: new Date() 
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        
        // Show typing indicator
        setIsTyping(true);
        
        // Generate response after a delay
        setTimeout(() => {
            setIsTyping(false);
            
            // Check for keyword matches
            const userText = inputValue.toLowerCase();
            let foundResponse = false;
            
            for (const item of autoResponses) {
                if (item.keywords.some(keyword => userText.includes(keyword))) {
                    const botMessage = {
                        id: messages.length + 2,
                        text: item.response,
                        sender: 'bot',
                        time: new Date()
                    };
                    setMessages(prev => [...prev, botMessage]);
                    foundResponse = true;
                    break;
                }
            }
            
            // Default response if no keywords matched
            if (!foundResponse) {
                const defaultResponse = {
                    id: messages.length + 2,
                    text: "Thanks for your message! I'll get back to you soon. If you'd like an immediate response, please try asking about my services, experience, or contact information.",
                    sender: 'bot',
                    time: new Date()
                };
                setMessages(prev => [...prev, defaultResponse]);
            }
        }, 1500);
    };

    // Format time for display
    const formatTime = (date) => {
        // Use a format that will be consistent between server and client
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false // Use 24-hour format to avoid AM/PM differences
        });
    };

    return (
        <>
            {/* Chat toggle button */}
            <button 
                onClick={toggleChat}
                className="fixed bottom-6 right-6 z-50 bg-[#3f92ff] hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center w-12 h-12"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>
            
            {/* Chat window */}
            <div className={`fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#111] rounded-xl shadow-2xl border border-[#313131] transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                {/* Chat header */}
                <div className="bg-[#1a1a1a] p-4 rounded-t-xl border-b border-[#313131] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#3f92ff] flex items-center justify-center text-white font-bold">M</div>
                        <div className="ml-3">
                            <h3 className="text-white font-medium">Mihir's Assistant</h3>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <span className="text-xs text-gray-400">Online</span>
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={toggleChat}
                        className="text-gray-400 hover:text-white"
                        aria-label="Close chat"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                
                {/* Chat messages */}
                <div className="p-4 h-80 overflow-y-auto">
                    {messages.map(message => (
                        <div 
                            key={message.id} 
                            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-[#3f92ff] text-white rounded-tr-none' : 'bg-[#1a1a1a] text-white rounded-tl-none'}`}>
                                <p>{message.text}</p>
                                <span className={`text-xs mt-1 block ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                                    {formatTime(message.time)}
                                </span>
                            </div>
                        </div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                        <div className="flex justify-start mb-4">
                            <div className="bg-[#1a1a1a] p-3 rounded-lg rounded-tl-none">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                </div>
                
                {/* Chat input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-[#313131]">
                    <div className="flex">
                        <input
                            type="text"
                            ref={inputRef}
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="flex-1 bg-[#1a1a1a] text-white border border-[#313131] rounded-l-lg px-4 py-2 focus:outline-none focus:border-[#3f92ff]"
                        />
                        <button 
                            type="submit"
                            className="bg-[#3f92ff] hover:bg-blue-600 text-white px-4 rounded-r-lg transition-colors"
                            disabled={!inputValue.trim()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
