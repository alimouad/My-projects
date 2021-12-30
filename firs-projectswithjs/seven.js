// const quetion = document.querySelectorAll('.section-center')

// quetion.forEach(function(qu){
//     const btns = qu.querySelector('.btn')
//     // console.log(btns);
//         btns.addEventListener('click',function(){
//             // const i = qu.querySelector('.fas')

//                 // if(qu.classList.contains('showhidden')){
//                 //  i.className = 'fas fa-minus-square';
//                 // }else {
//                 // i.className = 'fas fa-plus-square';
//                 // }
//             quetion.forEach(function(item){
//                 // console.log(item)
//                 if(item !== qu){
//                     item.classList.remove('showhidden');
//                     // i.className = 'fas fa-plus-square';
//                 }
                
//             });
//             qu.classList.toggle('showhidden')
//     })
// })
const btn = document.querySelectorAll('.btn');
const showhiden = document.querySelector('.hidden-quetion')

btn.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(m){
    const link  = m.currentTarget
    const i = link.querySelector('.fas')
    const links = link.parentElement.nextElementSibling
    // console.log(links)
    // console.log(i)
    links.classList.toggle('showhidden')
    if(links.classList.contains('showhidden')){
        i.className = 'fas fa-minus';
    }
    else {
        i.className = 'fas fa-plus-square';
    }
    })
})




