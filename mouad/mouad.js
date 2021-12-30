const nav = document.querySelector('.loyal');
const head = document.querySelector('.head');
const links = document.querySelector('.nav')
const scroll = document.querySelector('.scroll')

const btn = document.querySelector('.butn')


window.addEventListener('scroll', function(){
    const scrollheight = window.pageYOffset;
    const navheight = nav.getBoundingClientRect().height;
    // console.log(scrollheight)
    if (scrollheight > navheight){
        nav.classList.add('loyal-show');
        // head.classList.remove('head');
    }
    else {
        nav.classList.remove('loyal-show');
    }
    if (scrollheight >= 500){
        scroll.classList.add('show')
    }else {
         scroll.classList.remove('show')
    }
    scroll.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
})
const scrollink = document.querySelectorAll('.scroll-link');

scrollink.forEach(function(link) {
    // console.log(link)
    link.addEventListener('click',function(e) {
        e.preventDefault()
        // const id = e.currentTarget.getAttribute('href').slice(1)
        // const elem = document.getElementById(id)
        // // console.log(elem)
        // const navheight = nav.getBoundingClientRect().height;
        // const position = elem.offsetTop - navheight;
        let sec = document.querySelector(e.target.dataset.section)
        console.log(sec)
        sec.scrollIntoView({
            behavior: 'smooth',
            block: "start",
       }) 
        // window.scrollTo({
        //     left:0,
        //     top :position,
        //     behavior:"smooth",
        // })
        links.classList.remove('nav-show');
    })
})

btn.addEventListener('click', function(){
    // console.log('i love you mouad');
    links.classList.toggle('nav-show');
})


