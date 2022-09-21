let html = document.querySelector("div#html")
let css = document.querySelector("div#css")
let js = document.querySelector("div#js")
html.addEventListener("mouseenter", entrar)
html.addEventListener("mouseout", saiu)
css.addEventListener("mouseenter", entroucss)
css.addEventListener("mouseout", saiucss)
js.addEventListener("mouseenter", entroujs)
js.addEventListener("mouseout", saiujs)
function entrar(){document.body.style.background="orange"}
function saiu(){document.body.style.background="white"}
function entroucss(){document.body.style.background="blue"}
function saiucss(){document.body.style.background="white"}
function entroujs(){document.body.style.background="yellow"}
function saiujs(){document.body.style.background="white"}
function clicar(){
    let txt = document.getElementById("resultado")
    txt.innerHTML = `A tecnologia preferida é .....<strong>Javascript</strong> !`
    document.body.style.background = "yellow"
}