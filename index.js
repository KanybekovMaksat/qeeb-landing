let sliders = document.getElementsByClassName('categories__card')
let rightBtn = document.querySelector('.categories__controller-right');
let leftBtn = document.querySelector('.categories__controller-left');

sliders[5].style.display = 'none'

rightBtn.addEventListener('click', () => {
    sliders[0].style.display = 'none'
    sliders[5].style.display = 'flex'
})

leftBtn.addEventListener('click', () => {
    sliders[5].style.display = 'none'
    sliders[0].style.display = 'flex'
})