// clickCount counts the player's amount of clicks
clickCount = 0

//firstCatCard is the div of the first card clicked (initialized as null)
let firstCatCard = null

// SELECTED ELEMENTS
// Cards is an array of card divs, representing the game-board
const cards = document.querySelectorAll('.card')
const playAgainButton = document.getElementById('play-again')

//catCards object, the key is the card id and the value is the cat
const catCards = {
    card0: 'bengal',
    card1: 'bombay',
    card2: 'burmese',
    card3: 'cyprus',
    card4: 'rex',
    card5: 'siamese',
    card6: 'burmese',
    card7: 'bombay',
    card8: 'cyprus',
    card9: 'bengal',
    card10: 'rex',
    card11: 'siamese'
}

// AUDIO
const matchingAudio = new Audio('audio/cardMatchMeow.mp3')
const noMatchAudio = new Audio('audio/noMatchAww.mp3')

// FUNCTIONS
function renderGame() {
    //code here
}

const onClick = function (event) {
    const card = event.target
    //flip the card
    flipCardUp(card)

    //count the clicks
    clickCount = clickCount + 1
    document.getElementById('clicksButton').innerText = 'Click Count: ' + clickCount

    //check to see if it's the first card case
    if (firstCatCard === null) {
        //FIRST CARD CASE
        firstCatCard = card

    } else {
        //SECOND CARD CASE
        const firstCat = catCards[firstCatCard.id]
        const secondCat = catCards[card.id]

        //check to see if the cards are a match
        if (firstCat === secondCat) {
            //if they match do nothing
            //set match audio
            matchingAudio.play()

        } else {
            //turn both over if not a match
            setTimeout(flipCardBack, 1000, card)
            setTimeout(flipCardBack, 1000, firstCatCard)
            //set noMatch audio
            noMatchAudio.play()
        }
        //initialize firstCatCard as null again
        firstCatCard = null

        if (clickCount >= 15) {
            alert('Better luck next time!')
            document.querySelector('ul').innerText = ''
            document.querySelector('h4').innerText = ''
            document.querySelector('h2').innerText = ''
            document.querySelector('h1').innerText = 'Uh-oh! Better luck next time!'
        }
    }
}
//flip the card facing up
const flipCardUp = function (card) {
    card.classList.remove('card-back')
}

//flip the card back over
const flipCardBack = function (card) {
    card.classList.add('card-back')
}
//restart game when the Play Again button is clicked
const playAgain = function () {
    clickCount = 0
    document.getElementById('clicksButton').innerText = 'Click Count: '
    firstCatCard = 0
    flipCardBack(document.getElementById('card0'))
    flipCardBack(document.getElementById('card1'))
    flipCardBack(document.getElementById('card2'))
    flipCardBack(document.getElementById('card3'))
    flipCardBack(document.getElementById('card4'))
    flipCardBack(document.getElementById('card5'))
    flipCardBack(document.getElementById('card6'))
    flipCardBack(document.getElementById('card7'))
    flipCardBack(document.getElementById('card8'))
    flipCardBack(document.getElementById('card9'))
    flipCardBack(document.getElementById('card10'))
    flipCardBack(document.getElementById('card11'))
}

// EVENT LISTENERS
cards.forEach(function (card) {
    card.addEventListener('click', onClick)
})

playAgainButton.addEventListener('click', playAgain)

