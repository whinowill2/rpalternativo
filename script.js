document.addEventListener('DOMContentLoaded', function() {
        const header = document.getElementById('header');
        const openMenuBtn = document.getElementById('open-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const sideMenu = document.getElementById('side-menu');
        const menuOverlay = document.getElementById('menu-overlay');

        openMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sideMenu.classList.add('is-open');
            menuOverlay.classList.add('is-open');
            document.body.classList.add('body-no-scroll');
        });

        const closeMenu = () => {
            sideMenu.classList.remove('is-open');
            menuOverlay.classList.remove('is-open');
            document.body.classList.remove('body-no-scroll');
        }

        closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        const closeAllDropdowns = () => {
            document.querySelectorAll('.has-dropdown.active').forEach(d => d.classList.remove('active'));
        };

        document.addEventListener('click', e => {
            if (e.target.closest('.dropdown-menu a')) {
                closeAllDropdowns();
                return;
            }

            const dropdownToggle = e.target.closest('.has-dropdown');
            
            if (dropdownToggle) {
                e.preventDefault(); 
                const wasActive = dropdownToggle.classList.contains('active');
                closeAllDropdowns();
                if (!wasActive) {
                    dropdownToggle.classList.add('active');
                }
                return;
            }
            
            if (!e.target.closest('.dropdown-menu')) {
                closeAllDropdowns();
            }
        });
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            closeAllDropdowns();
        });
    });
