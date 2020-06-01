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


function Ninja() {
    this.swung = false
    this.swingSword = function () { // 会重写原型方法
        return !this.swung
    }
}

Ninja.prototype.swingSword = function () {
    return this.swung
}

const ninja = new Ninja()
log(ninja.swingSword(), 'Called the instance method, not the prototype method.')