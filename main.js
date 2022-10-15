// clickCount counts the player's amount of clicks
clickCount = 0

// SELECTED ELEMENTS
// Card is an array of card divs, representing the game-board
const cards = document.querySelectorAll('.card')

// FUNCTIONS

function renderGame() {
    //code here
}

function onClick() {
    console.log('card has been clicked!')
}

function clickCount() {
    return clickCount++
}

function cardsMatch() {
    //code here
    //add meow audio
}

function flipOver() {
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