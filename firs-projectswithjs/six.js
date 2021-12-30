const btn = document.querySelector('.btn');
const content = document.querySelector('.cnt');
const showitem = document.querySelector('.show-item');
const show = document.querySelectorAll('.show')
const i = document.querySelector('.fa-sort-down')




btn.addEventListener('click',function(){
   const  link = showitem.classList
   link.toggle('hide');
 if (link.contains('hide')){
    i.className = 'fas fa-sort-up';
 }   
 else {
    i.className = 'fas fa-sort-down';
 } 

})
show.forEach(function(link){
    link.addEventListener('click', function(m){
        const links = m.currentTarget.textContent;
        console.log(links)
        content.textContent= links;
        showitem.classList.toggle('hide');
    })
})
