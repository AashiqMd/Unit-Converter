let scoreHome = 0
let scoreGuest = 0

let homeElement = document.getElementById("home")
let guestElement = document.getElementById("guest")

function updateh1() {
    scoreHome += 1
    homeElement.textContent = scoreHome
    console.log(scoreHome)
}

function updateh2() {
    scoreHome += 2
    homeElement.textContent = scoreHome
    console.log(scoreHome)
}

function updateh3() {
    scoreHome += 3
    homeElement.textContent = scoreHome
    console.log(scoreHome)
}

function updateg1() {
    scoreGuest += 1
    guestElement.textContent = scoreGuest
    console.log(scoreGuest)
}

function updateg2() {
    scoreGuest += 2
    guestElement.textContent = scoreGuest
    console.log(scoreGuest)
}

function updateg3() {
    scoreGuest += 3
    guestElement.textContent = scoreGuest
    console.log(scoreGuest)
}

function newGame()
{
    scoreHome = 0
    scoreGuest = 0
    homeElement.textContent = scoreHome
    guestElement.textContent = scoreGuest
}