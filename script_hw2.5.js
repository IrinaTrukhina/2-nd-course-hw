// // Задание 1
// function whatLess(a, b) {
//     if (a < b) {
//         return a;
//     } else if (a === b) {
//         return ('Числа равны');
//     } else {
//         return b};
// }
// console.log(whatLess(8, 4));
// console.log(whatLess(6, 6));
// console.log(whatLess(10, 75));


// // Задание 2
// let a = prompt('Набери число и мы тебе скаажем четное оно или нет');
// function whatNumber(a) {
//     if (a % 2 == 0) {
//         return('Число четное');
//     } else {
//        return('Число нечетное');
//     }
// }
// alert(whatNumber(a));

// //Задание 3
// let a = prompt('Введите число, чтоб узнать его квадарат');

// function squaringOfNumber(a) {
//     console.log(a ** 2)
// }
// squaringOfNumber(a)

// function squaringOfNumber(a) {
//     return (alert(a**2));
// }
// //Задание 4
// let age = prompt('Сколько Вам лет?');
// function greetingToUser() {
//     if (age <= 0) {alert('Вы ввели неправильное значение');

//     } else if (age > 0 && age <= 12){
//         alert('Привет, друг');
//     } else{alert('Добро пожаловать!!!');
//     }
//     }
//     greetingToUser()

// //Задание 5
// let a = prompt('Введите что-нибудь');
// let b = prompt('И еще что-нибудь');
// function mult(a, b) {
//     if (isNaN(a) === true || isNaN(b) === true) {return('Одно или оба значения не являются числом');
//     } else {return(a * b);
//     }
// }
// console.log(mult(a, b));

// // Задание 6 сделано в 2х вариантах
// //Вариант 1
// let a = prompt('Введите число, чтоб узнать его в кубе');
// let cub = a**3;
// function cubOfNumber(a) {
//     if (isNaN(a) === true) {return('Переданный параметр не является числом');      
//     } else {return(`${a} в кубе равняется ${cub}`);
// }
// }
// alert(cubOfNumber(a));

// // // //Вариант 2
// function cubOfNumber() {
//     let a = prompt('Введите число, чтоб узнать его в кубе');
//     let cub = a**3;
//     if (isNaN(a) === true) {
//         return('Переданный параметр не является числом');
//     } else {
//         return(`${a} в кубе равняется ${cub}`);
//     }
// }
// alert(cubOfNumber());

// // // Задание 7
// let circle1 = {
//     radius: 20,
//     number_pi: 3.14,
//     getArea() {
//         let circleArea = circle1.radius ** 2 * circle1.number_pi;
//         return `${circleArea}`;
//     }

// }
// console.log(circle1.getArea());


// let circle2 = {
//     radius: 20,
//     number_pi: 3.14,
//     getPerimeter() {
//         let circlePerimeter = circle2.radius * 2 * circle2.number_pi;
//         return `${circlePerimeter}`;
//     }
// }
// console.log(circle2.getPerimeter());

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