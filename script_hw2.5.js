// Задание 1
function whatLess(a, b) {
    if (a < b) {
        console.log(a);
    } else if (a === b) {
        console.log('Числа равны');
    } else {
        console.log(b);
    };
}

whatLess(8, 4);
whatLess(6, 6);

// Задание 2
function whatNumber(a) {
    if (a % 2 == 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}
whatNumber(prompt('Набери число и мы тебе скаажем четное оно или нет'))

//Задание 3
let a = prompt('Введите число, чтоб узнать его квадарат');

function squaringOfNumber(a) {
    console.log(a ** 2)
}
squaringOfNumber(a)

function squaringOfNumber(a) {
    return (alert(a**2));
}
//Задание 4
let age = prompt('Сколько Вам лет?');
function greetingToUser() {
    if (age <= 0) {alert('Вы ввели неправильное значение');

    } else if (age > 0 && age <= 12){
        alert('Привет, друг');
    } else{alert('Добро пожаловать!!!');
    }
    }
    greetingToUser()

//Задание 5
let a = prompt('Введите что-нибудь');
let b = prompt('И еще что-нибудь');
function mult(a, b) {
    if (isNaN(a) === true || isNaN(b) === true) {console.log('Одно или оба значения не являются числом');
    } else {alert(a * b);
    }
}
mult(a, b)

// Задание 6 сделано в 2х вариантах
//Вариант 1
let a = prompt('Введите число, чтоб узнать его в кубе');
let cub = a**3;
function cubOfNumber(a) {
    if (isNaN(a) === true) {console.log('Переданный параметр не является числом');      
    } else {console.log(`${a} в кубе равняется ${cub}`);
}
}
cubOfNumber(a)

// //Вариант 2
function cubOfNumber() {
    let a = prompt('Введите число, чтоб узнать его в кубе');
    let cub = a**3;
    if (isNaN(a) === true) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${a} в кубе равняется ${cub}`);

    }
}
cubOfNumber()

// // Задание 7
let circle1 = {
    radius: 20,
    number_pi: 3.14,
    getArea() {
        let circleArea = circle1.radius ** 2 * circle1.number_pi;
        return `${circleArea}`;
    }

}
console.log(circle1.getArea());


let circle2 = {
    radius: 20,
    number_pi: 3.14,
    getPerimeter() {
        let circlePerimeter = circle2.radius * 2 * circle2.number_pi;
        return `${circlePerimeter}`;
    }
}
console.log(circle2.getPerimeter());

// //Задание 8
function gameSeasonsButton() {
    let userAnswer = prompt('Введите № месяца');
if (userAnswer === '1' || userAnswer === '2' || userAnswer === '12' ){
    alert('Зима');
} else if(userAnswer === '3' || userAnswer === '4' || userAnswer === '5' ){
    alert('Весна');
}else if(userAnswer === '6' || userAnswer === '7' || userAnswer === '8' ){
    alert('Лето');
} else if(userAnswer === '9' || userAnswer === '10' || userAnswer === '11' ){
    alert(' Осень');
}else{alert('Ты ввел что то не то.... Некоректное значение');}
}