const log = console.log.bind(console)

// const outerValue = 'ninja'
// function outerFunction() {
//     log(outerValue === 'ninja', 'I can see the ninja.')
// }
//
// outerFunction()

// var outerValue = 'samurai'
// var later
//
// function outerFunction() {
//     var innerValue = 'ninja'
//
//     function innerFunction() {
//         log(outerValue === 'samurai')
//
//         log(innerValue === 'ninja')
//     }
//
//     later = innerFunction
// }
//
// outerFunction()
// later()

// function Ninja() {
//     var feints = 0
//     this.getFeints = function () {
//         return feints
//     }
//     this.feint = function () {
//         feints++
//     }
// }
//
// var ninja1 = new Ninja()
// ninja1.feint()
//
// log(ninja1.feints === undefined)
//
// log(ninja1.getFeints() === 1)
//
// var ninja2 = new Ninja()
// log(ninja2.getFeints() === 0)

// function skulk(ninja) {
//     report(ninja + ' skulking')
// }
//
// function report(message) {
//     log(message)
// }
//
// skulk('Kuma')
// skulk('Yoshi')

// var ninja = 'Hattori'
// log(ninja)

// function report() {
//     var intro = 'Aha!'
//     log(intro === 'Aha!')
//     log(action === 'Skulking')
//     log(action === 'Muneyoshi')
//
// }

// log(typeof fun === 'function')
//
// log(typeof myFunExp === 'undefined')
//
// log(typeof myArrow === 'undefined')
//
// function fun() {}
//
// var myFunExp = function () {}
//
// var myArrow = (x) => x

log(typeof fun === 'function')
var fun = 3

log(typeof fun === 'number')
function fun() {

}

log(typeof fun === 'number')