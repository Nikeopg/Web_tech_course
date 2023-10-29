
let grade = Number(prompt())

if (num > 0) {
    console.log('Положительное')
} else if (num < 0) {
    console.log('Отрицательное')
} else {
    console.log('Не положительное и не отрицательное')
}


let score = Number(prompt())

if (score >= 84) {
    console.log('Отлично')
} else if (score >= 64) {
    console.log('Хорошо')
} else {
    console.log('Учись')
}


let time = Number(prompt())

if (time >= 0 && time <= 11) {
    console.log('Доброе утро')
} else if (time >= 12 && time <= 17) {
    console.log('Добрый день')
} else {
    console.log('Добрый вечер')
}


let val = Number(prompt())

if (val >= 1 && val <= 3) {
    console.log('Плохое')
} else if (val >= 4 && val <= 7) {
    console.log('Нормальное')
} else if (val >= 8 && val <= 10) {
    console.log('Хорошее') 
} else {
    console.log('Число вне диапазона')
}

let side1 = Number(prompt())
let side2 = Number(prompt())
let side3 = Number(prompt())

if (side1 == side2 && side2 == side3) {
    console.log('Равносторонний')
} else if ( side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('Равнобедренный')
} else {
    console.log('Разносторонний')
}

let age = Number(prompt("Введите ваш возраст:"));

let access = ...
console.log(access);