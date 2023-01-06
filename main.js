let myName = prompt('Введите имя');
let myYear = prompt('Введите год рождения');
let thisYear = prompt('Введите нынешний год');

function res() {
    let result = thisYear - myYear;
    return result;
}

console.log(myName + ', Ваш возраст ' + res());