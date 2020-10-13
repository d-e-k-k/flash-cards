const searchButton = document.querySelector('#search-button');
const containerSearch = document.querySelector('.container-search');


searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    containerSearch.classList.toggle('hidden');
})