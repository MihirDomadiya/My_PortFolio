import React from "react";
import "../../public/assets/css/style.css";
import Image from "next/image";

export default function Header() {
  return (
    <div
      className="bg-dark text-white py-3 px-4"
      style={{
        borderRadius: "50px",
        margin: "20px auto",
        maxWidth: "1200px",
        background: "linear-gradient(to right, #071e3d, #1f4287)",
      }}
    >
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
          <a href="#" className="text-white text-decoration-none">
            Home
          </a>
          <a href="#" className="text-white text-decoration-none">
            About Me
          </a>
          <a href="#" className="text-white text-decoration-none">
            Designs
          </a>
          <a href="#" className="text-white text-decoration-none">
            Services
          </a>
          <a href="#" className="text-white text-decoration-none">
            Portfolio
          </a>
          <a href="#" className="text-white text-decoration-none">
            Blog
          </a>
        </div>
        <button className="btn btn-outline-light rounded-pill px-4 py-2">
          Let's Connect
        </button>
      </div>
    </div>
  );
}
