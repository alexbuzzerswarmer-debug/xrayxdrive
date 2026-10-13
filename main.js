document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const dropdown = document.querySelector('[data-pages-dropdown]');
    const dropdownButton = document.querySelector('[data-pages-toggle]');
    const mobileButton = document.querySelector('[data-mobile-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');

    if (footer) {
        const pageRoot = window.location.pathname.includes('/Pages/') ? '../' : '';
        footer.className = 'w-full py-12 bg-surface-container-low text-on-surface-variant font-plus-jakarta text-sm';
        footer.innerHTML = `
            <div class="flex flex-col items-center gap-6 px-8">
                <div class="text-lg font-bold text-white font-headline uppercase italic tracking-widest">NovaShift</div>
                <div class="flex flex-wrap justify-center gap-8 font-label">
                    <a class="hover:underline opacity-80 transition-opacity" href="${pageRoot}Pages/support.html">Privacy Policy</a>
                    <a class="hover:underline opacity-80 transition-opacity" href="${pageRoot}Pages/support.html">Terms of Flight</a>
                    <a class="hover:underline opacity-80 transition-opacity" href="${pageRoot}Pages/support.html">Compliance</a>
                    <a class="hover:underline opacity-80 transition-opacity" href="${pageRoot}Pages/news.html">Press Kit</a>
                </div>
                <div class="flex gap-6 mt-4">
                    <span class="material-symbols-outlined cursor-pointer hover:text-orange-500 transition-colors">brand_awareness</span>
                    <span class="material-symbols-outlined cursor-pointer hover:text-orange-500 transition-colors">public</span>
                    <span class="material-symbols-outlined cursor-pointer hover:text-orange-500 transition-colors">videogame_asset</span>
                </div>
                <p class="mt-4 text-center opacity-60">© 2024 AeroVision Systems. Elevate your perspective.</p>
                <p class="text-center opacity-60">HTML template by <a class="text-orange-500 hover:underline" href="https://templatesjungle.com/" rel="noopener" target="_blank">TemplatesJungle</a>.</p>
            </div>`;
    }

    const pageRoot = window.location.pathname.includes('/Pages/') ? '../' : '';
    const pagesMenu = document.querySelector('[data-pages-menu]') || document.querySelector('.nav-dropdown');
    if (pagesMenu && !pagesMenu.querySelector('[href$="news-detail.html"]')) {
        pagesMenu.insertAdjacentHTML('beforeend', `
            <a class="nav-page-link" href="${pageRoot}Pages/news-detail.html">News Detail <span class="nav-pro-badge">PRO</span></a>`);
    }

    const mobileNavMenu = document.querySelector('[data-mobile-menu]');
    if (mobileNavMenu && !mobileNavMenu.querySelector('[href$="news-detail.html"]')) {
        mobileNavMenu.insertAdjacentHTML('beforeend', `
            <a class="py-2 text-slate-300" href="${pageRoot}Pages/news-detail.html">News Detail <span class="ml-2 text-[9px] text-orange-500">PRO</span></a>`);
    }

    const closeDropdown = () => {
        if (!dropdown || !dropdownButton) return;
        dropdown.classList.remove('is-open');
        dropdownButton.setAttribute('aria-expanded', 'false');
    };

    dropdownButton?.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = dropdown.classList.toggle('is-open');
        dropdownButton.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
        if (dropdown && !dropdown.contains(event.target)) closeDropdown();
    });

    mobileButton?.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('is-open');
        mobileButton.setAttribute('aria-expanded', String(isOpen));
        mobileButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
});
