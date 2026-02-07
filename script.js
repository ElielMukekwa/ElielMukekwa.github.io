const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_greeting: "Hello, I'm",
        hero_role: "Developer & Electronics Engineer",
        hero_desc: "I build web and mobile applications and design electronic solutions by combining programming, interface design, and problem-solving to create useful and modern tools.",
        hero_cta: "My Projects",

        about_title: "About Me",
        about_text: "I am a developer and electronics engineer passionate about technology and innovation. I enjoy building web, mobile, and desktop applications, as well as electronic systems that solve real-world problems. I focus on writing clean code and designing simple, modern user interfaces.",

        about_stats_exp: "Years Learning",
        about_stats_proj: "Projects Built",
        about_stats_clients: "Technologies Used",

        skills_section_title: "My Skills",
        skills_desc: "Technologies and tools I use to design and build applications.",

        skill_fe: "Software Development",
        skill_tools: "Tools & Systems",
        skill_design: "UI Design & Electronics",

        experience_title: "Experience",
        experience_subtitle: "My academic and technical journey.",

        exp_1_title: "Computer Science Student",
        exp_1_company: "Don Bosco University of Lubumbashi",
        exp_1_date: "2022 - Present",
        exp_1_desc: "Studying software engineering, algorithms, databases, and application development. Building academic and personal projects in web, mobile, and desktop development.",

        exp_2_title: "Electronics Technician",
        exp_2_company: "Salama Technical Institute",
        exp_2_date: "2018 - 2022",
        exp_2_desc: "Technical training in electronics, including circuit design, maintenance of electronic systems, and microcontroller programming such as Arduino.",

        projects_title: "Featured Projects",
        project_card_1_title: "E-Commerce Application",
        project_card_1_desc: "Online store application with admin dashboard and product management.",
        project_card_2_title: "Student Monitoring System",
        project_card_2_desc: "Educational data visualization application for tracking student performance.",
        project_card_3_title: "Developer Portfolio",
        project_card_3_desc: "Personal portfolio website with modern design and multilingual support.",

        project_view: "View Code",

        contact_title: "Get In Touch",
        contact_desc: "Feel free to contact me for collaboration, projects, or learning opportunities in software development or electronics.",
        contact_btn: "Say Hello",

        contact_info_title: "Contact Info",
        contact_phone: "Phone",
        contact_whatsapp: "WhatsApp",

        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_send: "Send Message",

        footer_rights: "All rights reserved."
    },

    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_contact: "Contact",

        hero_greeting: "Bonjour, je suis",
        hero_role: "Développeur & Électronicien",
        hero_desc: "Je développe des applications web et mobiles et je conçois des solutions électroniques en combinant programmation, design d’interface et résolution de problèmes pour créer des outils utiles et modernes.",
        hero_cta: "Mes Projets",

        about_title: "À propos de moi",
        about_text: "Je suis développeur et électronicien passionné par la technologie et l’innovation. J’aime créer des applications web, mobiles et desktop ainsi que des systèmes électroniques qui répondent à des besoins réels. Je m’intéresse particulièrement au code propre et aux interfaces modernes et simples.",

        about_stats_exp: "Années d’apprentissage",
        about_stats_proj: "Projets réalisés",
        about_stats_clients: "Technologies utilisées",

        skills_section_title: "Mes Compétences",
        skills_desc: "Technologies et outils que j’utilise pour concevoir et développer des applications.",

        skill_fe: "Développement Logiciel",
        skill_tools: "Outils & Systèmes",
        skill_design: "UI Design & Électronique",

        experience_title: "Expérience",
        experience_subtitle: "Mon parcours académique et technique.",

        exp_1_title: "Étudiant en Informatique",
        exp_1_company: "Université Don Bosco de Lubumbashi",
        exp_1_date: "2022 - Présent",
        exp_1_desc: "Formation en génie logiciel, algorithmique, bases de données et développement d’applications. Réalisation de projets académiques et personnels en développement web, mobile et desktop.",

        exp_2_title: "Technicien en Électronique",
        exp_2_company: "Institut Technique Salama",
        exp_2_date: "2018 - 2022",
        exp_2_desc: "Formation technique en électronique incluant la conception de circuits, la maintenance de systèmes électroniques et la programmation de microcontrôleurs comme Arduino.",

        projects_title: "Projets Récents",
        project_card_1_title: "Application E-Commerce",
        project_card_1_desc: "Application de boutique en ligne avec tableau de bord administrateur et gestion des produits.",
        project_card_2_title: "Système de Suivi Scolaire",
        project_card_2_desc: "Application de visualisation des performances scolaires basée sur des données éducatives.",
        project_card_3_title: "Portfolio Développeur",
        project_card_3_desc: "Site portfolio personnel avec design moderne et support multilingue.",

        project_view: "Voir le Code",

        contact_title: "Contactez-moi",
        contact_desc: "N’hésitez pas à me contacter pour une collaboration, un projet ou un échange autour du développement logiciel ou de l’électronique.",
        contact_btn: "Dire Bonjour",

        contact_info_title: "Infos de Contact",
        contact_phone: "Téléphone",
        contact_whatsapp: "WhatsApp",

        form_name: "Nom",
        form_email: "Email",
        form_message: "Message",
        form_send: "Envoyer le message",

        footer_rights: "Tous droits réservés."
    }
};


