const log = console.log.bind(console)

// function Ninja(level) {
//     this.skillLevel = level
// }
//
// const ninja = new Ninja(100)
//
// ninja.skillLevel = 20

// const ninjaCollection = {
//     ninjas: ['Yoshi', 'Kuma', 'Hattori'],
//     get firstNinja() {
//         log('Getting firstNinja')
//         return this.ninjas[0]
//     },
//     set firstNinja(value) {
//         log('Setting firstNinja')
//         this.ninjas[0] = value
//     }
// }
//
// log(ninjaCollection.firstNinja === 'Yoshi', 'Yoshi is the first ninja')
//
// ninjaCollection.firstNinja = 'Hachi'
//
// log(ninjaCollection.firstNinja === 'Hachi' && ninjaCollection.ninjas[0] === 'Hachi', 'Now Hachi is the first ninja')

// class NinjaCollection {
//     constructor() {
//         this.ninjas = ["Yoshi", 'Kuma', 'Hattori']
//     }
//     get firstNinja() {
//         log('Getting firstNinja')
//         return this.ninjas[0]
//     }
//     set firstNinja(value) {
//         log('Setting firstNinja')
//         this.ninjas[0] = value
//     }
// }
//
// const ninjaCollection = new NinjaCollection()
//
// log(ninjaCollection.firstNinja === 'Yoshi', 'Yoshi is the first ninja')
//
// ninjaCollection.firstNinja = 'Hachi'
//
// log(ninjaCollection.firstNinja === 'Hachi' && ninjaCollection.ninjas[0] === 'Hachi', 'Now Hachi is the first ninja')

// function Ninja() {
//     let _skillLevel = 0
//     Object.defineProperty(this, 'skillLevel', {
//         get: () => {
//             log('The get method is called')
//             return _skillLevel
//         },
//         set: (value) => {
//             log('The set method is called')
//             _skillLevel = value
//         }
//     })
// }
//
// const ninja = new Ninja()
//
// log(typeof ninja._skillLevel === 'undefined', 'We cannot access a private property ')
//
// ninja.skillLevel = 10
//
// log(ninja.skillLevel === 10, 'The value was updated')

// function Ninja() {
//     let _skillLevel = 0
//
//     Object.defineProperty(this, 'skillLevel', {
//         get: () => _skillLevel,
//         set: value => {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('Skill level should be a number')
//             }
//             _skillLevel = value
//         }
//     })
// }
//
// const ninja = new Ninja()
//
// ninja.skillLevel = 10
//
// log(ninja.skillLevel === 10, 'The value was updated')
//
// try {
//     ninja.skillLevel = 'Creat'
//     log('Should not be here')
// } catch (e) {
//     log('Setting a non-integer value throws an exception')
// }

// const shogun = {
//     name: 'Yoshiaki',
//     clan: 'Ashikaga',
//     get fullTitle() {
//         return this.name + ' ' + this.clan
//     },
//     set fullTitle(value) {
//         const segments = value.split(' ')
//         this.name = segments[0]
//         this.clan = segments[1]
//     }
// }
//
// log(shogun.name === 'Yoshiaki', 'Our shogun Yoshiaki')
// log(shogun.clan === 'Ashikaga', 'Of clan Ashikaga')
// log(shogun.fullTitle === 'Yoshiaki Ashikaga', 'The full name is now Yoshiaka Ashikaga')
//
// shogun.fullTitle = 'Teyasu Tokugawa'
// log(shogun.name === 'Teyasu', 'Our shogun Teyasu')
// log(shogun.clan === 'Tokugawa', 'Of clan Tokugawa')
// log(shogun.fullTitle === 'Teyasu Tokugawa', 'The full name is now Teyasu Tokugawa')

// log(representative.nickname === 'Tenno', 'The nickname is also accessible through the proxy')

