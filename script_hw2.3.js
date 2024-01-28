//Задание 1 
let userPassword = Number(prompt('Введите пароль'));
let password = 12345678;
if (userPassword === password) {
    alert('Пароль введен верно');
} else {alert('Пароль введен неправильно');    
}

//Задание 2
let c = Number(prompt('Введите число'));
if (c > 0 && c < 10){
    console.log('Верно');}
else {
    console.log('Неверно');};

// //Задание 3
let m = prompt('Введите число 1');
let n = prompt('Введите число 2');
if (m >= 100 || n >= 100) {
    console.log('Верно. Одна из переменных больше 100');
} else {
    console.log('Неверно. Введенные числа меньше 100')
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt('Введите № месяца'));
switch (monthNumber){
    case 1:
        console.log('Январь - это зима');
        break;
    case 2:
        console.log('Февраль - это зима');
        break;
    case 3:
        console.log('Март - это весна');
        break;
    case 4:
        console.log('Апрель - это весна');
        break;
    case 5:
        console.log('Май - это весна');
        break;
    case 6:
        console.log('Июнь - это лето');
        break;
    case 7:
        console.log('Июль - это лето');
        break;
    case 8:
        console.log('Август - это лето');
        break;
    case 9:
        console.log('Сентябрь - это осень');
        break;
    case 10:
        console.log('Октябрь - это осень');
        break;
    case 11:
        console.log('Ноябрь - это осень');
        break;
    case 12:
        console.log('Декабрь - это зима');
        break;

    default:
        console.log('Некорректное значение');
        break;
}