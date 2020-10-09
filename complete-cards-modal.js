const seeAllCardsButton = document.querySelector('#see-all-cards-button');
const cardListUl = document.querySelector('#cards-list-ul');
let cardListOpen = false;


seeAllCardsButton.addEventListener('click', () => {
    cardListUl.innerHTML = "";
    if(cardListOpen === false){
        cards.forEach((card, i) => {
            const liCardTitle = document.createElement('li');
            liCardTitle.innerText = cards[i].title;
            cardListUl.appendChild(liCardTitle);
            return cardListOpen = true;
        })

    }else{
        return cardListOpen = false;
    }

})
