// clickCount counts the player's amount of clicks
clickCount = 0

// SELECTED ELEMENTS
// Card is an array of card divs, representing the game-board
const cards = document.querySelectorAll('.card')

// FUNCTIONS

function renderGame() {
    //code here
}

const onClick = function(event) {
    console.log(event.target)
    //flip the card
    flipCardUp(event.target)
    //ard is flipped for 2 seconds
    setTimeout(flipCardBack, 2000, event.target)
}

const flipCardUp = function (card) {
    card.classList.remove('card-back')

}
//flip the card back over NOT WORKING
const flipCardBack = function (card) {
    card.classList.add('card-back')
}

function clickCount() {
    return clickCount++
    console.log(clickCount)
}

function cardsMatch() {
    //code here
    //add meow audio
}

function doNotMatch() {
    //code here
    //add hissing audio element
}

function winner() {
    //code here
    //add winner audio element

}

function loser() {
    //code here
    //add loser audio element
}

function playAgain() {
    //code here
}

// EVENT LISTENERS
cards.forEach(function (card) {
    card.addEventListener('click', onClick)
})