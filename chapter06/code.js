const log = console.log.bind(console)

// function* WeaponGenerator() {
//     yield 'Katana'
//     yield 'Wakizashi'
//     yield 'Kusarigama'
// }
//
// for (let weapon of WeaponGenerator()) {
//     log(weapon !== undefined)
// }

// function* WeaponGenerator() {
//     yield 'Katana'
//     yield 'Wakizashi'
// }
//
// const weaponsIterator = WeaponGenerator()
//
// const result1 = weaponsIterator.next()
//
// log(typeof result1 === 'object' && result1.value === 'Katana' && !result1.done, 'Katana received!')
//
// const result2 = weaponsIterator.next()
// log(typeof result2 === 'object' && result2.value === 'Wakizashi' && !result2.done, 'Wakizashi received!')
//
// const result3 = weaponsIterator.next()
// log(typeof result3 === 'object' && result3.value === undefined && result3.done, 'There are no more results!')

// function* WeaponGenerator() {
//     yield 'Katana'
//     yield 'Wakizashi'
// }
//
// const weaponsIterator = WeaponGenerator()

// let item
// while (!(item = weaponsIterator.next()).done) {
//     log(item !== null, item.value)
// }

// for (let item of WeaponGenerator ()) {
//     log(item !== null, item)
// }

// function* WarriorGenerator() {
//     yield 'Sun Tzu'
//     yield* NinjaGenerator()
//     yield "Genghis Khan"
// }
//
// function* NinjaGenerator() {
//     yield "Hattori"
//     yield "Yoshi"
// }
//
// for (let warrior of WarriorGenerator()) {
//     log(warrior !== null, warrior)
// }

// function* IdGenerator() {
//     let id = 0;
//     while (true) {
//         yield ++id
//     }
// }
//
// const idIterator = IdGenerator()
//
// const ninja1 = {id: idIterator.next().value}
// const ninja2 = {id: idIterator.next().value}
// const ninja3 = {id: idIterator.next().value}
//
// log(ninja1.id === 1, 'First ninja has id 1')
// log(ninja2.id === 2, 'Second ninja has id 2')
// log(ninja3.id === 3, 'Third ninja has id 3')

// function* NinjaGenerator(action) {
//     const imposter = yield ('Hattori ' + action)
//
//     log(imposter === 'Hanzo', 'The generator has been infiltrated')
//     yield ('Yoshi (" + imposter + ")' + action)
// }
//
// const ninjaIterator = NinjaGenerator('skulk')
//
// const result1 = ninjaIterator.next()
// log(result1.value === 'Hattori skulk', 'Hattori is skulking')
//
// const result2 = ninjaIterator.next('Hanzo')
// log(result2.value === 'Yoshi (Hanzo) skulk')

function* NinjaGenerator() {
    try {
        yield 'Hattori'
        fail("The expected exception didn't occur")
    }
    catch (e) {
        log(e === 'Catch this!', "Aha! we caught an exception")
    }
}

const ninjaGenerator = NinjaGenerator()

const result1 = ninjaGenerator.next()
log(result1.value === 'Hattori', 'We got Hattori')

ninjaGenerator.throw('Catch this!')