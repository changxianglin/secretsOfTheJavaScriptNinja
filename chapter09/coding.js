const log = console.log.bind(console)

const ninjas = ['Kuma', 'Hattori', 'Yagyu']
const samurai = new Array('Oda', 'Tomoe')

log(ninjas.length === 3, 'There are three ninjas')
log(samurai.length === 2, 'And only two samurai')

log(ninjas[0] === 'Kuma', 'Kuma is the first ninja')
log(samurai[samurai.length - 1] === 'Tomoe', 'Tomoe is the last samurai')

log(ninjas[4] === undefined, 'We get undefined if we try to access an out of bounds index')

ninjas[4] = 'Ishi'
log(ninjas.length === 5, 'Arrays are automatically expanded')

ninjas.length = 2
log(ninjas.length === 2, 'There are only two ninjas now')
log(ninjas[0] === 'Kuma' && ninjas[1] === "Hattori", 'Kuma and Hattori')
log(ninjas[2] === undefined, 'But we have lost Yagyu')