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

var store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
        if (!fn.id) {
            fn.id = this.nextId++
            this.cache[fn.id] = fn
            return true
        }
    }
}

function ninja() {
    console.log(store.add(ninja))
    console.log(!store.add(ninja))
}

ninja()