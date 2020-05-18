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

function* WeaponGenerator() {
    yield 'Katana'
    yield 'Wakizashi'
}

const weaponsIterator = WeaponGenerator()

// let item
// while (!(item = weaponsIterator.next()).done) {
//     log(item !== null, item.value)
// }

for (let item of WeaponGenerator ()) {
    log(item !== null, item)
}