
//building array randomizer, run to get a random number from 1 to 10

// let randomNum =[1,2,3,4,5,6,7,8,9,10];

// function getRandomNum(){
//     randomIndex = Math.floor(Math.random()*randomNum.length)
//     return randomIndex;
// }
// console.log(getRandomNum())

// use this to create a random password generator, start with only numbers and then get the generator to output multiple array elements:

// let randomNum =[1,2,3,4,5,6,7,8,9,0];

// function getRandomNum(){
//     randomIndex = Math.floor(Math.random()*randomNum.length)
//     return randomIndex;
// }

// function generatePassword() {
//     let password = '';
//     for (let i = 0; i < 8; i++) {
//         password += getRandomNum();
//     }
//     return password;
// }
// console.log(generatePassword());

let randomNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let randomSymbols = "!@#$%^&*()_-+=<>?";

function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generatePassword() {
    let password = '';

    for (let i = 0; i < 17; i++) {
        let randomArray = getRandomElement([randomNum, randomLetters, randomSymbols]);
        password += getRandomElement(randomArray);
    }

    return password;
}

function newPassword() {
    let password = generatePassword();
    document.getElementById("password-display").innerText = password;
    document.getElementById("password-container").style.display = "block";
    document.getElementById("toggle-button").style.display = "block";
    document.getElementById("copy-button").style.display = "block";
}

function togglePassword() {
    let passwordDisplay = document.getElementById("password-display");
    passwordDisplay.style.display = (passwordDisplay.style.display === "none") ? "block" : "none";
}

function copyToClipboard() {
    let passwordDisplay = document.getElementById("password-display");
    let textArea = document.createElement("textarea");
    textArea.value = passwordDisplay.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);


    let copyMessage = document.getElementById("copy-message");
    copyMessage.innerText = "Password copied to clipboard!";
    copyMessage.style.display = "block";
    setTimeout(function () {
        copyMessage.style.opacity = "0";

        setTimeout(function () {
            copyMessage.style.display = "none";
            copyMessage.style.opacity = "1";
        }, 600);
    }, 0);
}


document.getElementById("password-container").style.display = "none";
document.getElementById("toggle-button").style.display = "none";
document.getElementById("copy-button").style.display = "none";