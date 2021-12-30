
let count = 0;

const btn =document.querySelectorAll(".btn");
const result = document.querySelector("#result");

btn.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click', function(l){


    //   bach njibo lclass dyal button li clickina 3lih
            //  console.log(l.currentTarget.classList); 
                  
        const styles = l.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }         
       else if (styles.contains("increase")){
           count++;
       }
       else {
           count = 0;
       }
       if (count > 0){
           result.style.color = "green"
       }
       else if (count < 0){
           result.style.color = "red"
       }
       if (count ==0 ){
           result.style.color = "#000"
       }
       result.textContent = count;
    } );
});