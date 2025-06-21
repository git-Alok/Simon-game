let userpattern = []
let gamepattern = []
let begin = false
let level = 0
let h3 = document.querySelector("h3")
let btns = ["one", "two", "three", "four"]
document.addEventListener("keypress", function () {
    if (begin == false) {
        console.log("game started")
        begin = true
        levelup();
    }

})



function gameflash(btn) {
    btn.classList.add("white");
    setTimeout(function () {
        btn.classList.remove("white");
    }, 200)

}


function userflash(btn) {
    btn.classList.add("green");
    setTimeout(function () {
        btn.classList.remove("green");
    }, 200)

}


function levelup() {
    userpattern = []
    level++
    h3.innerText = `Level${level}`
    let randidx = Math.floor(Math.random() * 3);
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);
    gamepattern.push(randcol)
    console.log(gamepattern)
    gameflash(randbtn);

}


function choko(indexes) {
    if (userpattern[indexes] === gamepattern[indexes]) {
        if (userpattern.length == gamepattern.length) {
            setTimeout(levelup, 200)
        }
    }
    else {
        h3.innerHTML = `Game over!  Your score was <b> ${level} </b> <br> press any key to start`

        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"
        }, 180)

        reset()
    }

}




function btnpress() {
    let btn = this
    userflash(btn)
    let usercolor = btn.getAttribute("id")
    console.log(usercolor)
    userpattern.push(usercolor)
    choko(userpattern.length - 1)
}


let allbtns = document.querySelectorAll(".btn")
for (btno of allbtns) {
    btno.addEventListener("click", btnpress)
}

function reset() {
    userpattern = []
    gamepattern = []
    begin = false
    level = 0
}