// function Ninja() {
//     let _skillLevel = 0
//
//     Object.defineProperty(this, 'skillLevel', {
//         get: () => {
//             log('skillLevel get method is called')
//             return _skillLevel
//         },
//         set: value => {
//             log('skillLevel set method is called')
//             _skillLevel = value
//         }
//     })
// }
//
// const ninja = new Ninja()
// ninja.skillLevel
// ninja.skillLevel = 4

// function makeLoggable(target) {
//     return new Proxy(target, {
//         get: (target, property) => {
//             log('Reading ' + property)
//             return target[property]
//         },
//         set: (target, property, value) => {
//             log('Writing value ' + value + ' to ' + property)
//             target[property] = value
//         }
//     })
// }
//
// let ninja = { name: 'Yoshi' }
// ninja = makeLoggable(ninja)
//
// log(ninja.name === 'Yoshi', 'Our ninja Yoshi')
// ninja.weapon = 'sword'

// function isPrime(number) {
//     if (number < 2) {
//         return false
//     }
//
//     for (let i = 2; i < number ; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }
//
// isPrime = new Proxy(isPrime, {
//     apply: (target, thisArg, args) => {
//         console.time('isPrmise')
//         const result = target.apply(thisArg, args)
//         console.timeEnd('isPrimse')
//         return result
//     }
// })
//
// isPrime(1299827)

// function Floder() {
//     return new Proxy({}, {
//         get: (target, property) => {
//             log('Reading ' + property)
//             if (!(property in target)) {
//                 target[property] = new Floder()
//             }
//
//             return target[property]
//         }
//     })
// }
//
// const rootFolder = new Floder()
//
// try {
//     rootFolder.ninjasDir.firstNinjaDir.ninjaFile = 'yoshi.txt'
//     log('An exception was not raised')
// } catch (e) {
//     log('An exception has occurred')
// }
//
// const rootFolder = new Floder()
// rootFolder.ninjasDir.firstNinjaDir.ninjaFile = 'yoshi.txt'

function createNegativeArrayProxy(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('Expected an array')
    }
    return new Proxy(array, {
        get: (target, index) => {
            index = +index
            return target[index < 0 ? target.length + index : index]
        },
        set: (target, index, val) => {
            index = +index
            return target[index < 0 ? target.length + index : index] = val
        }
    })
}

// const ninjas = ['Yoshi', 'Kuma', 'Hattori']
// const proxiedNinjas = createNegativeArrayProxy(ninjas)
//
// log(ninjas[0] === 'Yoshi' && ninjas[1] === 'Kuma' && ninjas[2] === 'Hattori', 'Array items accedded through positive indexes')
//
// log(proxiedNinjas[0] === 'Yoshi' && proxiedNinjas[1] === 'Kuma' && proxiedNinjas[2] === 'Hattori', 'Array items accessed through positive indexes on a proxy')
//
// log(typeof ninjas[-1] === 'undefined' && typeof ninjas[-2] === 'undefined' && typeof ninjas[-3] === 'undefined', '' +
//     'Items cannot be accessed through negative indexed on an array')
//
// log(proxiedNinjas[-1] === 'Hattori' && proxiedNinjas[-2] === 'Kuma' && proxiedNinjas[-3] === 'Yoshi', 'But the can be accessed through negative indexes')
//
// proxiedNinjas[-1] = 'Hachi'
// log(proxiedNinjas[-1] === 'Hachi' && ninjas[2] === 'Hachi', 'Items can be changed through negative indexes')

function measure(items) {
    const startTime = new Date().getTime()

    for (let i = 0; i < 500000; i++) {
        items[0] === 'Yoshi'
        items[1] === 'Kuma'
        items[2] === 'Hattori'
    }
    return new Date().getTime() - startTime
}

const ninjas = ['Yoshi', 'Kuma', 'Hattori']
const proxiedNinjas = createNegativeArrayProxy(ninjas)

log('Proxies are around', Math.round(measure(proxiedNinjas)/measure(ninjas)), 'times lower')