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