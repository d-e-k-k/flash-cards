// Create a form that lets me submit card title and definiton to the titles and def array
// do not let it submit unless both the title and def box have a value
// turn this it to a modal that can pop up/hide

// have a from already in the html. Can Hide by toggling a class

// forum with two input boxes and one submit 

const createCardForm = document.querySelector('#create-card-form');

createCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);
})