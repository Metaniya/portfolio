document.addEventListener("DOMContentLoaded", function() {
   // all your JS code here

// Smooth scroll navigation
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Set active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scroll for anchor links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add some personality with console message
console.log('%cHello! Thanks for checking out the code 👋', 'color: #4f46e5; font-size: 16px; font-weight: bold;');
console.log('%cMade by Metaniya Shiferaw', 'color: #666; font-size: 12px;');

const skillInfo = {
    html: "I use semantic HTML to build clean and accessible page structures for real projects.",
    css: "I create responsive layouts, animations and clean UI using modern CSS techniques.",
    js: "I build interactive features and dynamic behaviour using vanilla JavaScript.",
    react: "I build component-based user interfaces and manage application logic using React.",
    python: "I use Python for problem solving and backend-related tasks.",
    mongo: "I work with MongoDB for storing and managing application data.",
    sql: "I use SQL to design and query relational databases.",
    flutter: "I build cross-platform mobile applications using Flutter.",
    android: "I develop mobile features using Android and Jetpack tools.",
    git: "I use Git and GitHub for version control and collaboration.",
    figma: "I use Figma to design simple UI layouts before implementation."
};

const skillDialog = document.getElementById('skillDialog');
const skillTitle = document.getElementById('skillTitle');
const skillDesc = document.getElementById('skillDesc');
const closeSkill = document.getElementById('closeSkill');

document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const key = tag.dataset.skill;
        skillTitle.textContent = tag.textContent;
        skillDesc.textContent = skillInfo[key] || '';
        skillDialog.classList.add('active');
    });
});

closeSkill.addEventListener('click', () => {
    skillDialog.classList.remove('active');
});

skillDialog.addEventListener('click', e => {
    if (e.target === skillDialog) {
        skillDialog.classList.remove('active');
    }
});

const certDialog = document.getElementById("certDialog");
const certImage = document.getElementById("certImage");
const closeCert = document.getElementById("closeCert");

const certImages = {
    basic: "cert-basic.jpg",
    addon: "cert-addon.jpg",
    plus: "cert-plus.jpg"
};

document.querySelectorAll(".cert-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const key = link.dataset.cert;
        const img = certImages[key];

        if (!img) return;

        certImage.src = img;
        certDialog.classList.add("active");
    });
});

closeCert.addEventListener("click", () => {
    certDialog.classList.remove("active");
    certImage.src = "";
});

certDialog.addEventListener("click", e => {
    if (e.target === certDialog) {
        certDialog.classList.remove("active");
        certImage.src = "";
    }
});


});
