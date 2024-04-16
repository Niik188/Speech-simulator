//Подключение классов
const playButtons = document.querySelectorAll('.playButtons')
const backMain = document.getElementById('backMain')
const checkButton = document.getElementById('check')

let right_answers = 0;
let indexWord = [];
let temps = [1800,1500,1300];

for (let i = 0; i < playButtons.length; i++) {
    indexWord.push(0)
    console.log(indexWord)
    playButtons[i].addEventListener('click',()=>{
    var words = document.querySelectorAll(`.words${i+1}`)
    var sound = document.getElementById(`sound${i+1}`)
    if (sound.paused) {
        var text = playButtons[i].childNodes[0];
        text.nodeValue = "Запущен"
        sound.play()
        checkButton.disabled = true;
        playButtons.forEach(playButton => {
            playButton.disabled = true;
        });
        showTexts(words,playButtons[i],i)
    }
    })
}

function showTexts(words,playSound,index) {
    if (indexWord[index]<words.length) {
        setTimeout(() => {
            words[indexWord[index]].style.display = "block"
            indexWord[index]++
            showTexts(words,playSound,index)
        }, temps[index]);
    }else{
        var text = playSound.childNodes[0];
        text.nodeValue = "▶️Запустить аудио снова?"
        playButtons.forEach(playButton => {
            playButton.disabled = false;
        });
        checkButton.disabled = false;
        indexWord[index]=0;
    }
}

checkButton.addEventListener('click',()=>{
    checkButton.disabled = true;
    let rightOffers = [[0,0,1,1,0,0,0,1,0,0],[1,0,0,0,0,1,0,0,1,1],[1,0,0,0,0,1,1,1,0,0]]
    for (let i = 0; i < playButtons.length; i++) {
        var wordChecks = document.querySelectorAll(`.wordChecks${i+1}`)
        var words = document.querySelectorAll(`.words${i+1}`)
        var rightOffer = rightOffers[i]
        for (let j = 0; j < rightOffer.length; j++) {
            if (wordChecks[j].checked&&rightOffer[j] == 1||!wordChecks[j].checked&&rightOffer[j] == 0) {
                words[j].style.color = 'green'
                words[j].style.webkitTextStroke = '1px black'
                right_answers++
            }else{
                words[j].style.color = 'red'
                words[j].style.webkitTextStroke = '1px black'
            }
            wordChecks[j].disabled = true;
        }
        playButtons[i].disabled = true;
    }
    
    for (let i = 0; i < wordChecks.length; i++) {
        wordChecks[i].checked = false;
    }
    backMain.disabled = true;
    setTimeout(() => {
        var object = JSON.parse (localStorage.getItem('levelsComplate'));
        object[9] = right_answers;
        localStorage.setItem('levelsComplate', JSON.stringify(object));
        location.href = "../Ex10-1/exercise.html"
    }, 2000);
})