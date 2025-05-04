document.addEventListener('DOMContentLoaded', function () {
    const skills = [
        { name: 'HTML', desc: 'Structure of web content', icon: 'fab fa-html5', color: 'bg-orange-500' },
        { name: 'CSS', desc: 'Styling and layout', icon: 'fab fa-css3-alt', color: 'bg-blue-500' },
        { name: 'JavaScript', desc: 'Dynamic web behavior', icon: 'fab fa-js', color: 'bg-yellow-400' },
        { name: 'TypeScript', desc: 'Typed JavaScript superset', icon: 'fas fa-code', color: 'bg-blue-600' },
        { name: 'React.js', desc: 'UI library for components', icon: 'fab fa-react', color: 'bg-blue-400' },
        { name: 'Next.js', desc: 'Full-stack React framework', icon: 'fas fa-server', color: 'bg-gray-800' },
        { name: 'Node.js', desc: 'JavaScript backend runtime', icon: 'fab fa-node-js', color: 'bg-green-500' },
        { name: 'Express.js', desc: 'Web framework for Node.js', icon: 'fas fa-server', color: 'bg-gray-600' },
        { name: 'MongoDB', desc: 'NoSQL document database', icon: 'fas fa-database', color: 'bg-green-600' },
        { name: 'MySQL', desc: 'Relational SQL database', icon: 'fas fa-database', color: 'bg-blue-700' },
        { name: 'Tailwind CSS', desc: 'Utility-first CSS framework', icon: 'fas fa-paint-brush', color: 'bg-blue-300' },
        { name: 'Bootstrap', desc: 'CSS component library', icon: 'fab fa-bootstrap', color: 'bg-purple-600' },
        { name: 'Git & GitHub', desc: 'Version control system', icon: 'fab fa-github', color: 'bg-gray-900' },
        { name: 'REST APIs', desc: 'Web communication interface', icon: 'fas fa-exchange-alt', color: 'bg-green-400' },
        { name: 'EJS', desc: 'Template engine for Node.js', icon: 'fas fa-file-code', color: 'bg-yellow-500' },
        { name: 'JWT', desc: 'Token-based authentication', icon: 'fas fa-key', color: 'bg-purple-500' },
        { name: 'Firebase', desc: 'Backend-as-a-Service', icon: 'fas fa-fire', color: 'bg-yellow-500' },
        { name: 'Postman', desc: 'API testing tool', icon: 'fas fa-cloud', color: 'bg-orange-600' },
        { name: 'Vercel', desc: 'Hosting for frontend apps', icon: 'fas fa-cloud-upload-alt', color: 'bg-black' },
        { name: 'Netlify', desc: 'Serverless site deployment', icon: 'fas fa-globe', color: 'bg-green-400' },
        { name: 'Linux Basics', desc: 'Terminal and commands', icon: 'fab fa-linux', color: 'bg-yellow-600' }
    ];

    const skillSlides = document.querySelectorAll('.skill-slides');

    skillSlides.forEach(slideContainer => {
        skills.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card flex-shrink-0 mx-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg flex flex-col items-center';

            card.innerHTML = `
        <div class="skill-icon ${skill.color} text-white mb-4">
          <i class="${skill.icon}"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-1 text-center">${skill.name}</h3>
        <p class="text-sm text-gray-600 text-center">${skill.desc}</p>
      `;

            slideContainer.appendChild(card);
        });
    });

    const sliderTrack = document.querySelector('.slider-track');
    sliderTrack.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });

    sliderTrack.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });
});
