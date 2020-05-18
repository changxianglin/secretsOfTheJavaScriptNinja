const log = console.log.bind(console)

function* WeaponGenerator() {
    yield 'Katana'
    yield 'Wakizashi'
    yield 'Kusarigama'
}

for (let weapon of WeaponGenerator()) {
    log(weapon !== undefined)
}