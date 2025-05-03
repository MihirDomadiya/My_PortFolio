import React from "react";
import "../../public/assets/css/style.css";
import Image from "next/image";

export default function Header() {
    return (
        <div
            className="col-md-7 col-12 bg-transparent mt-3 nav-container"
        >
            <div className="inner-nav  text-white ">

                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Image
                            src="/assets/images/mihir.png"
                            alt="Devansh"
                            width={40}
                            height={40}
                            className="rounded-circle me-2"
                        />
                        <h5 className="mb-0 fw-bold">Mihir</h5>
                    </div>
                    <div className="d-flex gap-4">
                        <a href="#" className="text-white nav-item text-decoration-none">
                            Home
                        </a>
                        <a href="#" className="text-white nav-item text-decoration-none">
                            About Me
                        </a>
                        <a href="#" className="text-white nav-item text-decoration-none">
                            Designs
                        </a>
                        <a href="#" className="text-white nav-item text-decoration-none">
                            Services
                        </a>
                        <a href="#" className="text-white nav-item text-decoration-none">
                            Portfolio
                        </a>
                        <a href="#" className="text-white nav-item text-decoration-none">
                            Blog
                        </a>
                    </div>
                    <button className="btn text-white rounded-pill btn-connect px-4 py-2">
                        Let's Connect
                    </button>
                </div>
            </div>
        </div>
    );
}
