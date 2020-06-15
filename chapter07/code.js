var log = console.log.bind(console)

// let obj = {
//     prop1: 1,
//     prop2: function () {
//
//     },
//     prop3: {},
// }
//
// obj.prop1 = 1
// obj.prop1 = []
// delete obj.prop2
//
// obj.prop4 = 'Hello'
//
// {
//     prop1: [],
//     prop3: {},
//     prop4: 'Hello'
// }

// const yoshi = { skulk: true }
// const hattori = { sneak: true }
// const kuma = { creep: true }
//
// log('skulk' in yoshi, 'Yoshi can skulk')
// log(!("sneak" in yoshi), 'Yoshi cannot sneak')
// log(!('creep' in yoshi), 'Yoshi cannot creep')
//
// Object.setPrototypeOf(yoshi, hattori)
//
// log('sneak' in yoshi, 'Yoshi can now sneak')
// log(!("creep" in hattori), 'Hattori cannot creep')

// function Ninja(){}
// Ninja.prototype.swingSword = function () {
//     return true
// }
//
// const ninja1 = Ninja()
// log(ninja1 === undefined, 'No instance of Ninja created.')
//
// const ninja2 = new Ninja()
// log(ninja2 && ninja2.swingSword && ninja2.swingSword(), 'Instance exists and method is callable.')


// function Ninja() {
//     this.swung = false
//     this.swingSword = function () { // 会重写原型方法
//         return !this.swung
//     }
// }
//
// Ninja.prototype.swingSword = function () {
//     return this.swung
// }
//
// const ninja = new Ninja()
// log(ninja.swingSword(), 'Called the instance method, not the prototype method.')
//
// function Ninja() {
//     this.swung = true
// }
//
// const ninja1 = new Ninja()
//
// Ninja.prototype.swingSword = function () {
//     return this.swung
// }
//
// log(ninja1.swingSword(), 'Method exists, even out of order.')
//
// Ninja.prototype = {
//     pierce: function () {
//         return true
//     }
// }
//
// log(ninja1.swingSword(), 'Our ninja can still swing!')
//
// const ninja2 = new Ninja()
// log(ninja2.pierce(), 'Newly created ninjas can pierce')
// log(!ninja2.swingSword, 'But they cannot swing!')

// function Ninja() {}
// const ninja = new Ninja()
//
// log(typeof ninja === 'object', 'The type of the instance is object.')
// log(ninja instanceof Ninja, 'instanceof identifies the constructor.')
// log(ninja.constructor === Ninja, 'The ninja object was created by the Ninja function.')

// function Person() {
//
// }
//
// Person.prototype.dance = function () {
//
// }
//
// function Ninja() {
//
// }
//
// Ninja.prototype = {
//     dance: Person.prototype.dance
// }
//
// const ninja = new Ninja()
//
// log(ninja instanceof Ninja, 'ninja receives functionality from the Ninja prototype')
//
// log(ninja instanceof Person, '... and the person prototype')
//
// log(ninja instanceof Object, '... and the Object prototype')

// var ninja = {}
// ninja.name = 'Yoshi'
// ninja.weapon = 'kusarigama'
//
// Object.defineProperty(ninja, 'sneaky', {
//     configurable: false,
//     enumerable: false,
//     value: true,
//     writable: true
// })
//
// log('sneaky' in ninja, 'We can access the new property')
//
// for (let prop in ninja) {
//     log(prop !== undefined, 'And enumerated property： ' + prop )
// }

// function Person() {
//
// }
//
// Person.prototype.dance = function () {
//
// }
//
// function Ninja() {
//
// }
// Ninja.prototype = new Person()
//
// Object.defineProperty(Ninja.prototype, 'constructor', {
//     enumerable: false,
//     value: Ninja,
//     writable: true
// })
//
// var ninja = new Ninja()
// log(ninja.constructor === Ninja)
//
// for (let prop in Ninja.prototype) {
//     log(prop === 'dance', 'The only enumerable property is dance!!!')
// }

// function Person() {
//
// }
//
// function Ninja() {
//
// }
//
// Ninja.prototype = new Person()
//
// const ninja = new Ninja()
//
// log(ninja instanceof Ninja , 'Our ninja is a Ninja')
// log(ninja instanceof Person, 'A ninja is also a Person')

// function Ninja() {
//
// }
//
// const ninja = new Ninja()
//
// log(ninja instanceof Ninja, 'Our ninja is a Ninja!')
//
// Ninja.prototype = {}
//
// log(!(ninja instanceof Ninja), 'The ninja is now not a Ninja!')

// class Ninja {
//     constructor(name) {
//         this.name = name
//     }
//
//     swingSword() {
//         return true
//     }
// }
//
// var ninja = new Ninja("Yoshi")
//
// log( ninja instanceof Ninja, 'Our ninja is a Ninja')
// log(ninja.name === 'Yoshi', 'named Yoshi')
// log(ninja.swingSword(), 'and he can swing a swrod')