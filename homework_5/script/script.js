/* Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа */

let disNumber = prompt("Enter disNumber")
dis = 10;
console.log(`Your disNumber- ${disNumber}`);
console.log(`Your disNumber after 10% is- ${disNumber * dis / 100}`);

/* Написать программу, которая получает два числа и выводит наименьшее */

let compNumber1 = prompt("Enter first you want to compare");
let compNumber2 = prompt("Enter second you want to compare");
if (compNumber1 > compNumber2) {
    console.log(`Your highest number is ${compNumber1}`);
} else {
    console.log(`Numbers are equal`);
}

/* Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’ */

let number = prompt("Plz enter your dolbanie cifri");
if (number < 100) {
    console.log(`Your number is  less than 100`);
} else if (number > 100) {
    console.log(`Your number is higher than 100`);
} else {
    console.log(`Your number equals 100`);
}

/* Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний. */
let year = prompt("Enter year of birth");
let checkYear = 2023;
let check = checkYear - year;
if (check >= 18) {
    console.log(`Hello`);
} else {
    console.log(`Hi`);
}

/* Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof). */

const array = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN];
for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (typeof element === 'string') {
        console.log(`${element} is string`);

    } else if (typeof element === 'object') {
        console.log(`${element} is object`);

    } else if (isNaN(array[index])) {
        console.log(`${element} is NaN`);
    }
    else if (typeof element === 'number') {
        console.log(`${element} is a number`);
    }
    else {
        console.log(`${element} what is that?`);
    }

}