// const colors = ["rgb(133,122,200)", "#f15025", "yellow", "#5ce1e6"];
const hex = [ 0, 1, 2, 3, 4, 5, 6, 8, 9, "A", "B", "C", "D", "E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function(){
    let hexCol = "#";
    for (let i = 0;  i < 6; i++){

    hexCol += hex[getRondomNum()];
    // console.log(hexCol);
    }
    // const rondomNumber = getRondomNum();
    color.textContent = hexCol;
    document.body.style.backgroundColor = hexCol;
    // console.log(getRondomNum())
    
})

function getRondomNum(){
    return Math.floor (Math.random() * hex.length);
}