let input = document.querySelector('.add-task input');
let plusBtn = document.querySelector('.add-task .plus');
let tasks = document.querySelector('.tasks-content');
let notask = document.querySelector('.no-tasks-message');
let tasksCount = document.querySelector('.tasks-count span')
let tasksCompleted = document.querySelector('.tasks-completed span')
const btns = document.querySelectorAll('.btn')


window.addEventListener('load',function() {
    input.focus()
})

plusBtn.addEventListener('click', function() {
    if(input.value === ""){
        console.log(`it's empty`)
    }else {
        notask.remove()
        let mainspan = document.createElement('span');
        let deletespan = document.createElement('span');
        let text = document.createTextNode(input.value)
        let deletetext = document.createTextNode('Delete')

        mainspan.appendChild(text)
        mainspan.className = "task-box"
        deletespan.appendChild(deletetext)
        deletespan.className = "delete"
        mainspan.appendChild(deletespan)
        tasks.appendChild(mainspan)
        input.value = "";
        input.focus()

        btns.forEach(function(btn){
            btn.addEventListener('click', function(ele){
                // console.log(ele)
              if (ele.currentTarget.classList.contains('deleteall')){
                 mainspan.remove()
              }
              else if (ele.currentTarget.classList.contains('fenishedall')){
                  mainspan.classList.add('finished')
              }
        })
        })
    }
})

document.addEventListener('click', function (e) {
    if (e.target.className == 'delete'){
        console.log( e.target.parentNode)
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains('task-box')){
        console.log( e.target.parentNode)
        e.target.classList.toggle('finished');
    }
    Calculate()
})

function Calculate(){
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  
}