const people = require('../data/people.json')

function getMoreThanTwentyFour() {
    return people.filter(result => result.age > 24);
}

function getTotalAgeAllUser() {
    return people.reduce((sum, obj) => sum + obj.age, 0);
}

function getAllFemale() {
    return people.filter(result => result.gender === 'f');
}

function getAllFromUS() {
    return people.filter(result => result.us === true);
}

console.log(getAllFromUS());