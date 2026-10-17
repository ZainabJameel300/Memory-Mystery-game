//Cached consts and constants
const timeElement = document.querySelector('#time')
const scoreElement = document.querySelector('#score')
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

//Variables
let firstCard = null
let secondCard = null
let time = 60
let score= 0
let gameOver = false


//functions

function clickCard(event){
   for(let i=0; i<cardsElements.length; i++){
     if(cardsElements[i]=== event.target){
     event.target.src= cards[i].image}
   }
    
}

//EventListners
for(let i=0; i<cardsElements.length; i++){
    cardsElements[i].addEventListener('click', clickCard)
}


