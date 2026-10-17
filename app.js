//-------------------Cached consts and constants--------------------------------------
const timeElement = document.querySelector('#time-value')
const scoreElement = document.querySelector('#score-value')
const cardsElements = document.querySelectorAll('.back-card-image')
const restartBtnElement = document.querySelector('#restart-btn')
const cards=[
    {
        name:'Edogawa Conan',
        image: './assets/Conan_Edogawa.png',
        isFlipped: false,
        isMatched: false
    },
    {
        name:'Ran Mouri',
        image: './assets/Ran_Mouri.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Kogoro Mouri',
        image: './assets/Kogoro_Mouri.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Heiji Hattori',
        image: './assets/Heiji_Hattori.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Ai Haibara',
        image: './assets/Ai_Haibara.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Kaitou Kid',
        image: './assets/Kaitou_Kid.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Edogawa Conan',
        image: './assets/Conan_Edogawa.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Ran Mouri',
        image: './assets/Ran_Mouri.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Kogoro Mouri',
        image: './assets/Kogoro_Mouri.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Heiji Hattori',
        image: './assets/Heiji_Hattori.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Ai Haibara',
        image: './assets/Ai_Haibara.png',
        isFlipped:false,
        isMatched: false
    },
    {
        name:'Kaitou Kid',
        image: './assets/Kaitou_Kid.png',
        isFlipped:false,
        isMatched: false
    },
]
const backCardImage = './assets/back-card-image.png'

//-----------------------------------Variables--------------------------------------------
let firstCard = null //tracks the name of the first card
let secondCard = null //tracks the name of the second card

let firstCardElm = null //tracks the html element of the first card
let secondCardElm = null //tracks the html element of the second card

let firstCardIndex = null //tracks the index of the first card in the cards array
let secondCardIndex = null//tracks the index of the second card in the cards array

let time = 45
let score= 0
let timeInterval=null
let gameOver = false //tracks if all the cards are flipped or the time has run out
let isLocked= false



//----------------------------------------functions-------------------------------------

//this function generate a random index from 0 to 11 and then assign it to cards[i] and the card at i assign it to 
// the card at that random index
function shuffelCards(){
    for(let i=0; i<cards.length; i++){
        let randomIndex = Math.floor(Math.random()*cards.length)
        let temp= cards[i]
        cards[i]= cards[randomIndex]
        cards[randomIndex]= temp
    }
}

function clickCard(event){
    const clickedCard = event.target
    //check if game is over or the cards are locked because of checking for matching
    if(gameOver || isLocked)
        return

   for(let i=0; i<cardsElements.length; i++){
     if(cardsElements[i]=== clickedCard){

        //check if the card is already flipped or already Matched then return
        if(cards[i].isFlipped || cards[i].isMatched)
            return
        startTimer()

        //else display the character
        clickedCard.src = cards[i].image

        //change the isFlipped to true
        cards[i].isFlipped=true

        //Store the first and second card name and element
        if(firstCard ===null){
            firstCard = cards[i].name
            firstCardElm = clickedCard
            firstCardIndex = i
        }
        else if(firstCard && secondCard===null){
           secondCard = cards[i].name
           secondCardElm= clickedCard
           secondCardIndex = i
           checkForMatch()
        }
     }
   }   
}

function checkForMatch(){
    //if the names match then increase the score
 if(firstCard === secondCard){
    score++
    scoreElement.textContent = ` ${score}`
    cards[firstCardIndex].isMatched=true
    cards[secondCardIndex].isMatched=true
    firstCard=null
    secondCard=null
    firstCardElm=null
    secondCardElm=null
    firstCardIndex=null
    secondCardIndex=null
 }
  //if not lock the cards by setting the lock=true and call the flipCard()
  else{
    isLocked=true
    flipCardBack()
  }
 
}
 
function timeOutFunction(){
    firstCardElm.src=backCardImage
    secondCardElm.src=backCardImage
    cards[firstCardIndex].isFlipped=false
    cards[secondCardIndex].isFlipped=false
    firstCard=null
    secondCard=null
    firstCardElm=null
    secondCardElm=null
    firstCardIndex=null
    secondCardIndex=null
    isLocked=false
}
function flipCardBack(){
    setTimeout(timeOutFunction,1000)
}


function startTimer(){
    clearInterval(timeInterval)
    timeInterval = setInterval(function(){
        time--
        timeElement.textContent=time
        if(time<=0){
            clearInterval(timeInterval)
            gameOver=true
            console.log("Game is Over!")
        }
    },1000)
}



//------------------------------------------EventListners--------------------------------
for(let i=0; i<cardsElements.length; i++){
    cardsElements[i].addEventListener('click', clickCard)
}

shuffelCards()


