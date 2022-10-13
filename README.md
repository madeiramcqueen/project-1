# CAT CONCENTRATION

## ABOUT GAME & WIREFRAME
Game: Concentration

I'm doing the classic concentration/memory game but it is cat specific. Because I love cats, the player will be trying to find matching pairs of cats. When they find a pair, they'll be in for a little treat -- they'll hear an audio sound of my cat, Kiki, meowing. There might even be a hiss here and there if a match is not found! If a player can find all matching cards under the click count limit, then they will win. If a player cannot find all matching cards within that click count limit, then they lose. If they want to play again, they can click the "Play again" button and give it another try!

![wireframe](https://user-images.githubusercontent.com/16273320/195711751-6599be42-e809-497a-aeaf-10589a6c954a.jpg)

### FUNCTIONS

```js

    - Render to start the game
        function renderGame() {
        code here 
        }
    
    - Player clicking each card (onClick)
        function onClick() {
        code here
        }
        
    - Count how many clicks
        function clickCount() {
        code here
        }
    
    - Matching Cards function: When cards match, cards cannot be flipped over or clicked again
        function cardsMatch() {
        code here
        
        set a new audio element to Kiki meowing
        }
    
    - Flip Back Over function: When cards do not match, cards flip over again, ready to be clicked again
        function flipOver() {
        code here
    
    - Winner --> player wins if they match all cards under the clicking max
        function winner() {
        code here
        
        set a new audio element to clapping
        }
        
    - Loser --> player loses if they do not match all cards within the clicking max
        function loser() {
        code here
        
        set a new audio element to a hissing cat sound
        }
        
      
    - Play again
        function playAgain() {
        code here
        }
    
    ```js
    
