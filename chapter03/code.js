// var ninjaFunction = function () {
//     console.log('function')
// }
//
// ninjaFunction.ninja = 'Hanzo'
//
// console.log(ninjaFunction.ninja)
//
// ninjaFunction()

// function useless(ninjaCallback) {
//     return ninjaCallback()
// }
//
// var text = 'Domo arigato!'
// report('Before defining functions')
//
// function useless(ninjaCallback) {
//     report('In useless function')
//     return ninjaCallback()
// }
//
// function getText() {
//     report('In getText function')
//     return text
// }
//
// report('Before making all the calls')
//
// assert(useless(getText) === text, 'The useless function works! ' + text)
//
// report('After the calls have been made')

// var text = 'Demo arigato!'
//
// function useless(ninjaCallback) {
//     return ninjaCallback()
// }
//
// console.log(useless(function () {
//     return text
// }) === text)

// var values = [0, 3, 2, 5, 7, 4, 8, 1]
//
// values.sort(function (value1, value2) {
//     return value1 - value2
// })

// var ninja = {}
// ninja.name = 'hitsuke'
//
// var wieldSword = function () {
//
// }
//
// wieldSword.swordType = 'katana'

// var store = {
//     nextId: 1,
//     cache: {},
//     add: function (fn) {
//         if (!fn.id) {
//             fn.id = this.nextId++
//             this.cache[fn.id] = fn
//             return true
//         }
//     }
// }
//
// function ninja() {
//     console.log(store.add(ninja))
//     console.log(!store.add(ninja))
// }
//
// ninja()

// function isPrime(value) {
//     if (!isPrime.answers) {
//         isPrime.answers = {}
//     }
//     if (isPrime.answers[value] !== 'undefined') {
//         return isPrime.answers[value]
//     }
//     var prime = value !== 0 && value !== 1;
//     for (var i = 2; i < value; i++) {
//         if (value % i === 0) {
//             prime = false
//             break
//         }
//     }
//     return isPrime.answers[value] = prime
// }
//
// console.log(isPrime(5), '5 is primse!')
// console.log(isPrime.answers[5], 'The answer was cached!')
//
// if (!isPrime.answers) {
//     isPrime.answers = {}
// }
//
// if (isPrime.answers['value'] !== 'undefined') {
//     return isPrime.answers['value']
// }

// function samurai() {
//     return 'samurai here'
// }
//
// function ninja() {
//     function hiddenNinja() {
//         return 'ninja here'
//     }
//
//     return hiddenNinja()
// }

// var a = 3
// myFunction(4)
// var a = function () {
//
// }
// myFunction(function () {
//
// })

// function myFunctionDeclaration() {
//     function innnerFunction() {
//
//     }
// }
//
// var myFunc = function () {
//
// }
//
// myFunc(function () {
//     return function () {
//
//     }
// })
//
// (function namedFunctionExpression() {
//
// })()

// function doSomething(action) {
//     action()
// }

// (function (a) {
//     console.log(a)
// })(3)

// var values = [0, 3, 2, 5, 7, 4, 8, 1]
// values.sort(function (value1, value2) {
//     return value1 - value2
// })
//
// values.sort((values1, values2) => values1 - values2)

