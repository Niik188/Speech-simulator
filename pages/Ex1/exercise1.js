//Подключение классов
const offers = document.querySelectorAll('.offers')
const offerDiv = document.getElementById('offerDiv')
const corrects = document.querySelector(".True")
const uncorrects = document.querySelector(".False")
const checkButton = document.getElementById('check')
let disableExercise = false;

for (let i = 0; i < offers.length; i++) {
    offers[i].addEventListener("click",()=>{
        if (offers[i].nodeName == 'H1'&&offers[i].parentNode == corrects&&!disableExercise) {
            offerDiv.appendChild(offers[i])
        }else if (offers[i].nodeName == 'H1'&&offers[i].parentNode == offerDiv&&!disableExercise) {
            corrects.appendChild(offers[i])
        }
        if (offers[i].nodeName == 'H1'&&offers[i].parentNode == uncorrects&&!disableExercise) {
            corrects.appendChild(offers[i])
        }
    })
    offers[i].addEventListener('contextmenu',()=>{
        if (offers[i].nodeName == 'H1'&&offers[i].parentNode == uncorrects&&!disableExercise) {
            offerDiv.appendChild(offers[i])
        }else if (offers[i].nodeName == 'H1'&&offers[i].parentNode == offerDiv&&!disableExercise) {
            uncorrects.appendChild(offers[i])
        }
        if (offers[i].nodeName == 'H1'&&offers[i].parentNode == corrects&&!disableExercise) {
            uncorrects.appendChild(offers[i])
        }
    })
}

checkButton.addEventListener('click',()=>{
    disableExercise = true;
    let rightOffer1 = [0]
    rightOffer1.forEach(i => {
        if (offers[i].parentNode==corrects) {
            offers[i].style.color = 'green'
            offers[i].style.webkitTextStroke = '1px black'
        }else{
            offers[i].style.color = 'red'
            offers[i].style.webkitTextStroke = '1px black'
        }
    })

    let rightOffer2 = [1]
    rightOffer2.forEach(i => {
        if (offers[i].parentNode==uncorrects) {
            offers[i].style.color = 'green'
            offers[i].style.webkitTextStroke = '1px black'
        }else{
            offers[i].style.color = 'red'
            offers[i].style.webkitTextStroke = '1px black'
        }
    })
    setTimeout(() => {
        localStorage.setItem('level', 2);
        location.href = "../Ex2/exercise2.html"
    }, 2000);
})