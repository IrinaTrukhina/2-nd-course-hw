function gameSeasonsButton() {
    let userAnswer = prompt('Введите № месяца');
    if (userAnswer === '1' || userAnswer === '2' || userAnswer === '12') {
        alert('Зима');
    } else if (userAnswer === '3' || userAnswer === '4' || userAnswer === '5') {
        alert('Весна');
    } else if (userAnswer === '6' || userAnswer === '7' || userAnswer === '8') {
        alert('Лето');
    } else if (userAnswer === '9' || userAnswer === '10' || userAnswer === '11') {
        alert(' Осень');
    } else { alert('Ты ввел что то не то.... Некоректное значение'); }
}

function memorizeTheWords(){
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let randomArray = array.sort(() => Math.random() - 0.5);
    alert('Постарайся запомнить слова: ' + array.join( ))
    let ElementFirstOfRandomArray = randomArray[0];
    let ElementLastOfRandomArray = randomArray[6];
    // console.log(randomArray[0]);
    // console.log(randomArray[6]);
    let userAnswer1 = prompt('Чему равнялся первый элемент массива?');
    let userAnswer2 = prompt('Чему равнялся последний элемент массива??');
    if (userAnswer1.toLowerCase() === ElementFirstOfRandomArray.toLowerCase() && userAnswer2.toLowerCase() === ElementLastOfRandomArray.toLowerCase()) {
        alert('Ты угадал оба элемента');
    } else if (userAnswer1.toLowerCase() === ElementFirstOfRandomArray.toLowerCase() || userAnswer2.toLowerCase() === ElementLastOfRandomArray.toLowerCase() ) {
        alert('Вы были близки к победе!');
    } else {alert(`Ответ неверный. Правильный ответ ${ElementFirstOfRandomArray} и ${ElementLastOfRandomArray}`); }
};
