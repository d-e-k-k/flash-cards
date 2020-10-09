const flashcard = document.querySelector('#flashcard');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const gotItButton = document.querySelector('#got-it-button');
const addWordInput = document.querySelector('#add-word-input');
// const randomVocabButton = document.querySelector('#random-vocab-button');
// https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=YOURAPIKEY
const addWordForm = document.querySelector('#add-word-form');



let titles = ['title1', 'title2', 'title3', 'title4'];
let defs = ['def1', 'def2', 'def3', 'def4'];
let completedTitles = [];
let completedDefs = [];
let cardIndex = 0;
let completionCount = document.querySelector('#completion-count')
let startingAmountOfCards = document.querySelector('#starting-amount-of-cards')

startingAmountOfCards.innerText = titles.length + completedTitles.length



window.addEventListener('load',() => {
    loadCardContent();
} )

addWordForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = `https://www.dictionaryapi.com/api/v3/references/learners/json/${addWordInput.value}?key=a10c76fe-97c7-4347-97ed-43c0201e71e9`;
	fetch(url)
    .then(res => res.json())
	.then(resJson => {
        titles.push(resJson[0].meta.stems[0]);
        defs.push(resJson[0].meta['app-shortdef'].def[0]);
        startingAmountOfCards.innerText =
                    titles.length + completedTitles.length;
        console.log(resJson[0]);
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
    if(cardIndex < titles.length -1){
        nextCard();
        loadCardContent();
    }
})

gotItButton.addEventListener('click', () => {
    const flashcardTitle = document.querySelector('.flashcard-title');
    if (titles.length > 0){
        addOneToCompletionCountIfCardsLeft();
        addCardToCompletedCardsArray();
        removeCardUserKnows();
        if(titles.length < 1){
            return flashcardTitle.innerText = 'No Cards Left';
        }
    }else{
        return flashcardTitle.innerText = "No Cards Left";
    }
    loadCardContent();
})

function removeCardUserKnows(){
    titles.splice(cardIndex, 1);
    defs.splice(cardIndex, 1);
    if(cardIndex === titles.length){
        cardIndex -= 1
    }
}

function addCardToCompletedCardsArray(){
    completedTitles.push(titles[cardIndex]);
    completedDefs.push(defs[cardIndex]);
}

function addOneToCompletionCountIfCardsLeft(){
    completionCount.innerText = Number(completionCount.innerText) + 1;
    
}

previousButton.addEventListener('click', () => {
    if(cardIndex > 0){
        previousCard();
        loadCardContent();
    }
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

    flashcardTitle.innerText = titles[cardIndex];
    flashcardDef.innerText = defs[cardIndex];
    flashcardDef.classList.add('hidden', 'def');
}

function nextCard(){
    cardIndex += 1;
}

function previousCard(){
    cardIndex -= 1;
}

// Hamberger Menu ###START####
const hamburgerMenu = document.querySelector('#menu');
function toggleHamburgerMenu(){
    hamburgerMenu.classList.toggle("expanded-hamburger-menu")
}
hamburgerMenu.addEventListener('click', () => {
    toggleHamburgerMenu();
    // console.log(hamburgerMenu);
})
// Hamberger Menu ###END###