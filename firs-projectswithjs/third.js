const review = [
    {
        idd : 1,
        img : "../mouad/pexels-david-geib-3268732.jpg",
        author : "Mouad elAli",
        job : "web development",
        info : "Old education him departure any arranging one prevailed. Their end whole might"
    },
    {
        idd : 2,
        img : "../mouad/pexels-thaís-silva-3135649 (1).jpg",
        author : "madiha sh",
        job : "talented girl",
        info : "Comfort reached gay perhaps chamber his six detract besides add"
    },
    {
        idd : 3,
        img : "../mouad/pexels-thgusstavo-santana-2809652.jpg",
        author : "oktawia poland",
        job : "piano player",
        info : "Post no so what deal evil rent by real in. But her ready least set lived spite solid."
    }
]

const pbtn  = document.querySelector(".prev-btn");
const nbtn  = document.querySelector(".next-btn");
const image = document.getElementById("img");
const info = document.getElementById("info");
const job = document.getElementById("job");
const author = document.getElementById("author");

let current = 0;

window.addEventListener("DOMContentLoaded", function(){
    // console.log("mouad i love you");
    showItem(current)
});

  function showItem(person){
    const items = review[person];
    image.src = items.img;
    job.textContent = items.job;
    info.textContent = items.info;
    author.textContent = items.author;
  };

  nbtn.addEventListener('click', function(){
      current++;
      if(current > review.length -1){
        current = 0;
    }
      showItem(current);
  })
  pbtn.addEventListener('click', function(){
      current--;
      if(current < 0){
      current =review.length -1;
      }
      showItem(current);
  })