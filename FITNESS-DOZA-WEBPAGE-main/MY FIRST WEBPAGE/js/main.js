console.log('hello');

const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
    
    console.log('My possition Y is', window.scrollY);
    if(window.scrollY > 50) {
        navbar.classList.add('active');
    }else{
        navbar.classList.remove('active');
    }

});