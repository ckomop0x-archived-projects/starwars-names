var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames)

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
