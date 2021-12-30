const sliderInfo = Array.from(document.querySelectorAll('.section'))
const slideCount = sliderInfo.length;
let currentSlide = 1;

const nextbtn = document.querySelector('.next')
const prvbtn = document.querySelector('.previous')

nextbtn.onclick = nextele;
prvbtn.onclick = prevele;

function nextele(){
    
   currentSlide++
   if (currentSlide > slideCount){
        currentSlide = 1
    }
   check()
}
function prevele(){
    currentSlide--
   if (currentSlide <= 0){
    currentSlide = slideCount 
    }
        
   check()
}

function check(){
    removeclass()
    sliderInfo[currentSlide - 1].classList.add('active')
    
}

function removeclass(){
    sliderInfo.forEach(function(el){
        el.classList.remove('active')
    })
}