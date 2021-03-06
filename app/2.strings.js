// Task 01. padStart
// RU: Объявите три переменных: hour, minute, second.
//     Присвойте им следующие значения: 4, 35, 5.
//     Выведите в консоль время в формате 04:35:05.
// EN: Declare three variables: hour, minute, second.
//     Assign them the following values: 4, 35, 5.
//     Display the time in the format 04:35:05 in the console.
const time = '4'.padStart(2, '0') + ':' + '35'.padStart(2, '0') + ':' + '5'.padStart(2, '0');
console.log(time);

var hour = 4;
var minute = 35;
var second = 5;
console.log(hour.toString().padStart(2, 0) + ':' + minute.toString().padStart(2, 0) + ':' + second.toString().padStart(2, 0));
console.log(`$(hour.toString().padStart(2, 0)):$(minute.toString().padStart(2, 0)):$(second.toString().padStart(2, 0))`);

// Task 02. repeat
// RU: Создайте функцию, которая выведет в консоль пирамиду на 9 уровней как показано ниже
//     1
//     22
//     333
//     4444
//     ...
// EN: Create a function which displays a 9 level pyramid in the console according to the
//     following pattern
//     1
//     22
//     333
//     4444
//     ...
console.log("1");
console.log("2".repeat(2));
console.log("3".repeat(3));
console.log("4".repeat(4));

for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

// Task 03. includes
// RU: Напишите код, который выводит в консоль true, если строка str содержит
//     'viagra' или 'XXX', а иначе false.
//     Тестовые данные: 'buy ViAgRA now', 'free xxxxx'
// EN: Create a snippet of code which displays the value true in the console
//     when str contains 'viagra' or 'XXX', otherwise it displays false.

let checker = function (string) {
    let result;
    result = (string.toLowerCase().includes('viagra') || string.toLowerCase().includes('XXX'));
    return result;
}

// Task 04. includes + index
// RU: Проверить, содержит ли строка второе вхождение подстроки,
//     вернуть true/false.
// EN: Check whether the string contains a second occurrence of a substring,
//     return true / false.
function containsSecond(str, substr) {
    return str.includes(substr, str.indexOf(substr) + 1);
}

console.log(containsSecond('abcbc', 'b'))


// Task 05. Template literal
// RU: Создать строку: "ten times two totally is 20"
//     используя переменные:
//     const a = 10;
//     const b = 2;
//     и template literal
// EN: Create s string "ten times two totally is 20"
//     using the following variables:
//     const a = 10;
//     const b = 2;
//     and template literal
const a = 10;
const b = 2;
console.log(`ten times two totally is ${a * b}`);


// Task 06. normalize
// RU: Создайте функцию, которая сравнивает юникод строки.
//     Сравните две строки
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
// EN: Create a function that compares the unicode strings.
//     Compare 2 strings:
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
var str1 = '\u006d\u0061\u00f1';
var str2 = '\u006d\u0061\u006e\u0303';
console.log(str1);
console.log(str2);
console.log(str1.normalize() == str2.normalize());

// Task 07. endsWIth
// RU: Создайте функцию, которая на вход получает массив имен фалов и расширение файла
//     и возвращает новый массив, который содержит файлы указанного расширения.
// EN: Create a function that gets an array of file names and a file extension as its parameters
//     and returns a new array that contains the files of the specified extension.

function filesWithExtension(extension, ...files) {
    return files.filter(f => f.endsWith(`.${extension}`));
}

// Task 08. String.fromCodePoint
// RU: Создать функцию, которая выводит в консоль строчку в формате 'символ - код'
//     для кодов в диапазоне 78000 - 80000.
// EN: Create a function that displays a line in the format 'character - code' to the console
//     for codes in the range of 78000 - 80000.

for (i = 78000; i <= 80000; i++) {
    console.log(`${String.fromCodePoint(i)} - ${i}`);
}

// Task 09
// RU: Создайте функцию, которая должна выводить в консоль следующую пирамиду
//     Пример:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'
// EN: Create a function that should display the next pyramid in the console
//     Example:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'

// Task 10
// RU: Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой
//     и добавляет знак доллара перед числом в шаблонном литерале.
// EN: Create a currency tag function that forms numbers up to two decimal digits.
//     and adds a dollar sign before the number in the template literal.
