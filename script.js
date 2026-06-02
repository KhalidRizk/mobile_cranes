document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const slides = document.querySelectorAll('.slide');
    const tocContainer = document.getElementById('toc');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const currentIndexEl = document.getElementById('current-index');
    const totalSlidesEl = document.getElementById('total-slides');
    const currentSlideTitleEl = document.getElementById('current-slide-title');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const menuToggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    // --- Initialize ---
    totalSlidesEl.textContent = totalSlides;
    initTOC();
    updateSlideView();
    initTheme();

    // --- TOC Generation ---
    function initTOC() {
        slides.forEach((slide, index) => {
            const title = slide.getAttribute('data-title');
            const button = document.createElement('button');
            button.className = 'toc-item';
            button.textContent = title;
            button.addEventListener('click', () => {
                currentSlideIndex = index;
                updateSlideView();
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });
            tocContainer.appendChild(button);
        });
    }

    // --- Slide Navigation ---
    function updateSlideView() {
        // Update Slides
        slides.forEach((slide, index) => {
            if (index === currentSlideIndex) {
                slide.classList.add('active');
                currentSlideTitleEl.textContent = slide.getAttribute('data-title');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update TOC Active State
        const tocItems = document.querySelectorAll('.toc-item');
        tocItems.forEach((item, index) => {
            if (index === currentSlideIndex) {
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });

        // Update Counter and Buttons
        currentIndexEl.textContent = currentSlideIndex + 1;
        btnPrev.disabled = currentSlideIndex === 0;
        btnNext.disabled = currentSlideIndex === totalSlides - 1;
        
        // Scroll to top of slide wrapper
        document.querySelector('.slides-wrapper').scrollTop = 0;
    }

    btnPrev.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlideView();
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentSlideIndex < totalSlides - 1) {
            currentSlideIndex++;
            updateSlideView();
        }
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (currentSlideIndex < totalSlides - 1) {
                currentSlideIndex++;
                updateSlideView();
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                updateSlideView();
            }
        }
    });

    // --- Theme Toggle ---
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Mobile Menu Toggle ---
    menuToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
    
    // Close sidebar when clicking outside on mobile
    document.querySelector('.main-content').addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open') && !e.target.closest('#menu-toggle')) {
            sidebar.classList.remove('open');
        }
    });
});
