var log = console.log.bind(console)

let obj = {
    prop1: 1,
    prop2: function () {

    },
    prop3: {},
}

obj.prop1 = 1
obj.prop1 = []
delete obj.prop2

obj.prop4 = 'Hello'

{
    prop1: [],
    prop3: {},
    prop4: 'Hello'
}