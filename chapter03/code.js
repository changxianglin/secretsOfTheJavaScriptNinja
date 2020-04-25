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