import React from 'react'

export default function About() {
    return (
        <div className={`text-white py-5`}>
            <div className="text-center container">
                <p className={`fw-bold sectionTitle`}>About Me 👋</p>
                <h1 className={`fw-bold heading`}>Hi There! 👨‍💻</h1>
                <p className={`mx-auto description`}>
                    I’m <span className="fw-bold">Mihir Domadiya</span>, a passionate <span className="colorful">Full Stack Developer</span> with a strong background in both design and development. Since 2024, I’ve been building dynamic web applications that merge creativity and functionality, mastering core principles like <span className="typography">Typography</span>, com<span className="curly">{"{pos}"}</span>ition, and <span className="colorful">code</span> architecture while staying updated with the latest technologies and trends.
                </p>
                <p className="mt-4 text-offWhite">Want to know more about me? 😊</p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-white text-decoration-none fw-normal">
                        Let's Connect 🤝
                    </a>
                    <span className="text-white">|</span>
                    <a href="#" className="text-white text-decoration-none fw-normal">
                        Blog ✍️
                    </a>
                </div>
            </div>
        </div>
    )
}
