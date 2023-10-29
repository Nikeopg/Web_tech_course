let btnElement = document.querySelector(".btn");
let myNameElement = document.querySelector('.inname');
let mySurnameElement = document.querySelector('.insurname');
let resultElement = document.querySelector(".result");

btnElement.addEventListener("click", function() {
    resultElement.textContent = `Здравствуйте, ${myNameElement.value} ${mySurnameElement.value}!`;
});