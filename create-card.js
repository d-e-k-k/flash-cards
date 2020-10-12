// Create a form that lets me submit card title and definiton to the titles and def array
// do not let it submit unless both the title and def box have a value
// turn this it to a modal that can pop up/hide

// have a from already in the html. Can Hide by toggling a class

// forum with two input boxes and one submit 

const createCardForm = document.querySelector('#create-card-form');
const newCardTitle = document.querySelector('#new-card-title');
const newCardDef = document.querySelector('#new-card-def');

createCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(newCardTitle.value === ''){
        console.log('Card Title is missing. Please add a title');
    }else if(newCardDef.value === ''){
        console.log('Card is missing a definition. Please add a definition');
    }else{
        cards.push({
            title: newCardTitle.value,
            def: newCardDef.value,
            completed: false,
            });
        updateTotalAmountOfCards();
    }
})