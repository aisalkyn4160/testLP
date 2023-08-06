const burgerBtn = document.querySelector('.burger')
      navmenu = document.querySelector('.navMenu')
let header = document.querySelector('.header')
      headerHeight = document.querySelector('.header').clientHeight
     

document.onscroll = function() {
    let scrollY = window.scrollY
    let scrollX = window.scrollX


    if (scrollY > headerHeight) {
        header.classList.add('headerOnScroll')
    } else{
        header.classList.remove('headerOnScroll')
    }
}


burgerBtn.onclick = function() {
    burgerBtn.classList.toggle('active')
    navmenu.classList.toggle('active')
}
