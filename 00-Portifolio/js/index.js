// Adicione a classe 'active' ao link do menu de navegação ao rolar a página
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav a');

    let currentSectionIndex = sections.length - 6;

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0) {
            currentSectionIndex = i;
        }
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (currentSectionIndex >= 0) {
        navLinks[currentSectionIndex].classList.add('active');
    }
});

// Adicione a classe 'active' ao link do menu de navegação ao clicar

links.forEach(link => {
    link.addEventListener('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const targetElement = document.querySelector(this.hash);
            const targetOffset = targetElement.offsetTop - 1000;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });

            const parentNav = this.closest('.navbar-nav');
            if (parentNav) {
                const activeLink = parentNav.querySelector('.active');
                if (activeLink) {
                    activeLink.classList.remove('active');
                }
                this.closest('a').classList.add('active');
            }
            
        }
    });
});
