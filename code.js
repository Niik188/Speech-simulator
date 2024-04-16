const start = document.getElementById("start_button")
const reset = document.getElementById("reset_button")
const resume = document.getElementById("resume_button")
const result = document.getElementById("resultButton")
const source = document.getElementById("sourceButton")
const choice = document.getElementById("choice")
const save = document.getElementById("save")
const name1 = document.getElementById("name")
const subname = document.getElementById("subname")
const menu = document.querySelector(".menu")
let level = 1;      //1,2,3,4,5,6,7,8,9,10
let levelsComplate = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

if (localStorage.getItem('name')!=null&&localStorage.getItem('subname')!=null) {
    name1.disabled = true
    subname.disabled = true
    save.disabled = true
}

if (localStorage.getItem('level')>1) {
    resume.disabled = false;
    choice.disabled = false;
    start.disabled = true;
    start.textContent = "Доступно при очистке прогресса"
    reset.disabled = false;
    reset.textContent = "Очистить прогресс"
    choice.max = localStorage.getItem('level');
}

if (localStorage.getItem('level')==10) {
    result.disabled = false;
    source.disabled = false;
    document.body.style.backgroundImage = 'url(https://media.dayoftheshirt.com/images/shirts/58TvU/dbh_house-cat-rainbow-dj-kitty_1537759894.large.png)'
    menu.childNodes[1].textContent = "Интерактивное пособие"
}else if (localStorage.getItem('level')<10) {
    result.textContent = "Доступно при полном прохождении"
    source.textContent = "Доступно при полном прохождении"
}

function tick(){
    var object = JSON.parse (localStorage.getItem('levelsComplate'));
    if (object != null) {
        if (choice.value>10||choice.value<1) {
            choice.value = 1
        }
        if (object[choice.value-1] > 0) {
            choice.style.backgroundColor = 'green'
        }
        if (object[choice.value-1] == 0) {
            choice.style.backgroundColor = 'red'
        }
        if (object[choice.value-1] == -1) {
            choice.style.backgroundColor = 'white'
        }
    }
    
    requestAnimationFrame(tick)
}

tick()

start.addEventListener('click',()=>{
    if (localStorage.getItem('name')!=null&&localStorage.getItem('subname')!=null) {
        localStorage.setItem('level', level);
        localStorage.setItem('levelsComplate', JSON.stringify(levelsComplate));
        location.href = "./pages/Ex1/exercise.html"
    }else{
        name1.style.backgroundColor = "red"
        subname.style.backgroundColor = "red"
    }
    
})

resume.addEventListener('click',()=>{
    let ex = choice.value
    location.href = `./pages/Ex${ex}/exercise.html`
})

save.addEventListener('click',()=>{
    if (name1.value!=""&&subname.value!="") {
        localStorage.setItem('name', name1.value);
        localStorage.setItem('subname', subname.value);
        name1.disabled = true
        subname.disabled = true
        save.disabled = true
    }
})

reset.addEventListener('click',()=>{
    var alert = confirm("Вы точно хотите очистить прогресс?")
    if (alert) {
        localStorage.clear();
        location.reload();
    }
})