// State
let currentLang = 'fr';
let currentTheme = localStorage.getItem('theme') || 'light';

// Elements
const html = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const langToggleBtn = document.getElementById('lang-toggle');
const contentElements = document.querySelectorAll('[data-i18n]');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Initialize
function init() {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    
    // Theme Event Listener
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });

    // Language Event Listener
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        applyLanguage(currentLang);
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalBtnText = btn.innerHTML;
            
            // Show loading state
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            // Prepare template parameters
            // Assurez-vous que ces noms correspondent à votre modèle EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'elielmukekwa02@gmail.com'
            };

            // REMPLACEZ 'YOUR_SERVICE_ID' ET 'YOUR_TEMPLATE_ID' 
            // PAR CEUX DE VOTRE COMPTE EMAILJS
            emailjs.send('service_07t9tvb', 'template_qkmcv1n', templateParams)
                .then(function() {
                    // Success
                    alert("Message envoyé avec succès !");
                    contactForm.reset();
                    btn.innerHTML = originalBtnText;
                    btn.disabled = false;
                }, function(error) {
                    // Error
                    alert("Erreur lors de l'envoi : " + JSON.stringify(error));
                    btn.innerHTML = originalBtnText;
                    btn.disabled = false;
                });
        });
    }

    // Initialize Carousel
    initCarousel();
}

/* =========================================
   LISTE DES PROJETS DU CAROUSEL
   Modifiez cette liste pour ajouter ou modifier vos projets
   ========================================= */
