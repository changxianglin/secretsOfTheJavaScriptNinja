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

// function* NinjaGenerator() {
//     try {
//         yield 'Hattori'
//         fail("The expected exception didn't occur")
//     }
//     catch (e) {
//         log(e === 'Catch this!', "Aha! we caught an exception")
//     }
// }
//
// const ninjaGenerator = NinjaGenerator()
//
// const result1 = ninjaGenerator.next()
// log(result1.value === 'Hattori', 'We got Hattori')
//
// ninjaGenerator.throw('Catch this!')

// function* NinjaGenerator(action) {
//     yield "Hattori " + action
//     return "Yoshi " + action
// }
//
// const ninjaIterator = NinjaGenerator('skulk')
// const result1 = ninjaIterator.next()
// const result2 = ninjaIterator.next()
//
// log(result1.value)
// log(result2.value)

// const ninjaPromise = new Promise((resolve, reject) => {
//     resolve('Hattori')
// })
//
// ninjaPromise.then(ninja => {
//     log(ninja === 'Hattori', 'We were promised Hattori!')
// }, err => {
//     log('Fail There should not be an error')
// })

// report('At code start')
//
// var ninjaDelayedPromise = new Promise((resolve, reject) => {
//     report('ninjaDelayedPromise executor')
//     setTimeout(() => {
//         report('Resolving ninjaDelayedPromise')
//         resolve('Hattori')
//     }, 500)
// })
//
// log(ninjaDelayedPromise !== null, 'After creating ninjaDelayedPromise')
//
// ninjaDelayedPromise.then(ninja => {
//     log(ninja === 'Hattori', 'ninjaDelayedPromise resovle handled with Hattori')
// })

// const promise = new Promise((resolve, reject) => {
//     reject('Explicitly reject a promise！')
// })

// promise.then(
//     () => log('Happy path , were not be called!'),
//     err => log('A promise was explicitly rejected!')
// )

// promise.then(
//     () => log('Happy path , were not be called!')
// ).catch(err => log('A promise was explicitly rejected!'))

// function getJSON(url) {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()
//         request.open('GET', url)
//         request.onload = function () {
//             try {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.response))
//                 } else {
//                     reject(this.status + " " + this.statusText)
//                 }
//             } catch (e) {
//                 reject(e.message)
//             }
//         }
//         request.onerror = function () {
//             reject(this.status + ' ' + this.statusText)
//         }
//         request.send()
//     })
// }
//
// getJSON('data/ninjas.json').then(ninjas => {
//     log(ninjas !== null, 'Ninjas obtained!')
// }).catch(e => log('Should not be here: ' + e))
//
// Promise.all([
//     getJSON('data/ninjas.json'),
//     getJSON('data/ninjas.json'),
//     getJSON('data/ninjas.json')])
//     .then(results => {
//         const ninjas = results[0], mapInfo = results[1], plan = results[2]
//         log(ninjas !== undefined && mapInfo !== undefined && plan !== undefined)
//     }).catch(error => {
//         log('A problem in carrying out our plan!')
// })
//
// Promise.race([getJSON('data/yoshi.json'), getJSON('data/hattori.json'), getJSON('data/hanzo.json')])
//         .then(ninja => {
//             log(ninja !== null, ninja.name + 'responded first')
//         })
//         .catch(error => log('Failure!'))

// try {
//     const ninjas = asyncGetJSON('data/ninjas.json')
//     const mission = asyncGetJSON(ninjas[0].messionUrl)
//     const messionDetail = asyncGetJSON(mission[0].detailsUrl)
// } catch(e) {
//     log('ho no,')
// }

// async(function *() {
//     try {
//         const ninjas = yield getJSON('data/ninjas.json')
//         const missions = yield getJSON(ninjas[0].missionsUrl)
//         const messageDetail = yield getJSON(missions[0].detailsUrl)
//     } catch(e) {
//         log('Oh no!')
//     }
// })
//
// function async(generator) {
//     var iterator = generator()
//
//     function handle(iteratorResult) {
//         if (iteratorResult.done) { return }
//
//         const iteratorValue = iteratorResult.value
//
//         if (iteratorValue instanceof Promise) {
//             iteratorValue.then(res => {
//                 handle(iterator.next(res))
//             }).catch(err => iterator.throw(err))
//         }
//     }
//
//     try {
//         handle(iterator.next())
//     }
//     catch (e) {
//         iterator.throw(e)
//     }
// }
//
// getJSON('data/ninjas.json', (err, ninjas) => {
//     if (err) {
//         log('Error fetching ninjas', err)
//         return
//     }
//
//     getJSON(ninjas[0].missionsUrl, (err, missions) => {
//         if (err) {
//             log('Error locating ninja missions', err)
//             return
//         }
//         log(missions)
//     })
// })
//
// async( function*() {
//     try {
//         const ninjas = yield getJSON('data/ninjas.json')
//         const missions = yield getJSON(ninjas[0].missionUrl)
//     } catch (e) {
//         log('An error has occurred')
//     }
// })

    (async function() {
        try {
            const ninjas = await getJSON('data/ninjas.json')
            const missions = await getJSON(ninjas[0].missionUrl)
            log(missions)
        }
        catch (e) {
            log('Error: ', e)
        }
    })()