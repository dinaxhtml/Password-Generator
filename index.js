const lowerCaseLetters= "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers= "0123456789";
const symbols= "!@#$%^&*()_+-={}[]<>?/:;|,.";

const lengthEl= document.getElementById("length");
const lowercaseEl= document.getElementById("lowercase");
const uppercaseEl= document.getElementById("uppercase");
const numbersEl= document.getElementById("numbers");
const symbolsEl= document.getElementById("symbols");
const passwordEl= document.getElementById("password");
const generateBtn= document.getElementById("generate");

generateBtn.addEventListener("click", function() {
    const length= lengthEl.value;
    let characters="";
    let password="";

    if(lowercaseEl.checked) {
        characters+=lowerCaseLetters;
    }
    if(uppercaseEl.checked) {
        characters+=upperCaseLetters;
    }
    if(numbersEl.checked) {
        characters+=numbers;
    }
    if(symbolsEl.checked) {
        characters+=symbols;
    }

    for(let i=0;i<length;i++) {
        password+=characters.charAt(Math.floor(Math.random()*characters.length));
    }

    passwordEl.value=password;
});