// const containerCenterCardList = document.querySelector('.card-list');
// const cardListButton = document.querySelector('#card-list-button');
// const cardListUl = document.querySelector('#card-list-ul');

// cardListButton.addEventListener('click',(event) => {
//     event.preventDefault();
//     containerCenterCardList.classList.toggle('hidden');
// })

const containerCardList = document.querySelector('.container-card-list');
const cardListButton = document.querySelector('#card-list-button');

cardListButton.addEventListener('click', (event) => {
    event.preventDefault();
    containerCardList.classList.toggle('hidden');
})
