const NavSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__ul');


    //Toogle Nav
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    
    });

    
}

NavSlide();