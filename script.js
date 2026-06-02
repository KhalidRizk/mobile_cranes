document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const slidesWrapper = document.getElementById('slides-wrapper');
    const tocContainer = document.getElementById('toc');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const currentIndexEnEl = document.getElementById('current-index-en');
    const totalSlidesEnEl = document.getElementById('total-slides-en');
    const currentIndexArEl = document.getElementById('current-index-ar');
    const totalSlidesArEl = document.getElementById('total-slides-ar');
    const currentSlideTitleEl = document.getElementById('current-slide-title');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');
    const menuToggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    // --- Data State ---
    let flatSlides = [];
    let currentSlideIndex = 0;
    
    // --- Initialization ---
    function init() {
        buildAppFromData();
        
        const totalSlides = flatSlides.length;
        totalSlidesEnEl.textContent = totalSlides;
        totalSlidesArEl.textContent = totalSlides.toLocaleString('ar-EG');
        
        initLang();
        updateSlideView();
        initTheme();
    }

    function buildAppFromData() {
        if (typeof courseData === 'undefined') {
            console.error("Course data not found!");
            return;
        }

        slidesWrapper.innerHTML = '';
        tocContainer.innerHTML = '';
        flatSlides = [];

        courseData.forEach((section, sectionIndex) => {
            // Build TOC Section Header
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'toc-section';
            
            const sectionBtn = document.createElement('button');
            sectionBtn.className = 'section-btn';
            sectionBtn.innerHTML = `
                <div>
                    <span class="lang-en">${section.sectionTitleEn}</span>
                    <span class="lang-ar">${section.sectionTitleAr}</span>
                </div>
                <svg class="section-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            `;
            
            const subsectionList = document.createElement('div');
            subsectionList.className = 'subsection-list';

            // Toggle collapse
            sectionBtn.addEventListener('click', () => {
                sectionBtn.classList.toggle('collapsed');
                subsectionList.classList.toggle('collapsed');
            });

            sectionDiv.appendChild(sectionBtn);
            sectionDiv.appendChild(subsectionList);
            tocContainer.appendChild(sectionDiv);

            // Build Slides for this Section
            section.slides.forEach((slideData) => {
                const globalIndex = flatSlides.length;
                
                // Add to flat list for easy navigation
                flatSlides.push({
                    ...slideData,
                    sectionIndex,
                    globalIndex,
                    tocElement: null,
                    domElement: null
                });

                const currentSlideRef = flatSlides[globalIndex];

                // Create TOC Item
                const tocItem = document.createElement('button');
                tocItem.className = 'toc-item';
                tocItem.innerHTML = `<span class="lang-en">${slideData.titleEn}</span><span class="lang-ar">${slideData.titleAr}</span>`;
                tocItem.addEventListener('click', () => {
                    currentSlideIndex = globalIndex;
                    updateSlideView();
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('open');
                    }
                });
                subsectionList.appendChild(tocItem);
                currentSlideRef.tocElement = tocItem;

                // Create Slide DOM Element
                const slideSection = document.createElement('section');
                slideSection.className = 'slide';
                slideSection.id = slideData.id;
                
                slideSection.innerHTML = `
                    <div class="slide-content">
                        <div class="bilingual-grid">
                            <div class="lang-en" dir="ltr">
                                ${slideData.contentEn}
                            </div>
                            <div class="lang-ar" dir="rtl">
                                ${slideData.contentAr}
                            </div>
                        </div>
                    </div>
                `;
                slidesWrapper.appendChild(slideSection);
                currentSlideRef.domElement = slideSection;
            });
        });
    }

    // --- Language Toggle ---
    function initLang() {
        const savedLang = localStorage.getItem('lang') || 'en';
        document.documentElement.setAttribute('data-lang', savedLang);
        document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
        updateLangBtnText(savedLang);
        updateCurrentSlideTitle();
    }

    langToggleBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        document.documentElement.setAttribute('data-lang', newLang);
        document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', newLang);
        updateLangBtnText(newLang);
        updateCurrentSlideTitle();
    });

    function updateLangBtnText(lang) {
        langToggleBtn.textContent = lang === 'en' ? 'عربي' : 'English';
    }

    // --- Slide Navigation ---
    function updateSlideView() {
        if (flatSlides.length === 0) return;

        flatSlides.forEach((slide, index) => {
            // Update Main View
            if (index === currentSlideIndex) {
                slide.domElement.classList.add('active');
                slide.tocElement.classList.add('active');
                // Ensure parent section is expanded
                const parentList = slide.tocElement.closest('.subsection-list');
                const parentBtn = parentList.previousElementSibling;
                if (parentList) {
                    parentList.classList.remove('collapsed');
                    parentBtn.classList.remove('collapsed');
                }
                slide.tocElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                slide.domElement.classList.remove('active');
                slide.tocElement.classList.remove('active');
            }
        });
        
        updateCurrentSlideTitle();

        // Update Counter and Buttons
        currentIndexEnEl.textContent = currentSlideIndex + 1;
        currentIndexArEl.textContent = (currentSlideIndex + 1).toLocaleString('ar-EG');
        btnPrev.disabled = currentSlideIndex === 0;
        btnNext.disabled = currentSlideIndex === flatSlides.length - 1;
        
        // Scroll to top of slide wrapper
        slidesWrapper.scrollTop = 0;
    }

    function updateCurrentSlideTitle() {
        if (flatSlides.length === 0) return;
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        const currentSlide = flatSlides[currentSlideIndex];
        if (currentSlide) {
            currentSlideTitleEl.textContent = currentLang === 'en' ? currentSlide.titleEn : currentSlide.titleAr;
        }
    }

    btnPrev.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlideView();
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentSlideIndex < flatSlides.length - 1) {
            currentSlideIndex++;
            updateSlideView();
        }
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (currentSlideIndex < flatSlides.length - 1) {
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

    // Start App
    init();
});
