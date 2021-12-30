const btn = document.getElementById("btn");
const links = document.querySelector(".links")
// let up = document.querySelector('up');
// let i = document.getElementsByTagName("i")
const close = document.querySelector(".close")
const moon = document.querySelector(".moon")
const i = document.querySelector('.fa-moon')



btn.addEventListener("click", function(){
    // console.log(links.classList.contains('ali'))
    const link = links.classList;
    console.log(links.classList)
    // if (link.contains('show-links')){
    //     link.remove('show-links')
    // }
    // else {
    //     link.add('show-links')
    // }
    link.toggle('show-links');
    // up.style.display = "none";
    // i.style.display = "block"

  
});

close.addEventListener('click', function(){
    const link = links.classList;
    link.remove('show-links');
})
moon.addEventListener('click', function(){
    const link = links.classList;
    link.toggle('dark');
    if (link.contains('dark')){
        i.className = 'fas fa-sun';
    }else {
        i.className = 'fas fa-moon';
    }
})