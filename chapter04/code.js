// function whatever(a, b, c) {
//     console.log(a === 1, 'The value of a is 1')
//     console.log(b === 2, 'The value of b is 2')
//     console.log(c === 3, 'The value of c is 3')
// }


// function skulk(name) {
//     console.log(name)
// }
//
// function Ninja(name) {
//     console.log(name)
// }
//
// skulk('Hattori')
//
// (function (who) {
//     return who
// })('Hattori')
//
// var ninja = {
//     skulk: function () {
//
//     }
// }
//
// ninja.skulk('Hattori')
// ninja = new Ninja('Hattori')
// skulk.call(ninja, 'Hattori')
// skulk.apply(ninja, ['Hattori'])

// function ninja() {
//
// }
//
// ninja()
//
// var samurai = function () {
//
// }
//
// samurai()
//
// (function () {
//     console.log('EFIE')
// })()

// var ninja = {}
// ninja.skulk = function () {
//     console.log('method')
// }
//
// ninja.skulk()

function Ninja() {
    this.skulk = function () {
        return this
    }
}

var ninja1 = new Ninja()
var ninja2 = new Ninja()

console.log(ninja1.skulk() == ninja1, '1')
console.log(ninja2.skulk() == ninja2, '2' )