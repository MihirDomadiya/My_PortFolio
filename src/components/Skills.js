import React from 'react';

const skills = [
    { name: "HTML", desc: "Structure of web content", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", desc: "Styling and layout", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", desc: "Dynamic web behavior", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", desc: "Typed JS superset", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React.js", desc: "UI library for components", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", desc: "Full-stack React framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", desc: "JavaScript backend runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", desc: "Web framework for Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", desc: "NoSQL document database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", desc: "Relational SQL database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Tailwind CSS", desc: "Utility-first CSS framework", icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
    { name: "Bootstrap", desc: "CSS component library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", desc: "Version control system", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", desc: "Code hosting platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "EJS", desc: "Template engine for Node.js", icon: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJibGFjayIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkVKUzwvdGl0bGU+PHBhdGggZD0ibTguMjkxIDUuNjk2LTEuMjU4LTEuNTggMS42NjgtMS41NSAxLjI1OCAxLjU4LTEuNjY4IDEuNTV6bTIuMzQgMi4wNDguMjA1LTEuNTUtNS40MTItLjAzLS4yMDQgMS41NSAzLjk0NS4wMjJMNy44IDE3Ljg1MmwtLjgzOS43Ny0uNDA1LS4wMDRjLjM4NS40MDMuODAzLjgxIDEuMjM2IDEuMjE0bDEuMzc4LTEuMjY1IDEuNDU4LTEwLjgyM2guMDA0em0tNi43NTcgNy4yNTRzMi45MjUtLjQ2OCAzLjU0LjM4YzAgMC0xLjc1Ni0yLjkyNS00LjE4NC0yLjkyNSAwLS4wNzQtLjA5OC0xLjM1MyA1LjE0Ni0yLjYwOWwuMjA2LTEuNTNjLTguMzQ2IDEuMTA4LTE0LjI4NyA0LjMyMi4yNjUgMTMuMTIgMCAwLTUuNjc1LTQuNzEtNC45NzMtNi40MzZ6TTEzIDYuMjIzIDExLjIxNiA3Ljg2bC0uNTI2IDQuMDM3IDEuMzE2IDEuNjM4IDUuNjc1LjA1OC41NTYuNzAyLS4zOCAyLjYzMy0uNzEzLjY4NS0uMDE4LjAxN2gyLjE5M2wuNTU2LTQuMDM3LTEuMzQ1LTEuNjM4LTUuNjQ2LS4wNTgtLjU1Ni0uNzAyLjM1MS0yLjYzMy43MzEtLjcwMiA1LjAzMi4wNTguNTU2LjY3My0uMTc2IDEuMjI5aDEuNTVsLjI2NC0xLjkwMi0xLjMxNy0xLjY2Ny02LjMxOC0uMDN6bTIuODgyIDExLjkwOC41NDUtLjUyMy00LjMwNS0uMDM1LS45NjUtMS4xNy0xLjI1OCAxLjE3IDEuMzQ2IDEuNjY3IDYuMzE4LjAzIDEuMjItMS4xMzloLTIuOTAxek0xMy4xMyA4Ljk2NWExMDMuMTYgMTAzLjE2IDAgMCAxIDQuNjI0LS41NTRsLTQuMTQ1LS4wNDgtLjQ1Ny40NC0uMDIyLjE2MnptOC4wMjYtMS4xNTYtLjAyNS4xNzktLjAxOC4xMzJjLjkyLS4wNyAxLjg3LS4xMzkgMi44ODctLjIgMCAwLTEuMTEzLS4wNjctMi44NDQtLjExek0xLjkxNCAxOC4zOTJsMS40MDQgMS43ODQgMi42Ni4wMmMtMS4yOTItLjg3NS0yLjM5My0xLjcwOC0zLjI5Ni0yLjQ5OWwtLjc2OC42OTV6Ii8+PC9zdmc+" },
    { name: "JWT", desc: "Token-based authentication", icon: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
    { name: "Firebase", desc: "Backend-as-a-Service", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Postman", desc: "API testing tool", icon: "https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" },
    { name: "Vercel", desc: "Frontend hosting", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
    { name: "Netlify", desc: "Serverless deployment", icon: "https://www.netlify.com/v3/img/components/logomark.png" }
];

const InfiniteSkillsSlider = () => {
    const doubledSkills = [...skills, ...skills];

    return (
        <div className="w-full skills-container bg-black py-10 overflow-hidden">
            {/* <h2 className="text-white skills-title text-center">Dev Showcase</h2> */}
            <h1 className="text-[137px] font-extrabold uppercase tracking-wider text-center vertical-fade-text d-none d-md-block">
                Dev Showcase
            </h1>
            <h1 className="text-[137px] font-extrabold uppercase tracking-wider text-center vertical-fade-text d-md-none d-block">
                devShow
            </h1>

            <div className="slider-track flex">
                {doubledSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="card bg-dark text-white rounded-2xl shadow p-4 mx-4 w-44 text-center transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="rounded-full mx-auto mb-3"
                            style={{ width: '60px', height: '60px', objectFit: 'cover', backgroundColor: '#222' }}
                        />
                        <h5 className="text-base font-semibold mb-1">{skill.name}</h5>
                        <p className="text-sm text-gray-400">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSkillsSlider;
