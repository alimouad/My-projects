const image = document.querySelectorAll('.img');
const btn = document.querySelector('.btn');
const show = document.querySelector('.show');
const imageshow = document.querySelector('.image-shower')


image.forEach(function(images){
    // console.log(images);
    images.addEventListener('click', function(e){
        const img = e.currentTarget.src;
        show.src = img;
        imageshow.style.display = "flex";
    })
})


btn.addEventListener('click', function(){
     imageshow.style.display = 'none'
})