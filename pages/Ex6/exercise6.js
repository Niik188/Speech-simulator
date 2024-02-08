//Подключение классов
const checkButton = document.getElementById('check')
const wordChecks = document.querySelectorAll('.wordChecks')
const words = document.querySelectorAll('.words')

checkButton.addEventListener('click',()=>{
    let rightOffer1 = [0,1]
    rightOffer1.forEach(i => {
        if (wordChecks[i].checked) {
            words[i].style.color = 'green'
            words[i].style.webkitTextStroke = '1px black'
        }else{
            words[i].style.color = 'red'
            words[i].style.webkitTextStroke = '1px black'
        }
        wordChecks[i].disabled = true;
    });
    setTimeout(() => {
        location.href = "../Ex6-1/exercise.html"
    }, 2000);
})