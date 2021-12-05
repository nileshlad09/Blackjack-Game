let message = " "
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let Card = [firstCard, secondCard]
let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let hasBlackjack= false
let isAlive= true

function getRandomCard(){
    let x= Math.random()*13+1
    y=Math.floor(x)
    if(y>10)
    {
        return 10
    }
    else if (y===1)
    {
        return 1
    }
    else
    {
        return y
    }
}

function startGame() {
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum:" + sum
    cardsEl.textContent = "Cards:" 
    for (let i = 0; i < Card.length; i++) {
        cardsEl.textContent += Card[i] +" "
    }
    console.log("game start")
    if (sum <= 20) {
        message = "Do you want to draw new card?"
    }
    else if (sum === 21) {
        message = "You've got Balckjack!"
        hasBlackjack=true
    }
    else { 
           message = "you're out of the game!"
           isAlive= false
    }

    messageEl.textContent = message
}
function newcard() {
    if(isAlive===true && hasBlackjack===false)
    {
    let card = getRandomCard()
    sum += card
    Card.push(card)
    renderGame()
    }
        
}