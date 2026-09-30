/**
 * Tooplate 2145 - Techsoln Personal Portfolio JavaScript
 * https://www.tooplate.com/view/2145-techsoln-portfolio
 * Features: Dark/Light Mode, Animated Tagline, Skill Filtering, Modal Popup,
 * Contact Validation, Toast Notifications, and Smooth Scroll Observer.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. Theme Switcher (Dark / Light Mode)
    // --------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        if (theme === 'dark') {
            themeIcon.className = 'fa-solid fa-moon';
            themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
            themeIcon.className = 'fa-solid fa-sun';
            themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        }
    }

    // --------------------------------------------------------------------------
    // 2. Mobile Menu Toggle
    // --------------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            menuIcon.className = 'fa-solid fa-xmark';
        } else {
            menuIcon.className = 'fa-solid fa-bars';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.className = 'fa-solid fa-bars';
        });
    });

    // --------------------------------------------------------------------------
    // 3. Typing Effect for Tagline
    // --------------------------------------------------------------------------
    const typingText = document.getElementById('typing-text');
    const phrases = [
        "Final-Year Computer Science & Engineering Student",
        "Aspiring Data Scientist & ML Engineer",
        "Full Stack Web Developer",
        "DevOps & Cloud Enthusiast"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = 2000; // Pause at end of phrase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    if (typingText) {
        typeEffect();
    }

    // --------------------------------------------------------------------------
    // 4. Scroll Active Nav Link Highlight & Navbar Shadow
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Show/hide Back To Top button
        const backToTopBtn = document.getElementById('back-to-top');
        if (window.scrollY > 400) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --------------------------------------------------------------------------
    // 5. Skills Category Filter
    // --------------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-category-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --------------------------------------------------------------------------
    // 6. Project Modal Popup
    // --------------------------------------------------------------------------
    const projectModal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const data = RESUME_DATA.projects[projectId];

            if (data) {
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-category').textContent = data.category;
                document.getElementById('modal-desc').textContent = data.fullDesc;

                const featuresList = document.getElementById('modal-features');
                featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

                const techContainer = document.getElementById('modal-tech');
                techContainer.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');

                const githubBtn = document.getElementById('modal-github-link');
                githubBtn.setAttribute('href', data.github);

                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeModal();
        }
    });

    // --------------------------------------------------------------------------
    // 7. Copy to Clipboard & Toast Notification
    // --------------------------------------------------------------------------
    const copyBtns = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied "${textToCopy}" to clipboard!`);
            }).catch(err => {
                showToast(`Failed to copy: ${err}`);
            });
        });
    });

    function showToast(message) {
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // --------------------------------------------------------------------------
    // 8. Contact Form Handling
    // --------------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('user-name').value;
            const email = document.getElementById('user-email').value;

            if (name && email) {
                showToast(`Thank you, ${name}! Your message has been recorded.`);
                contactForm.reset();
            }
        });
    }
});
