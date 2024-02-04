const start = document.getElementById("start_button")
const resume = document.getElementById("resume_button")
let level = 1;

if (localStorage.getItem('level')>1) {
    resume.disabled = false;
}
start.addEventListener('click',()=>{
    localStorage.setItem('level', level);
    location.href = "./pages/Ex1/exercise1.html"
})

resume.addEventListener('click',()=>{
    let ex = localStorage.getItem('level')
    location.href = `./pages/Ex${ex}/exercise${ex}.html`
})