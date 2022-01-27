// Object destructuring 1
// 8
// 1846

// Object destructuring 2
// {
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659,
// }

// Object destructuring 3
// 1) 'your name is Alejandro and you like purple'
// 2) 'your name is Melissa and you like green'
// 3) 'your name is undefined and you like green'

// Array destructuring 1
//1) 'Maya'
// 2) 'Marisa'
// 3) 'Chi'

// Array destructuring 2
// 1)'Raindrops on roses'
// 2)'whiskers on kittens'
// 3) ['Bright copper kettles', 'warm woolen mittens','Brown paper packages tied up with strings']

// Array destructuring 3
[20, 10, 30]

// ES5 Assigning variables to object properties

let obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { numbers: { a: a } } = obj;
const { numbers: { b: b } } = obj;

// ES5 Array Swap


let arr = [1, 2];
arr = [arr[1], arr[0]]



// raceResults()

let raceResults = ([first, second, third, ...rest]) => { return { first, second, third, rest } };