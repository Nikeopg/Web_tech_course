let test = prompt("Введите число от 10 до 99")
if (test === null) {
    alert("Ну ладно")
}
else if (test < 10) {
    alert("Нужно ввести число от 10 до 99")
}
else if (test > 99) {
    alert("Нужно ввести число от 10 до 99")
    test
}
else if (typeof (test) === 'string') {
    alert("Нужно ввести ЧИСЛО!")
    test
}
else {
    alert("Молодец")
}