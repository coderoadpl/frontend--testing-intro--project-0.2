const arr = ['a', 'b', ['c', 'd']]
const flattened = arr.flat()

console.log(flattened)

const me = { name: 'Mateusz', lastName: 'Choma' }

const meEntries = Object.entries(me)

console.log(meEntries)

const meEntriesLowerCase = meEntries.map(([key, val]) => {
    return [key, val.toLowerCase()]
})

console.log(meEntriesLowerCase)

const meLowerCase = Object.fromEntries(meEntriesLowerCase)

console.log(meLowerCase)

const greetings = '   Hi Mateusz!   '
console.log(greetings.trim())
console.log(greetings.trimStart())
console.log(greetings.trimEnd())

const doggos = [
    { name: 'Abby', rating: 12 },
    { name: 'Bandit', rating: 13 },
    { name: 'Choco', rating: 14 },
    { name: 'Daisy', rating: 12 },
    { name: 'Elmo', rating: 12 },
    { name: 'Falco', rating: 13 },
    { name: 'Ghost', rating: 14 },
]

const doggosSorted = doggos.sort((a, b) => b.rating - a.rating)

console.log(doggosSorted)