const projectsData = [
    {
        title: "Site E-Commerce Tangawisa",
        description: "Plateforme de commerce électronique pour la vente de produits artisanaux locaux. Conception d'une interface utilisateur moderne et responsive avec intégration d'un système de paiement.",
        tags: ["PHP", "Tailwind", "Laragon"],
        link: "https://github.com/Eliel-el/Tangawisa",
        github: "https://github.com/Eliel-el/", // Lien GitHub optionnel
        image: "image/tangawisa.png" // Lien vers une image du projet (optionnel)
    },
    {
        title: "NetworkManager",
        description: "Application de découverte, monitoring et gestion de réseau local avec interface graphique moderne et CLI puissant. Permet de détecter, identifier et superviser les appareils connectés en temps réel.",
        tags: ["Python", "PyQt5",],
        link: "https://github.com/Eliel-el/NetworkManager",
        github: "https://github.com/Eliel-el/",
        image: "image/reseau.png"
    },
    {
        title: "Application reconnaissance faciale",
        description: "Application mobile de reconnaissance faciale utilisant Flutter et TensorFlow Lite. Permet d'identifier les visages en temps réel à partir de la caméra du smartphone.",
        tags: ["Flutter", "Dart", "TensorFlow Lite"],
        link: "https://github.com/Eliel-el/",
        github: "https://github.com/Eliel-el/",
        image: "image/facial.png"
        // image: "" // Si pas d'image, un dégradé sera affiché
    },
    {
        title: "Agence de Transport API",
        description: "API REST pour la gestion d'une agence de transport, développée en Java . Permet de gérer les réservations, les itinéraires et les clients via des endpoints sécurisés.",
        tags: ["Java", "GlassFish", "API REST"],
        link: "https://github.com/Eliel-el/AgenceTransportPART3",
        github: "https://github.com/Eliel-el/",
        image: "image/Agence.png"
    },
    {
        title: "J-Weather",
        description: "Api REST de prévisions météorologiques développée en Java. Fournit des données météorologiques actuelles.",
        tags: ["Java", "API REST"],
        link: "https://github.com/Eliel-el/j-weather",
        github: "https://github.com/Eliel-el/",
        image: "image/j-w.png"
    },
];

