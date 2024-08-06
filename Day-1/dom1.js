let body = document.body;

let paragraphs = [
    'Israel and Hezbollah trade strikes as tensions simmer',
    'Global markets jittery after sharp share price falls',
]

for (let i = 0; i < paragraphs.length; i++) {
    let p = document.createElement("p")

    p.textContent = paragraphs[i];
    body.appendChild(p);
}

let button = document.createElement("button")
button.innerText = "Click me"
let ps = document.getElementsByTagName("p");


button.addEventListener("click", function(){

    for (let i = 0; i < ps.length; i++) {
        ps[i].style.fontSize = (parseInt(window.getComputedStyle(ps[i]).fontSize) + 2) + "px";
    }
})

body.appendChild(button)


