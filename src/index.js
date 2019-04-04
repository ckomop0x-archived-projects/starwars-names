import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './starwars-names.json'
const getRandomItem = uniqueRandomArray(starWarsNames)

module.exports = {
    all: starWarsNames,
    random: random
};

function random(number) {
    var randomItems = [];

    if (number === undefined) {
        return getRandomItem()
    }

    for (var i = 0; i < number; i++) {
        randomItems.push(getRandomItem())
    }

    return randomItems;
}
