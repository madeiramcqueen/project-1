// clickCount counts the player's amount of clicks
clickCount = 0

//firstCatCard is the div of the first card clicked (initialized as null)
let firstCatCard = null

// SELECTED ELEMENTS
// Card is an array of card divs, representing the game-board
const cards = document.querySelectorAll('.card')
const playAgain = document.getElementById('play-again')

// VARIABLES
const catByCards = ['a', 'a', 'b', 'b', 'c', 'c', 'd',
    'd', 'e', 'e', 'f', 'f']

const meowAudio = new Audio('audio/kikiMeow.mp3')
const awwAudio = new Audio('audio/aww.mp3')

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

    //count the clicks
    clickCount = clickCount + 1
    document.getElementById('clicksButton').innerText = 'Click Count: ' + clickCount

    //check to see if it's the first card case
    if (firstCatCard === null) {
        //FIRST CARD CASE
        firstCatCard = card
        console.log('first card case!')

    } else {
        //SECOND CARD CASE
        const firstCat = catByCards[firstCatCard.innerText]
        const secondCat = catByCards[card.innerText]

        //check to see if the cards are a match
        if (firstCat === secondCat) {
            //if they match do nothing
            console.log('the cards match!')
            //set meow audio
            meowAudio.play()

        } else {
            //turn both over if not a match
            setTimeout(flipCardBack, 2000, card)
            setTimeout(flipCardBack, 2000, firstCatCard)
            console.log('cards do not match')
            //set aww audio
            awwAudio.play()
        }
        //initialize firstCatCard as null again
        firstCatCard = null
    }
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

// EVENT LISTENERS
cards.forEach(function (card) {
    card.addEventListener('click', onClick)
})

/* STILL NEED TO DO
- audio for matching cards
- audio for non-matching cards
- audio for winning game
- audio for losing game

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
*/