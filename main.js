let swapButton = document.getElementById('swap');



document.addEventListener("DOMContentLoaded", function(event) {    
    function enterWords() { // loop that asks for 3 words
        let wordsArray = []; //array

        for (var i=0; i < 3; i++) {
            let word = prompt('Enter word ' + (1+i) + ': ');

            if (word == null || word == "") {
                alert('Please enter a valid word');
                i--;
            }
            else {
                wordsArray.push(word);
            }
        }
        // lists the three words
        document.getElementById('first').innerText = wordsArray[0];
        document.getElementById('second').innerText = wordsArray[1];
        document.getElementById('third').innerText = wordsArray[2];

        swapButton.style.display = 'block'; // only visible when 3 words displayed
    }
    enterWords();

    swapButton.addEventListener("click", swapLetters, false); //define button event when clicked   
})