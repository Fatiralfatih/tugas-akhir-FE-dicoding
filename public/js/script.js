const hamburger = document.querySelector('.hamburger');

const navbarBottom = document.querySelector('#navbar-bawah');
hamburger.addEventListener('click', () => {
    navbarBottom.className === 'navbar-bottom' ? navbarBottom.classList.add('responsive') : navbarBottom.classList.remove('responsive')
});
