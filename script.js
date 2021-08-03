let hideBtn = document.querySelector('.cookies__hide')
let cookiesBlock = document.querySelector('.cookies')

hideBtn.addEventListener('click', () => {
    removeEl(cookiesBlock)
})

let detailsBtn = document.querySelector('.main-block__details')
let mainTitle = document.querySelector('.main-block__title')
let mainBlock = document.querySelector('.main-block__container')

function upBlock(perc) {
    mainBlock.style.transition = '.5s'
    mainBlock.style.top = perc
}

function reduceTitle() {
    mainTitle.style.transition = '.5s'
    mainTitle.style.lineHeight = '80px'
}

function leftDetailsBtn() {
    detailsBtn.style.left = '47.5%'
}

function hideEl(e) {
    e.style.opacity = '0'
}

function removeEl(e) {
    e.style.display = 'none'
}

function displayEl(e) {
    e.style.display = 'block'
}

function showEl(e) {
    e.style.transitionDuration = '.7s'
    e.style.opacity = '1'
}

detailsBtn.addEventListener('click', () => {
    leftDetailsBtn()
    setTimeout(upBlock, 100, '20%')
    setTimeout(hideEl, 200, detailsBtn)
    setTimeout(removeEl, 800, detailsBtn)
    setTimeout(reduceTitle, 100)
    displayEl(quizBlock)
    setTimeout(showEl, 400, quizBlock)
})

let quizBtn = document.querySelector('.start-quiz-btn')
let quizBlock = document.querySelector('.start-quiz')

function upTitle() {
    mainTitle.style.top = '-50%'
}

let quizQ1 = document.querySelector('.quiz-q1')

quizBtn.addEventListener('click', () => {
    setTimeout(upTitle, 100)
    setTimeout(upBlock, 200, '-50%')

    setTimeout(removeEl, 400, mainTitle)
    setTimeout(removeEl, 400, mainBlock)

    setTimeout(hideEl, 100, quizBlock)
    setTimeout(removeEl, 400, quizBlock)

    setTimeout(displayEl, 100, quizQ1)
    setTimeout(showEl, 400, quizQ1)
})

let answersQ1 = document.querySelectorAll('.q1-answer')
let answersQ2 = document.querySelectorAll('.q2-answer')
let answersQ3 = document.querySelectorAll('.q3-answer')
let answersQ4 = document.querySelectorAll('.q4-answer')

let quizQ2 = document.querySelector('.quiz-q2')
let quizQ3 = document.querySelector('.quiz-q3')
let quizQ4 = document.querySelector('.quiz-q4')
let quizQ5 = document.querySelector('.quiz-q5')
let quizQ6 = document.querySelector('.quiz-q6')

let returnToQ1 = document.querySelector('.q2-return-btn')
let returnToQ2 = document.querySelector('.q3-return-btn')
let returnToQ3 = document.querySelector('.q4-return-btn')

let toQ6Btn = document.querySelector('.q5-next-btn')

function paging(nextQuiz, currentAns, currentQuiz, retrn) {
    if(currentAns || currentAns > 0 || currentAns !== undefined || currentAns !== null) {
        for(let i = 0; i < currentAns.length; i++) {
            currentAns[i].addEventListener('click', () => {
                hideEl(currentQuiz)
                setTimeout(removeEl, 500, currentQuiz)
                displayEl(nextQuiz)
                setTimeout(showEl, 300, nextQuiz)
                if(retrn || retrn !== undefined || retrn !== null || retrn !== ' ') {
                    retrn.addEventListener('click', () => {
                        setTimeout(hideEl, 200, nextQuiz)
                        setTimeout(removeEl, 550, nextQuiz)
                        displayEl(currentQuiz)
                        setTimeout(showEl, 500, currentQuiz)
                    })
                }
            })
        }   
    }
}

toQ6Btn.addEventListener('click', () => {
            hideEl(quizQ5)
            setTimeout(removeEl, 500, quizQ5)
            displayEl(quizQ6)
            setTimeout(showEl, 300, quizQ6)
        })

paging(quizQ2, answersQ1, quizQ1, returnToQ1);
paging(quizQ3, answersQ2, quizQ2, returnToQ2);
paging(quizQ4, answersQ3, quizQ3, returnToQ3);
paging(quizQ5, answersQ4, quizQ4);