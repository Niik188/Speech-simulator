//Подключение классов
const offers = document.querySelectorAll('.offers')
const offerDiv = document.getElementById('offerDiv')
const backMain = document.getElementById('backMain')
const corrects = document.querySelector(".True")
const uncorrects = document.querySelector(".False")
const checkButton = document.getElementById('check')
let right_answers = 0;

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
   event.preventDefault();
}
   
function onDrop(event) {
   var id = event.dataTransfer.getData('text');
   var draggableElement = document.getElementById(id);
   var dropzone = event.target;
   if (dropzone.className.indexOf('drop') != -1) {
        dropzone.appendChild(draggableElement);
   }
   if(dropzone.parentNode.className.indexOf('drop') != -1){
        dropzone.parentNode.appendChild(draggableElement);
   }
   event.dataTransfer.clearData(); 
}

checkButton.addEventListener('click',()=>{
    checkButton.disabled = true;
    //Правильно
    let rightOffer1 = [false,true,true,false,true,true,false,false,true,false]
    for (let i = 0; i < rightOffer1.length; i++) {
        offers[i].draggable = false
        if (offers[i].parentNode==corrects&&rightOffer1[i]){
            offers[i].style.color = 'green'
            offers[i].style.webkitTextStroke = '1px black'
            right_answers++
        }else if(offers[i].parentNode!=corrects&&rightOffer1[i]){
            offers[i].style.color = 'red'
            offers[i].style.webkitTextStroke = '1px black'
        }
    }

    //Ошибочно
    let rightOffer2 = rightOffer1.map(b => !b)
    for (let i = 0; i < rightOffer2.length; i++) {
        if (offers[i].parentNode==uncorrects&&rightOffer2[i]){
            offers[i].style.color = 'green'
            offers[i].style.webkitTextStroke = '1px black'
            right_answers++
        }else if(offers[i].parentNode!=uncorrects&&rightOffer2[i]){
            offers[i].style.color = 'red'
            offers[i].style.webkitTextStroke = '1px black'
        }
    }

    backMain.disabled = true;
    setTimeout(() => {
        if (localStorage.getItem('level')<2) {
            localStorage.setItem('level', 2);
        }
        var object = JSON.parse (localStorage.getItem('levelsComplate'));
        object[0] = right_answers;
        localStorage.setItem('levelsComplate', JSON.stringify(object));
        location.href = "../Ex2/exercise.html"
    }, 2000);
})