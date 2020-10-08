// function updateCompletionCount{
//     // update how many cards the user has gotten right so far out of the total
// }

// function flipCard{
//     //flip or toggle card to other side
//     //show the content of each side
// }

// function removeCardFromCycle{
//     // remove card from cycle
// }

// function createNewCardStack{
//     //makes a new set of cards
// }




const flashcard = document.querySelector('#flashcard');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const gotItButton = document.querySelector('#got-it-button');

let titles = ['title1', 'title2', 'title3', 'title4'];
let defs = ['def1', 'def2', 'def3', 'def4'];
let cardIndex = 0;



window.addEventListener('load',() => {
    loadCardContent();
} )


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
    titles.splice(cardIndex, 1);
    defs.splice(cardIndex, 1);
    loadCardContent();
    console.log(titles);
})

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






// let cardOne = {
    // 	front: 'front of card 1',
    // 	back: 'back of card 1',
    // };
    
    // let cardTwo = {
// 	front: 'front of card 2',
// 	back: 'back of card 2',
// };

// let arrayOfFlashcards = [cardOne, cardTwo];

// flashcard.addEventListener('click', () => {
//     console.log('clicked');
// })

// function flipCard(){
    
// }

// let arrayOfFlashcards = ['card1', 'card2', 'cards3']
// let locationInDeck = 0;

// flashcard.addEventListener('click',() => {
//     nextCard();
//     flashcard.innerText = arrayOfFlashcards[locationInDeck];
// })

// function nextCard(){
//     locationInDeck += 1;
// }

// nextCard();

// function previousCard{
//     // moves to the previous card in the stack
// }
