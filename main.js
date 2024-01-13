document.addEventListener("DOMContentLoaded", function(event) {    
    // Variables for button and sections
    let swapButton = document.getElementById('swap');
    let preSwapSection = document.getElementById('preSwap');
    let swappedSection = document.getElementById('swapped');

    swappedSection.style.display = 'none'; // second section hidden
    
    let wordsArray = []; //array

    function enterWords() { // loop that asks for 3 words
        
        wordsArray = [];
        
        for (var i=0; i < 3; i++) {
            let word = prompt('Enter word ' + (1+i) + ': ');

            if (word == null || word.trim() === "") {
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

    swapButton.addEventListener("click", swapLetters, false); //defined button event when clicked   
    
    function swapLetters () { // hides first section and shows second section
        preSwapSection.style.display = "none";
        swappedSection.style.display = "block";

        // Creates new array with swapped first and last letters
        let swappedArray = wordsArray.map(function(oneWord) {
            return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length -1) + oneWord.charAt(0);
        });

        // Display swapped words in second section
        document.getElementById('swappedFirst').innerText = swappedArray[0];
        document.getElementById('swappedSecond').innerText = swappedArray[1];
        document.getElementById('swappedThird').innerText = swappedArray[2];
    }
});
