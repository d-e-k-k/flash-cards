//https://wordsapiv1.p.mashape.com/words?random=true

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
        console.log(cardIndex);
    }
})

gotItButton.addEventListener('click', () => {
    markCardAsComplete();
    checkAmountOfCompletedCards();
    if(cards.every(allCardsComplete) === true){
        console.log("all cards are true");
        alert("All cards are complete!")
    }
})

function markCardAsComplete(){
    cards[cardIndex].completed = true;
}

function checkAmountOfCompletedCards(){
    completionCount.innerText = 0;
    for(let i = 0; i < cards.length; i++ ){
        if(cards[i].completed === true){
            completionCount.innerText = Number(completionCount.innerText) + 1;
        }
    }
}

function allCardsComplete(card){
    return card.completed === true;
}



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

function moveToNextUncompletedCard(){
   let tempArray = [...cards].splice(cardIndex + 1, cards.length);
		if (tempArray.every(isCompleted)) {
			console.log('all next cards are true');
			return;
		} else {
			do {
				cardIndex += 1;
			} while (cards[cardIndex].completed === true);
		}
  
    // if(cards[cardIndex + 1].completed === false){
    //     cardIndex += 1;
    // }else{
    //     while (cards[cardIndex].completed === true){
    //         cardIndex += 1;
    //     }
    // }


    // do{
    //     cardIndex += 1;
    // }while (cards[cardIndex].completed === true);

}

const tempButton = document.createElement('button');
tempButton.textContent = 'Temp Button';
document.body.appendChild(tempButton);
tempButton.addEventListener('click', () => {
    console.log('temp button clicked');
    let tempArray = [...cards].splice(0, cardIndex + 1)
    console.log(tempArray);
    console.log(tempArray.every(isCompleted));
})

function isCompleted(card){
    return card.completed === true;
}


// console.log(isCompleted(cards[1]));

// let result = cards.every(isCompleted);
// console.log(result);

function moveToPreviousUncompletedCard() {
    // if(cards[cardIndex - 1].completed === false){
    //     cardIndex -= 1;
    // }else{
    //     while(cards[cardIndex].completed === true){
    //         cardIndex -=1;
    //     }
    // }
    let tempArray = [...cards].splice(0, cardIndex);
    if (tempArray.every(isCompleted)){
        console.log('all previous cards are true');
        return
    }else{
        do {
            cardIndex -= 1;
        } while (cards[cardIndex].completed === true);
    }
}

// Hamberger Menu ###START####
const hamburgerMenu = document.querySelector('#menu');
const menuOptionsModal = document.querySelector("#menu-options-modal");
function toggleHamburgerMenu(){
    hamburgerMenu.classList.toggle("expanded-hamburger-menu")
    menuOptionsModal.classList.toggle("hidden")
}
hamburgerMenu.addEventListener('click', () => {
    toggleHamburgerMenu();
})
// Hamberger Menu ###END###

window.addEventListener('keydown', (event) => {
    if(event.which === 39){
        moveToNextUncompletedCard();
        loadCardContent();
    }else if(event.keyCode === 37){
        moveToPreviousUncompletedCard();
        loadCardContent();
    }else if(event.keyCode === 40){
        loadCardContent();
    }else if(event.which === 38){
       setTimeout(showDef, 100)
       loadCardContent();
    }
}
)

// keycode 39 === right
// keycode 37 === left
// keycode 40 === down
// keycode 38 === up