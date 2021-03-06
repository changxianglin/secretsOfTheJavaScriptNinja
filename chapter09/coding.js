const log = console.log.bind(console)

// const ninjas = ['Kuma', 'Hattori', 'Yagyu']
// const samurai = new Array('Oda', 'Tomoe')
//
// log(ninjas.length === 3, 'There are three ninjas')
// log(samurai.length === 2, 'And only two samurai')
//
// log(ninjas[0] === 'Kuma', 'Kuma is the first ninja')
// log(samurai[samurai.length - 1] === 'Tomoe', 'Tomoe is the last samurai')
//
// log(ninjas[4] === undefined, 'We get undefined if we try to access an out of bounds index')
//
// ninjas[4] = 'Ishi'
// log(ninjas.length === 5, 'Arrays are automatically expanded')
//
// ninjas.length = 2
// log(ninjas.length === 2, 'There are only two ninjas now')
// log(ninjas[0] === 'Kuma' && ninjas[1] === "Hattori", 'Kuma and Hattori')
// log(ninjas[2] === undefined, 'But we have lost Yagyu')

// const samurai = new Array('Oda', 'Tomome')

// const dictionary = {
//     'ja': {
//         'Ninjas for hire': 'bbb',
//     },
//     'zh': {
//         'Ninjas for hire': 'aaa',
//     },
//     'ko': {
//         'Ninjas for hire': 'xx',
//     }
// }
//
// const ninjaIslandMap = new Map()
// const ninja1 = { name: 'Yoshi' }
// const ninja2 = { name: 'Hattori' }
// const ninja3 = { name: 'Kuma' }
// ninjaIslandMap.set(ninja1, { homeIsland: 'Honshu'})
// ninjaIslandMap.set(ninja2, { homeIsland: 'Hokkaido'})
//
// log(ninjaIslandMap.get(ninja1).homeIsland === 'Honshu', 'The first mapping works')
// log(ninjaIslandMap.get(ninja2).homeIsland === 'Hokkaido', 'The second mapping works')
// log(ninjaIslandMap.get(ninja3) === undefined, 'The is no mapping for the third ninja!')

// const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu', 'Hattori'])
//
// log(ninjas.has('Hattori'), 'Hattori is in our set')
// log(ninjas.size === 3, 'There are only there ninjas in our set!')
//
// log(!ninjas.has('Yoshi'), 'Yoshi is not in , yet...')
// ninjas.add('Yoshi')
// log(ninjas.has('Yoshi'), 'Yoshi is added')
// log(ninjas.size === 4, 'There are four ninjas in our set!')
//
// log(ninjas.has('Kuma'), 'Kuma is already added')
// ninjas.add('Kuma')
// log(ninjas.size === 4, 'Adding Kuma again has no effect')
//
// for (let ninja of ninjas) {
//     log(ninja !== null, ninja)
// }

// const ninjas = ['Kuma', 'Hattori', 'Yagyu']
// const samurai = ['Hattori', 'Oda', 'Tomoe']
//
// const warrior = new Set([...ninjas, ...samurai])
//
// log(warrior.has('Kuma'), 'Kuma is here')
// log(warrior.has('Hattori'), 'And Hattori')
// log(warrior.has('Yagyu'), 'And Yagyu')
// log(warrior.has('Oda'), 'And Oda')
// log(warrior.has('Tomoe'), 'Tomoe, last but not least')
//
// log(warrior.size === 5, 'There are 5 warriors in total')

// const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu'])
// const samurai = new Set(['Hattori', 'Oda', 'Tomoe'])
//
// const ninjaSamurais = new Set([...ninjas].filter(ninjas => samurai.has(ninjas)))
//
// log(ninjaSamurais.size === 1, 'There is only one ninja samurai')
// log(ninjaSamurais.has('Hattori'), 'Hattori is his name')

const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu'])
const samurai = new Set(['Hattori', 'Oda', 'Tomoe'])

const pureNinjas = new Set([...ninjas].filter(ninja => !samurai.has(ninja)))

log(pureNinjas.size === 2, 'There is only one ninja samurai')
log(pureNinjas.has('Kuma'), 'Kuma is a true ninja')
log(pureNinjas.has('Yagyu'), 'Yagyu is true ninja')