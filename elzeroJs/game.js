const btn = document.querySelector('.btn')
const name = document.querySelector('.info-container span')
let duration = 1000;
const blockcontainer = document.querySelector('.memory-game-container')
let tries = document.querySelector('.tries span')
const bloks = Array.from(blockcontainer.children)
const orderRange = [...Array(bloks.length).keys()]
shuffle(orderRange);


btn.addEventListener('click', function(){
   const userName = prompt('Enter Your Name Pls')
    if (userName == null || userName ==""){
        name.textContent = "unknown"
    }else {
        name.textContent = userName;
    }
    btn.parentElement.remove();

    bloks.forEach((bloock) => {
         helpuser(bloock)
    })
    
})

// console.log(orderRange)

bloks.forEach((block, index) => {
    block.style.order = orderRange[index];
    block.addEventListener('click', function(){
        flip(block)
    })
   
})

function helpuser(bloks){
    bloks.classList.add('is-flipped')
    setTimeout(() =>{
        bloks.classList.remove('is-flipped')
    },3000)
}


function flip(selected){
    selected.classList.add('is-flipped')

    let allFlippedBlocks = bloks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if (allFlippedBlocks.length === 2){
        stopclicking()
        checkthematch(allFlippedBlocks[0], allFlippedBlocks[1])
    }
    
}


function stopclicking(){
        blockcontainer.classList.add('no-clicking')

    setTimeout(() => {
        blockcontainer.classList.remove('no-clicking')
        }, duration);
}

function checkthematch(firstblock, secondblock){
    if (firstblock.dataset.mou === secondblock.dataset.mou){
        firstblock.classList.remove('is-flipped')
        secondblock.classList.remove('is-flipped')

        firstblock.classList.add('has-match')
        secondblock.classList.add('has-match')
    }else {
        tries.innerHTML = parseInt(tries.innerHTML) + 1;
        setTimeout(() => {
             firstblock.classList.remove('is-flipped')
             secondblock.classList.remove('is-flipped')
        }, duration)
       
    }
    let allFlipedBloock = bloks.filter(flippedBloock => flippedBloock.classList.contains('has-match'));
    let msg =document.querySelector('.msg')
    if (allFlipedBloock.length === bloks.length){
        showwin()
        if (tries.innerHTML <= 10){            
            msg.textContent = 'you are a great player';       
         }else {
            msg.textContent = 'you won';                   
         }
       }

}
function showwin() {
    const winner = document.querySelector('.win')
      winner.style.display = "block";
}

function shuffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) { 
      random = Math.floor(Math.random() * current);
  
      // Decrease Length By One
      current--;
  
      // [1] Save Current Element in Stash
      temp = array[current]
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
    } 
    return array;
  }


