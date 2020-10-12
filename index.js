const flashcard = document.querySelector('#flashcard');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const gotItButton = document.querySelector('#got-it-button');
const addWordInput = document.querySelector('#add-word-input');
// const randomVocabButton = document.querySelector('#random-vocab-button');
// https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=YOURAPIKEY
const addWordForm = document.querySelector('#add-word-form');

const cards = [
	{
		title: 'title1',
        def: 'def1',
        completed: false,
	},
	{
		title: 'title2',
        def: 'def2',
        completed: false,
	},
];



let cardIndex = 0;
let completionCount = document.querySelector('#completion-count')
let totalNumberOfCards = document.querySelector('#total-number-of-cards')

totalNumberOfCards.innerText = cards.length;



window.addEventListener('load',() => {
    loadCardContent();
} )
function updateTotalAmountOfCards(){
    totalNumberOfCards.innerText = cards.length;
}

addWordForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = `https://www.dictionaryapi.com/api/v3/references/learners/json/${addWordInput.value}?key=a10c76fe-97c7-4347-97ed-43c0201e71e9`;
	fetch(url)
    .then(res => res.json())
	.then(resJson => {
        cards.push({
            title: resJson[0].meta.stems[0],
            def: resJson[0].meta['app-shortdef'].def[0],
            completed: false,
        })
        updateTotalAmountOfCards();
    })
    
});

// randomVocabButton.addEventListener('click', () => {
//     fetch(dictionaryUrl)
//     .then(res => res.json())
//     .then(resJson => {
//         console.log(resJson);
//     })
    
// })

flashcard.addEventListener('click', () => {
    showDef();
})

nextButton.addEventListener('click', () => {
    if(cardIndex < cards.length -1){
        moveToNextUncompletedCard();
        loadCardContent();
    }
    console.log(cardIndex);
})

gotItButton.addEventListener('click', () => {
    markCardAsComplete();
    checkAmountOfCompletedCards();
    // console.log(cards);
    // checkAmountComplete();
    // console.log(cardIndex);
    // if (cards.length > 0){
    //     addOneToCompletionCountIfCardsLeft();
    //     markCardAsComplete();
    //     cards.push(cards.splice(cardIndex, 1)[0])
    //     // moveToNextUncompletedCard();

    //     if(cards.length < 1){
            
    //         return flashcardTitle.innerText = 'No Cards Left';
    //     }
    // }else{
    //     return flashcardTitle.innerText = "No Cards Left";
    // }
    // loadCardContent();
})

function markCardAsComplete(){
    cards[cardIndex].completed = true;
}

function checkAmountOfCompletedCards(){
    // look through all the cards 
    // add one to the completed count for every card that has coompleted as true
    completionCount.innerText = 0;
    for(let i = 0; i < cards.length; i++ ){
        if(cards[i].completed === true){
            completionCount.innerText = Number(completionCount.innerText) + 1;
        }
    }
}

// function checkAmountComplete(){
//     cards.forEach(isCardCompeted);
// }
// function isCardCompeted(card, i){
//     if(card[i].completed === true){
//         completionCount.innerText = Number(completionCount.innerText) + 1;
//     }
// }
// function addOneToCompletionCountIfCardsLeft(){
//     completionCount.innerText = Number(completionCount.innerText) + 1;
    
// }

previousButton.addEventListener('click', () => {
    if(cardIndex > 0){
        moveToPreviousUncompletedCard();
        loadCardContent();
    }
    console.log(cardIndex);
})



function showDef(){
    const flashcardDef = document.querySelector('.def');
    flashcardDef.classList.toggle('hidden');
}
function loadCardContent(){
    const flashcardUl = document.querySelector('#flashcard-Ul');
    flashcardUl.innerHTML = '';
    const li = document.createElement('li');
    const flashcardTitle = document.createElement('h3');
    flashcardTitle.classList.add('flashcard-title');
    const flashcardDef = document.createElement('p');

    flashcardUl.appendChild(li);
    li.append(flashcardTitle, flashcardDef);

    flashcardTitle.innerText = cards[cardIndex].title;
    flashcardDef.innerText = cards[cardIndex].def;
    flashcardDef.classList.add('hidden', 'def');
}

// function nextCard(){
//     cardIndex += 1;
// }

// function previousCard(){
//     cardIndex -= 1;
// }

function moveToNextUncompletedCard(){
do{
    cardIndex += 1;
}while (cards[cardIndex].completed === true);
    // if (cards[cardIndex].completed === true || (cards[cardIndex + 1].completed === true)){
    //     cardIndex += 1;
    //     moveToNextUncompletedCard();
    // }else{
    //     cardIndex += 1;
    //     loadCardContent();
    // }
}

function moveToPreviousUncompletedCard() {
do{
    cardIndex -= 1;
}while(cards[cardIndex].completed === true);
}

// Hamberger Menu ###START####
const hamburgerMenu = document.querySelector('#menu');
function toggleHamburgerMenu(){
    hamburgerMenu.classList.toggle("expanded-hamburger-menu")
}
hamburgerMenu.addEventListener('click', () => {
    toggleHamburgerMenu();
})
// Hamberger Menu ###END###