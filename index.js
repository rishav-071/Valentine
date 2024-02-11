let img = document.querySelector("#img")
let yes = document.querySelector('#yes')
let no = document.querySelector('#no')
let p = document.querySelector('#p')
let body = document.querySelector('body')
let count = 1
let i=0

no.addEventListener("click", () => {
    count++
    switch (count) {
        case 2:
            img.src = "img3.gif"
            p.innerText = "Plz cutie Plz"
            break
        case 3:
            img.src = "img4.gif"
            p.innerText = "Plz My cutu"
            break
        case 4:
            img.src = "img5.gif"
            p.innerText = "Plz cutie"
            break
        case 5:
            img.src = "img6.gif"
            p.innerText = "Plz Plz Plz Plz"
            break
    }
    no.style.width = String(20 / count) + "vw"
    no.style.height = String(10 / count) + "vw"
    no.style.fontSize = String(8 / count) + "vw"
    if(count>=5) no.style.display ="none"
});
yes.addEventListener("click", () => {
    no.style.display ="none"
    yes.style.display ="none"
    p.innerText = "Yaaaaaayyyy..........."
    img.src = "img1.gif"
    body.style.backgroundColor = "rgba(251, 145, 251, 0.766)"
    time()
});

setTimeout(() => {
    yes.style.display = "inline"
    no.style.display = "inline"
    p.innerText = "So, Will YOU be my VALENTINE"
    img.src = "img8.gif"
}, 6750)

setTimeout(() => {
    img.src = "img9.gif"
}, 3000)

function time(){
    setInterval(() => {
        if(i%3==0) img.src = "img1.gif"
        if(i%3==1) img.src = "img2.gif"
        if(i%3==2) img.src = "img7.gif"
        i++
    }, 3000)
}
