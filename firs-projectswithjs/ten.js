const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', function(){
    const playvideo = btn.classList;
    if(!playvideo.contains('slide')){
        playvideo.add('slide')
        video.pause()
    }else {
        playvideo.remove('slide') 
        video.play()
    }
})