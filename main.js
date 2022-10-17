// clickCount counts the player's amount of clicks
clickCount = 0

// SELECTED ELEMENTS
// Card is an array of card divs, representing the game-board
const cards = document.querySelectorAll('.card')

// VARIABLES
const catByCards = ['a', 'a', 'b', 'b', 'c', 'c', 'd',
    'd', 'e', 'e', 'f', 'f']

// FUNCTIONS

function renderGame() {
    //code here
}

const onClick = function (event) {
    const card = event.target
    //console.log cat on card
    console.log(catByCards[card.innerText])
    //flip the card
    flipCardUp(card)
    //card is flipped for 2 seconds
    setTimeout(flipCardBack, 2000, card)
}

const flipCardUp = function (card) {
    card.classList.remove('card-back')
    card.classList.add('card-front')

}
//flip the card back over
const flipCardBack = function (card) {
    card.classList.add('card-back')
    card.classList.remove('card-front')
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