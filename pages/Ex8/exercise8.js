//Подключение классов
const textButtons = document.querySelectorAll(".text")
const wordsDiv = document.querySelectorAll(".wordsDiv")
const offers = document.querySelectorAll(".offers")
const checkButton = document.getElementById('check')
const wordChecks = document.querySelectorAll('.wordChecks')
let beforeDiv = -1;

for (let i = 0; i < textButtons.length; i++) {
    textButtons[i].addEventListener('click',()=>{
        wordsDiv[i].style.display = 'block'
        if (beforeDiv!=-1) {
            wordsDiv[beforeDiv].style.display = 'none'
        }
        if (beforeDiv == i) {
            beforeDiv = -1
        }else{
            beforeDiv = i
        }
    })
}
for (let i = 1; i <= 6; i++) {
    const check = document.querySelectorAll(`.check${i}`)
    const words = document.querySelectorAll(`.words${i}`)
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click',()=>{
            if (check[i].checked) {
                textButtons[beforeDiv].textContent = words[i].textContent
            }
        })
    }
}

checkButton.addEventListener('click',()=>{
    let rightChecks = [0,0,1,0,1,0]
    for (let i = 0; i < rightChecks.length; i++) {
        textButtons[i].disabled = true
        wordsDiv[i].style.display = 'none'
        if(document.querySelectorAll(`.check${i+1}`)[rightChecks[i]].checked){
            textButtons[i].style.backgroundColor = 'green'
        }else{
            textButtons[i].style.backgroundColor = 'red'
        }
    }
    setTimeout(() => {
        localStorage.setItem('level', 9);
        location.href = "../Ex9/exercise9.html"
    }, 2000);
})