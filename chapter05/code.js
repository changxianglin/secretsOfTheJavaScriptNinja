const log = console.log.bind(console)

// const outerValue = 'ninja'
// function outerFunction() {
//     log(outerValue === 'ninja', 'I can see the ninja.')
// }
//
// outerFunction()

var outerValue = 'samurai'
var later

function outerFunction() {
    var innerValue = 'ninja'

    function innerFunction() {
        log(outerValue === 'samurai')

        log(innerValue === 'ninja')
    }

    later = innerFunction
}

outerFunction()
later()