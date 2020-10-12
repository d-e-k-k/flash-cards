const randomVocabButton = document.querySelector('#random-vocab-button');

randomVocabButton.addEventListener('click',(event) => {
    event.preventDefault();
    fetch('https://rapidapi.p.rapidapi.com/words/?random=true', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
				'x-rapidapi-key': 'c7654cee50mshc2f4b12e9dcbe68p1ce2b6jsn773f7721b1db',
			},
        })
    .then(res => res.json())
    .then(resJson => {
        if (resJson.results[0].definition)
        console.log('there is NOT a def for this word');
					cards.push({
						title: resJson.word,
						def: resJson.results[0].definition,
						completed: false,
                    });
        updateTotalAmountOfCards();
        console.log(resJson);
    })
})