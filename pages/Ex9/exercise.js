//Подключение классов
const textButtons = document.querySelectorAll(".text")
const wordsDiv = document.querySelectorAll(".wordsDiv")
const backMain = document.getElementById('backMain')
const offers = document.querySelectorAll(".offers")
const checkButton = document.getElementById('check')
const wordChecks = document.querySelectorAll('.wordChecks')
let beforeDiv = -1;
let choiceIndex = -1;
let right_answers = 0;

for (let i = 0; i < textButtons.length; i++) {
    textButtons[i].addEventListener('click',()=>{
        if (choiceIndex==-1) {
            wordsDiv[i].style.display = 'block'
            if (beforeDiv!=-1) {
                wordsDiv[beforeDiv].style.display = 'none'
            }
            if (beforeDiv == i) {
                beforeDiv = -1
            }else{
                beforeDiv = i
                choiceIndex = i
            }
        }
        
    })
}
for (let i = 1; i <= textButtons.length; i++) {
    const check = document.querySelectorAll(`.check${i}`)
    const words = document.querySelectorAll(`.words${i}`)
    for (let j = 0; j < check.length; j++) {
        check[j].addEventListener('click',()=>{
            choiceIndex = -1
            if (check[j].checked) {
                var text = textButtons[beforeDiv].childNodes[0];
                text.nodeValue = words[j].textContent
            }
        })
    }
}

addEventListener('contextmenu',()=>{
    console.log(choiceIndex)
})

checkButton.addEventListener('click',()=>{
    checkButton.disabled = true;
    let rightChecks = [0,0,1,1,1,0]
    for (let i = 0; i < rightChecks.length; i++) {
        textButtons[i].disabled = true
        wordsDiv[i].style.display = 'none'
        if(document.querySelectorAll(`.check${i+1}`)[rightChecks[i]].checked){
            textButtons[i].style.backgroundColor = 'green'
            right_answers++
        }else{
            textButtons[i].style.backgroundColor = 'red'
        }
    }
    for (let i = 0; i < textButtons.length; i++) {
        var check = document.getElementsByName(`${i+1}`);
        for(var j=0;j<check.length;j++){
            check[j].checked = false;
        }
    }
    backMain.disabled = true;
    setTimeout(() => {
        if (localStorage.getItem('level')<10) {
            localStorage.setItem('level', 10);
        }
        var object = JSON.parse (localStorage.getItem('levelsComplate'));
        object[8] = right_answers;
        localStorage.setItem('levelsComplate', JSON.stringify(object));
        location.href = "../Ex10/exercise.html"
    }, 2000);
})