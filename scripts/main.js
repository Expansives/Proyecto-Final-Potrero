
const NavSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__ul');
    let menuOpen = false;

    //Toogle Nav
    burger.addEventListener('click', () =>{
        if(!menuOpen) {
            burger.classList.add('open');
            menuOpen = true;
        }   else {
            burger.classList.remove('open');
            menuOpen = false;
        }

        nav.classList.toggle('nav-active');
    
    });

    
}

NavSlide();