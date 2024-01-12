function enterWords() {
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
    document.getElementById('first').innerText = wordsArray[0];
    document.getElementById('second').innerText = wordsArray[1];
    document.getElementById('third').innerText = wordsArray[2];
}
enterWords();

document.addEventListener("DOMContentLoaded", function(event) {
    
})