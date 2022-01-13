function animation(){
    const rows = 7, cols = 10;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const div = document.createElement('div')
            div.className = `col-${j+1}`;
            document.querySelector('.bg-animation').appendChild(div)
        }
    }
}
animation()




// btnselected
 
function stopOverflow(){
    document.body.classList.toggle('body.srolling')
}


const btncon = document.querySelector('.portfolio-btn')

btncon.addEventListener('click', (el)=>{
    if (el.target.classList.contains('filter-btn') && !el.target.classList.contains('active')){
        btncon.querySelector('.active').classList.remove('active')
        el.target.classList.add('active');        
        let status = document.querySelector('.filter-status'),
        statusP = document.querySelector('.filter-status p')
        status.classList.add('active')
        stopOverflow()
        statusP.innerHTML = `filtering <span>${el.target.innerHTML}</span> works`
        setTimeout(()=>{
        filter(el.target)
         stopOverflow()
        },400)      
        setTimeout(()=>{
        status.classList.remove('active')
        },400)
        
    }
})
let portfolioItem;

function filter(filterbtn){
     const selectedCat = filterbtn.getAttribute('data-filter');
     document.querySelectorAll('.item').forEach(item =>{
         const category = item.getAttribute('data-categorie')
         if(category === selectedCat){
             item.classList.add('show')
         }
         else{
            item.classList.remove('show')
         }        
     })
     portfolioItem = document.querySelectorAll('.item.show .box');
}
filter(document.querySelector('.filter-btn.active'))




let itemsIndex;
document.addEventListener('click', el =>{
    if(el.target.closest('.item .box')){
        const currentItem = el.target.closest('.item .box')
        itemsIndex = Array.from(portfolioItem).indexOf(currentItem);
        togglePopUp()
        itemsDetails()
        prevBtn()
    }
})

//  show Item details

function togglePopUp(){
    document.querySelector('.hidden-item').classList.toggle('open')
    stopOverflow()
}


//  closeButton
document.querySelector('.close-btn').onclick = togglePopUp;


function itemsDetails(){
    document.querySelector('.header img').src = portfolioItem[itemsIndex].querySelector('.main img').src;
    document.querySelector('.header h3').innerHTML = portfolioItem[itemsIndex].querySelector('.info-title .title').innerHTML;
    document.querySelector('.conter p').innerHTML = `${itemsIndex+1} of ${portfolioItem.length} (<span>${document.querySelector('.filter-btn.active').innerHTML}</span>)`
}

function prevBtn(){
    if(itemsIndex !== 0){
        document.querySelector('.left').classList.remove('hidden');
        document.querySelector('.left img').src = portfolioItem[itemsIndex-1].querySelector('img').src;
        document.querySelector('.left h4').innerHTML = portfolioItem[itemsIndex-1].querySelector('.info-title .title').innerHTML;
    }
    else{
        document.querySelector('.left').classList.add('hidden');
    }
    if(itemsIndex !== portfolioItem.length-1){
        document.querySelector('.right').classList.remove('hidden');
        document.querySelector('.right img').src = portfolioItem[itemsIndex+1].querySelector('img').src;
        document.querySelector('.right h4').innerHTML = portfolioItem[itemsIndex+1].querySelector('.info-title .title').innerHTML;
    }
    else{
        document.querySelector('.right').classList.add('hidden');
    }
}

document.querySelector('.prv').addEventListener('click', ()=>{
    changeDire('prv')
})
document.querySelector('.next').addEventListener('click', ()=>{
    changeDire('next')
})

function changeDire(direction){
    if(direction === 'prv'){
        itemsIndex--;
    }
    else{
        itemsIndex++;
    }
    document.querySelector('.overlay').classList.add(direction)
    setTimeout(()=>{
            itemsDetails()
            prevBtn()
    },400)

    setTimeout(()=>{
            document.querySelector('.overlay').classList.remove(direction)
    },800)
}

document.addEventListener('click', (el)=>{
    if(el.target.classList.contains('btn-forms')){
        document.querySelector('.forms').classList.toggle('open')
        el.stopPropagation()
    }
})

const bttt = document.querySelector('.toggle-btn')

bttt.addEventListener('click', ()=>{
    bttt.classList.toggle('active')
    document.querySelector('.nav').classList.toggle('show')
})

const scrollink = document.querySelectorAll('.linkkk')

scrollink.forEach((link)=>{
    link.addEventListener('click',(e) =>{
               e.preventDefault()
               document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
                    top: 0,
                    behavior : 'smooth',
                })
                if(document.querySelector('.nav').classList.contains('show')){
                     document.querySelector('.nav').classList.toggle('show')
                }
               
            })
      
})