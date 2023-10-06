function doubleAndDisplay() {
    const userInput = document.getElementById('numberInput').value;

   
    const inputValue = parseFloat(userInput);
    if (isNaN(inputValue)) {
        alert('Veuillez entrer un nombre valide.');
        return;
    }

    
    const doubledValue = inputValue * 2;

  
    const resultParagraph = document.getElementById('result');
    resultParagraph.textContent = `Le double de ${inputValue} est : ${doubledValue}`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { doubleAndDisplay };
}
