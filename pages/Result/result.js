//Подключение классов
const exercises = document.querySelectorAll('.exScore')
const allScore = document.getElementById('allScore')
const estimation = document.getElementById('estimation')
const name1 = document.getElementById('name')

name1.textContent = localStorage.getItem('subname') + " " + localStorage.getItem('name')
document.addEventListener('DOMContentLoaded', function(){ 
    if (localStorage.getItem('level')<10) {
        alert("Тебе тут нельзя! Но молодец за смекалку")
        location.href = "../../index.html"
    }
})

var object = JSON.parse (localStorage.getItem('levelsComplate'));
var sum = 0;
for (let i = 0; i < exercises.length; i++) {
    if (object[i] != -1) {
        if (object[i]>=5||object[i]==0) {
            exercises[i].textContent = object[i] + " баллов"
        }
        if (object[i] % 2 == 0&&object[i]<5&&object[i]!=0) {
            exercises[i].textContent = object[i] + " балла"
        }
        if (object[i] % 2 != 0&&object[i]<5) {
            exercises[i].textContent = object[i] + " балл"
        }
        sum += object[i]
    }else{
        exercises[i].textContent = "не выполнено"
    }
}

if (sum>5||sum==0) {
    if (sum>5||sum==0) {
        allScore.textContent = sum + " баллов"
    }
    if (sum % 2 == 0&&sum<5&&sum!=0) {
        allScore.textContent = sum + " балла"
    }
    if (sum % 2 != 0&&sum<5) {
        allScore.textContent = sum + " балл"
    }
}

if ((sum >= 80 && sum <= 100) || sum > 100) {
    estimation.textContent = "5"
}
if (sum >= 60 && sum <= 79) {
    estimation.textContent = "4"
}
if (sum >= 40 && sum <= 59) {
    estimation.textContent = "3"
}
if (sum <= 39) {
    estimation.textContent = "2"
}