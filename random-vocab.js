
let stopper = 0;
const randomVocabButton = document.querySelector('#random-vocab-button');

randomVocabButton.addEventListener('click',(event) => {
    stopper = 0;
    event.preventDefault();
    fetchRandomWord();
    
})

let internalStopper = 0;
// Attribution: Rapidapi had a template for the headers that I used.
function fetchRandomWord(){
    fetch('https://rapidapi.p.rapidapi.com/words/?random=true', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
				'x-rapidapi-key': 'c7654cee50mshc2f4b12e9dcbe68p1ce2b6jsn773f7721b1db',
			},
        })
    .then(res => res.json())
    .then(resJson => {
        if(resJson.results == undefined & stopper < 10){
            stopper ++; 
            fetchRandomWord();
        }else{
            cards.push({
                title: resJson.word,
                def: resJson.results[0].definition,
                completed: false,
            });
        updateTotalAmountOfCards();
        }
    })
}