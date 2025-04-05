import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="col-6 mx-auto navbar navbar-expand-lg">
      <Link className="navbar-brand text-white" href="/">
        Mihir
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
