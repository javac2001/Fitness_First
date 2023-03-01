window.addEventListener('scroll',function(){
    const navbar = this.document.querySelector('.navBar').classList;
    navbar.toggle("sticky",window.scrollY > 50);
});
