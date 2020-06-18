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

class NinjaCollection {
    constructor() {
        this.ninjas = ["Yoshi", 'Kuma', 'Hattori']
    }
    get firstNinja() {
        log('Getting firstNinja')
        return this.ninjas[0]
    }
    set firstNinja(value) {
        log('Setting firstNinja')
        this.ninjas[0] = value
    }
}

const ninjaCollection = new NinjaCollection()

log(ninjaCollection.firstNinja === 'Yoshi', 'Yoshi is the first ninja')

ninjaCollection.firstNinja = 'Hachi'

log(ninjaCollection.firstNinja === 'Hachi' && ninjaCollection.ninjas[0] === 'Hachi', 'Now Hachi is the first ninja')