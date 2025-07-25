import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="text-white pt-10 pb-4 border-t border-gray-700 footer-bg">
                {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[200px] rounded-full blur-3xl opacity-70 z-0"
                    style={{ background: 'radial-gradient(circle at center, #0B3B63 0%, transparent 70%)' }}>
                </div> */}
                <div className="container mx-auto px-4">
                    <div className="row text-center text-md-start">
                        <div className="col-md-3 mb-4 md:mb-0 flex justify-center md:justify-start">
                            <div className="logo text-6xl rotate">M</div>
                        </div>

                        <div className="col-md-3 mb-4 md:mb-0">
                            <h5 className="fw-bold mb-3">Navigation</h5>
                            <ul className="list-unstyled space-y-2">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">About Me</a></li>
                                <li><a href="#" className="hover:underline">Designs</a></li>
                                <li><a href="#" className="hover:underline">Services</a></li>
                                <li><a href="#" className="hover:underline">Portfolio</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-4 md:mb-0">
                            <h5 className="fw-bold mb-3">Portfolio</h5>
                            <ul className="list-unstyled space-y-2">
                                <li><a href="#" className="hover:underline">Websites</a></li>
                                <li><a href="#" className="hover:underline">Graphics</a></li>
                                <li><a href="#" className="hover:underline">Videos</a></li>
                                <li><a href="#" className="hover:underline">3D</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5 className="fw-bold mb-3">Contact</h5>
                            <ul className="list-unstyled space-y-2">
                                <li><i className="bi bi-envelope-fill"></i> mihirdomadiya5@gmail.com</li>
                            </ul>
                            <div className="flex gap-3 mt-3 justify-center md:justify-start">
                                <a href="https://www.linkedin.com/in/mihirdomadiya/" target="_blank"><i className="bi bi-linkedin text-xl hover:text-gray-400"></i></a>
                                <a href="https://github.com/MihirDomadiya" target="_blank"><i className="bi bi-github text-xl hover:text-gray-400"></i></a>
                                <a href="https://www.instagram.com/__.mihir.__.007/" target="_blank"><i className="bi bi-instagram text-xl hover:text-gray-400"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
                        © 2025 Mihir. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}
