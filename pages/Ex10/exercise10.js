//Подключение классов
const playSound = document.getElementById('playSound')
const sound = document.getElementById('sound')
const wordChecks = document.querySelectorAll('.wordChecks')
const words = document.querySelectorAll('.words')

playSound.addEventListener('click',()=>{
    if (sound.paused) {
        playSound.textContent = ""
        setTimeout(() => {
            sound.play()
            showTexts()
        }, 1000);
    }
})

let indexWord = 0;
function showTexts() {
    if (indexWord<words.length) {
        setTimeout(() => {
            words[indexWord].style.display = "block"
            indexWord++
            showTexts()
        }, 2000);
    }
}

// checkButton.addEventListener('click',()=>{
//     let rightOffer1 = [0,1]
//     rightOffer1.forEach(i => {
//         if (wordChecks[i].checked) {
//             words[i].style.color = 'green'
//             words[i].style.webkitTextStroke = '1px black'
//         }else{
//             words[i].style.color = 'red'
//             words[i].style.webkitTextStroke = '1px black'
//         }
//         wordChecks[i].disabled = true;
//     });
//     setTimeout(() => {
//         localStorage.setItem('level', 5);
//         location.href = "../Ex5/exercise5.html"
//     }, 2000);
// })