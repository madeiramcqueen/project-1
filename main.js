// INITIALIZED COUNTS
clickCount = 0
matchCount = 0
let firstCatCard = null

// SELECTED ELEMENTS
const cards = document.querySelectorAll('.card')
const playAgainButton = document.getElementById('play-again')

//catCards object, the key is the card div id and the value is the cat class
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
const matchingAudio = new Audio('audio/matchAudio.mp3')
const noMatchAudio = new Audio('audio/noMatchAudio.mp3')
const winAudio = new Audio('audio/winningAudio.mp3')
const loseAudio = new Audio('audio/loseAudio.mp3')

// FUNCTIONS

function wonGame() {
    return matchCount >= 12
}

function lostGame() {
    return clickCount >= 25
}

function isCardFaceUp(card) {
    return !card.classList.contains('card-back')
}

function swapCats(first, second) {
    const temp = catCards[first]
    catCards[first] = catCards[second]
    catCards[second] = temp
}

function shuffleCards() {
    const gameBoard = document.querySelector('.game-board')
    const cards = gameBoard.children

    // remove the cat class from all cards
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        //look up the cat id to get the cat class
        const cat = catCards[card.id]
        card.classList.remove(cat)
    }

    //shuffle cat cards **using Knuth's algorithm
    for (let i = cards.length - 1; i > 1; i--) {
        const first = i
        const second = Math.floor(Math.random() * i)
        const firstId = 'card' + first
        const secondId = 'card' + second
        swapCats(firstId, secondId)
    }

    //Add new cat class to all cards
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cat = catCards[card.id]
        card.classList.add(cat)
    }
}
shuffleCards()

function onClick(event) {
    if (lostGame() || wonGame()) {
        return
    }
    const card = event.target
    if (isCardFaceUp(card)) {
        return
    }
    //flip the card
    flipCardUp(card)

    //count the clicks and add clicks to button
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
            //incremement matchCount by 2
            matchCount += 2
            if (wonGame()) {
                //modify DOM to winner message
                document.querySelector('h1').innerText = 'Woohoo! You won!'
                console.log('you won!')
                //set winning audio
                winAudio.play()
            } else {
                //set match audio
                matchingAudio.play()
            }

        } else {
            //turn both over if not a match
            setTimeout(flipCardBack, 1000, card)
            setTimeout(flipCardBack, 1000, firstCatCard)
            //set noMatch audio
            noMatchAudio.play()
        }
        //initialize firstCatCard as null again
        firstCatCard = null
    }
    if (lostGame()) {
        document.querySelector('h1').innerText = 'Uh-oh! Better luck next time!'
        //set lose audio
        loseAudio.play()
    }
}
//flip the card facing up
function flipCardUp(card) {
    card.classList.remove('card-back')
}

//flip the card back over
function flipCardBack(card) {
    card.classList.add('card-back')
}

//restart game when the Play Again button is clicked
function playAgain() {
    clickCount = 0
    matchCount = 0
    firstCatCard = null
    document.querySelector('h1').innerText = 'Catscentration'
    document.getElementById('clicksButton').innerText = 'Click Count: '
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
    shuffleCards()
}

// EVENT LISTENERS
cards.forEach(function (card) {
    card.addEventListener('click', onClick)
})

playAgainButton.addEventListener('click', playAgain)