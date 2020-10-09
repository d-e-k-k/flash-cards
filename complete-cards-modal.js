const seeAllCardsButton = document.querySelector('#see-all-cards-button');
const cardListUl = document.querySelector('#cards-list-ul');
let cardListOpen = false;
seeAllCardsButton.addEventListener('click', () => {
    cardListUl.innerHTML = "";
    if(cardListOpen === false){
        let allTitles = titles.concat(completedTitles);
        let allDefs = defs.concat(completedDefs);
        console.log(allTitles);
        allTitles.forEach((title, i) => {
            const liCardTitle = document.createElement('li');
            liCardTitle.innerText = allTitles[i];
            cardListUl.appendChild(liCardTitle);
            return cardListOpen = true;
        })

    }else{
        return cardListOpen = false;
    }

})
