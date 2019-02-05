
// Task 01
// RU: Создайте асинхронную функцию f1, используя FDS (Function Declaration Statement).
//     Функция должна принимать два параметра a и b и возвращать сумму a+b.   
//     Выведите значение, которое вернет функция в консоль.
//     Обработаете промис и выведите значение в консоль.
// EN: Create an async function f1 as a Function Declaration Statement.
//     The function should take two parameters a and b and return a sum a+b.
//     Display the result of function in the console.
//     Process a promise and display value in the console.
//done
// async function f1(a, b) {
//     return a + b;
// }

// const p = f1(1, 2);
// console.log(p);
// p.then(data => console.log(data));

// Task 02
// RU: Создайте асинхронную функцию f2, используя FDE (Function Definition Expression).
//     Функция должна возвращать 'Promise Data', используя Promise.resolve()
//     Выведите значение, которое вернет функция в консоль.
//     Обработаете промис и выведите значение в консоль.
// EN: Create an async function f2 as a Function Definition Expression.
//     The function should return the string 'Promise data' using Promise.resolve() method.
//     Display the result of function in the console.
//     Process a promise and display value in the console.

// const f2 = async function() {
//     return Promise.resolve('promise data');
// }

// const p2 = f2();
// console.log(p2);
// p2.then(data => console.log(data));

// Task 03
// RU: Создайте класс C1. Добавьте асинхронный метод f3.
//     Метод должен генерить исключение 'Error occurs in f3 method'.
//     Создайте экземпляр класса и вызовите метод f3.
//     Обработаете промис.
// EN: Create a class C1. Add async method f3.
//     Method should throw an exception 'Error occurs in f3 method'.
//     Create an instance of the class and call the method f3.
//     Process a promise and display value in the console.

// class C1 {
//     async f3() {
//         throw new Error('Error occurs in f3 method');
//     }
// }

// const c1 = new C1();
// console.log(c1);

// const p3 = c1.f3();
// console.log(p3);
// // we should use p3 catch
// p3.catch(err => console.log(err));

// Task 04
// RU: Cоздайте функцию makeRequest, используя FDS (Function Declaration Statement).
//     Функция должна принимать один параметр - url и возвращать промис,
//     который перейдет в состояние resolved через 2с. и вернет значение параметра.
//     Первой строкой в функции выведите сообщение 'makeRequest is called'.
//     Cоздайте функцию f4, используя FDS (Function Declaration Statement).
//     Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.
// EN: Create a functiom makeRequest as a Function Declaration Statement.
//     The function should take one parameter - url and return a promise,
//     which should be resolved after 2s and it should return the value of the parameter url.
//     The first line of code in the function should display message 'makeRequest is called' in the console.
//     Create a function f4 as a Function Declaration Statement.
//     The function f4 should call the function makeRequest, get its result and display it in the console.

// function makeRequest(url) {
//     console.log('makeRequest is called');
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, url);
//     });
// }

// function f4() {
//     const result = makeRequest('http://wp.pl');
//     console.log(result);
// }

// f4();
// Task 05
// RU: Внесите изменения в функцию f4 из предыдущего задания так, чтобы в консоле появилось
//     значение переданого параметра в функцию makeRequest.
// EN: Make changes to the function f4 from the previous task. This function should display the value
//     of the parameter of the function makeRequest in the console.

// function makeRequest(url) {
//     console.log('makeRequest is called');
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, url);
//     });
// }

// async function f4() {
//     const result = await makeRequest('http://wp.pl');
//     console.log(result);
// }

// f4();


// Task 06
// RU: Cоздайте асинхронную функцию f6, используя FDS (Function Declaration Statement).
//     Функция должна вызвать два раза функцию makeRequest с разными значениями параметра.
//     Перед вызовом и после каждого вызова makeRequest функция должна выводить в консоль любое сообщение.
//     Создать и вернуть массив, который должен содержать значения переданые функции makeRequest.
//     Обработаете результат работы функции f6.
// EN: Create an async function f6 as a Function Declaration Statement.
//     This function should call the function makeRequest two times with different values of its parameter.
//     The function f6 should display any message in the console before and after each call 
//     of the function makeRequest.
//     Create and return the array from the function f6, which should contains the values of the 
//     parameter of the function makeRequest.
//     Process the result of the function f6.

// function makeRequest(url) {
//     console.log('makeRequest is called');
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, url);
//     });
// }

// async function f6() {
//     const result = [];
//     console.log('A');
//     result.push(await makeRequest(1))
//     console.log('B');
//     result.push(await makeRequest(2))
//     console.log('C');
//     return result;
// }


// // f6();
// f6().then(data => console.log(data)); //values

// Task 07
// RU: Измените асинхронную функцию f6 из предыдущего задания так, чтобы вызовы функции
//     makeRequest выполнялись паралельно.
// EN: Make changes to the async function f6 from the previous task. This function should 
//     call the function makeRequest with different values of its parameter simultaneously.

// function makeRequest(url) {
//     console.log('makeRequest is called');
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, url);
//     });
// }

// async function f6() {
//     const result = [];
//     console.log('A');
//     result.push(await Promise.all([makeRequest(1), makeRequest(2)]));
//     console.log('B');
//     return result;
// }


// // f6();
// f6().then(data => console.log(data)); //values

// Task 08
// RU: Создайте масив урлов ['http://a', 'http://b'].
//     Создайте функцию sendRequest, которая принимает один параметр - url.
//     Функция в первой строке должна выводить в консоль сообщение 'sendRequest is called'
//     и возвращать через 2 с для первого урла объект { name: 'Ann' }, а для второго
//     урла объект { age: 16 }.
//     Создайте асинхронную функцию f8 которая должна вызвать функцию sendRequest для каждого урла
//     и вернуть объект {name: 'Ann', age: 16}
//     Обработайте результат работы функции f8
// EN: Create the array of urls ['http://a', 'http://b'].
//     Create the function sendRequest which should take one parameter - url.
//     The function should display the message 'sendRequest is called' in the console 
//     in its first line of code. Then the function should return the object { name: 'Ann' } for the 
//     first url after 2s and the object { age: 16 } for the second url after 2s.
//     Create the async function f8, which should call the function sendRequest with each value 
//     from the array and return the object {name: 'Ann', age: 16}.
//     Process the reuslt of the function f8

const requests = ['http://a', 'http://b'];

function sendRequest(url) {
    console.log('sendRequest is called');

    const responses = [
        [
            'http://a',
            {
                name: 'Ann'
            }
        ],
        [
            'http://b',
            {
                age: 16
            },
        ]
    ];

    const m = new Map(responses);

    return new Promise(resolve => {
        setTimeout(resolve, 2000, m.get(url));
    });
}

async function f8() {
    const result = {};
    const arrayofPromises = requests.map(url => sendRequest(url));

    const p = await Promise.all(arrayofPromises);
    console.log(p);
    p.forEach(el => {
        result = {
            ...result,
            ...el
        };
    });

    console.log(result);
}

f8();

