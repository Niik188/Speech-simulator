//Подключение классов
const checkButton = document.getElementById('check')
const wordChecks = document.querySelectorAll('.wordChecks')
const backMain = document.getElementById('backMain')
const words = document.querySelectorAll('.words')
let right_answers = 0;

checkButton.addEventListener('click',()=>{
    checkButton.disabled = true;
    let rightOffer1 = [0,0,1,0,0,1,1,1]
    for (let i = 0; i < rightOffer1.length; i++) {
        if (wordChecks[i].checked&&rightOffer1[i]==1||!wordChecks[i].checked&&rightOffer1[i]==0) {
            words[i].style.color = 'green'
            words[i].style.webkitTextStroke = '1px black'
            right_answers++
        }else{
            words[i].style.color = 'red'
            words[i].style.webkitTextStroke = '1px black'
        }
        wordChecks[i].disabled = true;
    }
    for (let i = 0; i < wordChecks.length; i++) {
        wordChecks[i].checked = false;
    }
    backMain.disabled = true;
    setTimeout(() => {
        if (localStorage.getItem('level')<5) {
            localStorage.setItem('level', 5);
        }
        var object = JSON.parse (localStorage.getItem('levelsComplate'));
        object[3] = right_answers;
        localStorage.setItem('levelsComplate', JSON.stringify(object));
        location.href = "../Ex5/exercise.html"
    }, 2000);
})