//Задание 1
let string = 'js';
console.log(string.toUpperCase());

//Задание 2
const items = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
items.forEach((item) => {
    if (item.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(item);
    }
})

//Задание 3
const numbers = 32.58884;
console.log(Math.floor(numbers));
console.log(Math.ceil(numbers));
console.log(Math.round(numbers));

//Задание 4
let arr = [52, 53, 49, 77, 21, 32];
let min = Math.min(...arr);
console.log(min);

let arr = [52, 53, 49, 77, 21, 32];
let max = Math.max(...arr);
console.log(max);

// или

let min = Math.min(52, 53, 49, 77, 21, 32);
console.log(min);

let max = Math.max(52, 53, 49, 77, 21, 32);
console.log(max);

//Задание 5
function getRandomNumber() {
    return Math.floor(Math.random()*10);
}
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());


//Задание 6

function getRandomArrNumbers(Value) {
    let randomArr = [];
    for (let i = 0; i < Math.floor(Value / 2); i++) {
        randomArr.push(Math.round(Math.random() * Value));
    };
    console.log(randomArr);
    return randomArr;
}
getRandomArrNumbers(7);
getRandomArrNumbers(12);

//Задание 7
function getRandomNumber(minValue, maxValue) {
    return (Math.floor(Math.random() * (maxValue - minValue)) + minValue);
}
console.log(getRandomNumber(12, 24));
console.log(getRandomNumber(3, 15));


//Задание 8
//Вариант 1
let currentDate = new Date();
console.log(currentDate);

//Вариант 2
let currentDate = new Date('2/28/2024');
console.log(currentDate);

//Задание 9
// Вроде бы оба варианта верные, но итоговая дата разная получается... Странно как-то....
//Вариант 1
let currentDate = new Date();
console.log(currentDate.getDate());
currentDate.setDate(currentDate.getDate() + 75);
console.log(currentDate);

//Вариант 2
let currentDate = new Date();
console.log(+currentDate);
let days73 = 73 * 24 * 60 * 60 *1000;
console.log(days73);
let searchDate = +currentDate + days73;
console.log(searchDate);
let days73Later = new Date(searchDate);
console.log(days73Later);

//Задание 10
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let currentDate = new Date();
let myDate = "Дата: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " "
    + currentDate.getFullYear() + ", " + days[currentDate.getDay()];
console.log(myDate);
let myTime = "Время: " + currentDate.getHours() + " час " + currentDate.getMinutes() + " минут " + currentDate.getSeconds() + " секунд ";
console.log(myTime);
