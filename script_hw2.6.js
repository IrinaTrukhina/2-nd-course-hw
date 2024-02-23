// Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++){
if(numbers[i] === 10) break;
console.log(numbers[i]);
}

// Задание 2
const numbers = [1, 5, 4, 10, 0, 3]
numbers.forEach((el, index) => {console.log(`${index} : ${el}`);
})

// Задание 3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ')
console.log(numbers);

// Задание 4
let arr = []; 
for (let i = 0; i < 3; i++) {  
    arr[i] = [];   
    for (let j = 0; j < 3; j++) {  
        arr[i][j] = 1;
    }
}
console.log(arr);
arr.forEach((el, index,) => { console.log(`${index}: ${el}`); });


// Задание 5
let numbers = [1, 1, 1];
let result = numbers.push(2, 2, 2);
console.log(numbers);

//Задание 6
let items = [9, 8, 7, 'a', 6, 5];
items.sort()
items.pop();
let arr = [console.log(items)];

// Задание 7
let arr = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Угадай число'));
if(arr.includes(userAnswer)){
    alert('Угадал');
} else{alert('Не угадал');
}

 //Задание 8
let word = 'abcdef';
word = word.split('').reverse().join('')
console.log(word);

// Задание 9
let arr = [
    [1, 2, 3,],
    [4, 5, 6]
];
let arrNew = arr.flat();
console.log(arrNew);


// Задание 10
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
for(let i = 0; i < arr.length - 1; i++){
    console.log(arr[i] + arr[i+1]);
}

//Задание 11
let numbers = [10, 20, 30, 40, 50];
let result = numbers.map(numbersValue => numbersValue**2)
console.log(result);

//Задание 12
let words = 'Создайте функцию которая принимает на вход массив строк';
words = words.split(' ');
console.log(words);
let result = words.map(getLengthWords => getLengthWords.length);
console.log(result);


// Задание 13
// //Вариант 1

function filterPositive(array) {
    let positive = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive.push(array[i])
        }
    }
    return positive;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));



// //Вариант 2
let myArray = [-1, 0, 5, -10, 56, -25, 25, 0, 1000, -2];
myArray = myArray.filter(item => item > 0)
console.log(myArray);