// Carousel Logic
function initCarousel() {
    const track = document.getElementById('projects-track');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const viewport = document.getElementById('carousel-viewport');
    
    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    let autoplayInterval;
    const autoplayDelay = 5000; // 5 secondes
    
    // Function to determine items per slide based on screen width
    function getItemsPerSlide() {
        return window.innerWidth >= 768 ? 3 : 1; 
        // >= 768px (md) -> 3 items
        // < 768px -> 1 item
    }

    // Render Projects
    function renderProjects() {
        track.innerHTML = '';
        projectsData.forEach(project => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'w-full md:w-1/3 flex-shrink-0 px-3'; 
            
            const imageHtml = project.image 
                ? `<div class="h-48 w-full overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                     <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                     <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                   </div>`
                : `<div class="h-4 p-6 pb-0 flex justify-end">
                     <div class="w-full h-2 rounded-t-xl bg-gradient-to-r from-primary to-secondary opacity-50"></div>
                   </div>`;

            // Adjust padding based on whether image is present
            const contentPadding = project.image ? 'p-6' : 'p-6 pt-2';

            itemDiv.innerHTML = `
                <div class="bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 h-full flex flex-col group relative">
                     ${imageHtml}
                     <div class="${contentPadding} flex-grow flex flex-col">
                        <div class="flex justify-between items-start mb-4">
                             <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${project.title}</h3>
                             <div class="flex space-x-2">
                                ${project.github ? `
                                    <a href="${project.github}" target="_blank" class="text-gray-400 hover:text-primary transition-colors" title="View Code">
                                        <i class="fab fa-github text-xl"></i>
                                    </a>
                                ` : ''}
                                <a href="${project.link}" target="_blank" class="text-gray-400 hover:text-primary transition-colors" title="View Project">
                                    <i class="fas fa-external-link-alt text-lg"></i>
                                </a>
                             </div>
                        </div>
                        
                        <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-grow">
                            ${project.description}
                        </p>
                        
                        <div class="mt-auto">
                            <div class="flex flex-wrap gap-2">
                                ${project.tags.map(tag => `
                                    <span class="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded border border-blue-100 dark:border-blue-900/30">
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            track.appendChild(itemDiv);
        });
        
        // Render Indicators
        updateIndicators();
    }

    function updateCarousel() {
        // Let's use item-based index (0 to length - itemsVisible)
        const itemsVisible = getItemsPerSlide();
        const maxScrollIndex = projectsData.length - itemsVisible;
        
        // Loop logic for auto play or simple bounds
        // For auto-play, usually we loop back to start. 
        // But for manual sliding, clamping is better.
        // Let's handle generic clamping here.
        if (currentIndex < 0) currentIndex = 0;
        
        // Note: For infinite loop effect, we would need to clone nodes.
        // For simple carousel, we can just jump back to 0.
        // We handle logic outside: if we want to loop, we reset index.
        if (currentIndex > maxScrollIndex) {
            // If called from nextBtn logic (user interaction), we stop at end (disable button).
            // But for autoplay, we want to loop. 
            // We will handle loop logic in the "next" function.
            // Here just clamp for safety.
            currentIndex = maxScrollIndex;
        }

        const translateX = -(currentIndex * (100 / itemsVisible));
        track.style.transform = `translateX(${translateX}%)`;

        // Update buttons state (only meaningful if not looping, but we can keep enabled if we implement manual loop check)
        prevBtn.disabled = currentIndex === 0;
        
        // If we reached the end, next button is disabled? 
        // Or if we want to allow user to loop manually we can change logic.
        // Let's keep linear behavior for manual buttons as per previous implementation for simplicity
        nextBtn.disabled = currentIndex >= maxScrollIndex;

        updateIndicators();
    }

    function updateIndicators() {
        if (!indicatorsContainer) return;
        indicatorsContainer.innerHTML = '';
        
        const itemsVisible = getItemsPerSlide();
        const pages = Math.ceil(projectsData.length / itemsVisible);
        
        for (let i = 0; i < pages; i++) {
             const dot = document.createElement('button');
             const targetIndex = i * itemsVisible;
             
             // Check if current index is within this page range
             // Logic adjusted slightly to highlight correctly even if shifted by 1
             const isActive = currentIndex >= targetIndex && currentIndex < targetIndex + itemsVisible;
             
             dot.className = `w-3 h-3 rounded-full transition-all ${isActive ? 'bg-primary scale-125' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'}`;
             dot.addEventListener('click', () => {
                 stopAutoplay(); // Stop on manual interaction
                 currentIndex = Math.min(targetIndex, projectsData.length - itemsVisible); 
                 updateCarousel();
                 startAutoplay(); // Restart
             });
             indicatorsContainer.appendChild(dot);
        }
    }
    
    // Auto Play Logic
    function startAutoplay() {
        stopAutoplay(); // Clear existing to be safe
        autoplayInterval = setInterval(() => {
            const itemsVisible = getItemsPerSlide();
            const maxScrollIndex = projectsData.length - itemsVisible;
            
            if (currentIndex < maxScrollIndex) {
                currentIndex++;
            } else {
                // Loop back to start
                currentIndex = 0;
            }
            updateCarousel();
        }, autoplayDelay);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => {
        stopAutoplay();
        currentIndex--;
        updateCarousel();
        startAutoplay();
    });

    nextBtn.addEventListener('click', () => {
        stopAutoplay();
        const itemsVisible = getItemsPerSlide();
        const maxScrollIndex = projectsData.length - itemsVisible;
        
        if (currentIndex < maxScrollIndex) {
            currentIndex++;
        } else {
             // Optional: Loop manually too? 
             // Usually manual navigation stops at end. 
             // The previous logic had disabled buttons.
             // If button is clickable (i.e. not disabled), we increment.
             // If disabled, click won't trigger or does nothing.
             // But my loop logic in updateCarousel clamps it.
             // So manual click stops at end.
        }
        updateCarousel();
        startAutoplay();
    });
    
    // Pause on hover
    if (viewport) {
        viewport.addEventListener('mouseenter', stopAutoplay);
        viewport.addEventListener('mouseleave', startAutoplay);
    }

    window.addEventListener('resize', () => {
         updateCarousel();
         updateIndicators();
    });

    // Initial Render
    renderProjects();
    updateCarousel(); 
    startAutoplay();
}

// Function loadGitHubProjects has been replaced by manual list above


// Apply Theme
function applyTheme(theme) {
    if (theme === 'dark') {
        html.classList.add('dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun text-yellow-400"></i>';
    } else {
        html.classList.remove('dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon text-indigo-600"></i>';
    }
}

// Apply Language
function applyLanguage(lang) {
    contentElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    langToggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
}

document.addEventListener('DOMContentLoaded', init);