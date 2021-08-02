let hideBtn = document.querySelector('.cookies__hide')
let cookiesBlock = document.querySelector('.cookies')

hideBtn.addEventListener('click', () => {
    cookiesBlock.remove()
})