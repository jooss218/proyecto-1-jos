(function () {
    "use strict";

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('mobile-nav-toggle')) {
            document.querySelector('#navbar').classList.toggle('navbar-mobile');
            e.target.classList.toggle('bx-menu');
            e.target.classList.toggle('bx-x');

        }
    });
    window.addEventListener('load', function(){
        let menuContainer = document.querySelector('.menu-container');
        if (menuContainer) {
            let menuIsotope = new Isotope(menuContainer, {
                itemSelector: '.menu-item',
                layoutMode: 'fitRows'
            });
            let menuFilters = document.querySelectorAll(' #menu-filters li');
            menuFilters.forEach(function (menuFilter){
                menuFilter.addEventListener('click', function (e) {
                    e.preventDefault();
                    menuFilters.forEach(function (filter){
                        filter.classList.remove('filter-active');
                    });
                    this.classList.add('filter-active');
                    menuIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                });
            });
        }
    });
})();