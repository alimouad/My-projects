const btn =  document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')


about.addEventListener('click', function(m){
    const id =m.target.dataset.id 
        btn.forEach(function(items){
            // console.log(items)
            items.classList.remove('active')
            // console.log(m.target)
            m.target.classList.add('active')
        })
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        // console.log(element)
        element.classList.add('active')
})

// btn.forEach(function(btns){
//     btns.addEventListener('click',function(m){
//     //   btns.target.classList.remove('active')
//       if (!m.currentTarget.classList.contains('active')){

//         m.currentTarget.classList.add('active')

//       }else {
//         m.classList.remove('active')
//       }
// })     
// })