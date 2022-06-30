window.addEventListener('scroll' ,()=>{
    document.querySelector('nav').classList.toggle('nav-scroll' , window.scrollY > 0 )
})


let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')


        let icon  = faq.querySelector('.faq-icon i')
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }
        else {
            icon.className = 'uil uil-plus'
        }
    })
})



const navMenu = document.querySelector('.nav__menu'),
closeBtn =  document.querySelector('.close__btn'),
showBtn =  document.querySelector('.open__btn');


showBtn.addEventListener('click', ()=>{
    navMenu.style.display = 'flex';
    showBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})


closeBtn.addEventListener('click', ()=>{
    navMenu.style.display = 'none';
    showBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})