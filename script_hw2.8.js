// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

//Задание 2
function isPositive(number) {
    // console.log(number > 0);
    return number > 0;
}

function isMale(el) {
    if (el.gender === 'male') {
        // console.log(el.gender);
        return true
    }
};

function filter(arr, ruleFunction) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people2, isMale));


//Задание 3
const timer = () => {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, 30000)
};
timer();


//Задание 4
function delayForSecond(callback) {
   setTimeout(() => callback(), 1000)
}
delayForSecond(function () {
   console.log('Привет, Боб!');
})


//Задание 5
function delayForSecondNext(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
};
delayForSecondNext(() => sayHi('Глеб'))