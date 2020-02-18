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

function getAllFromUSSortByLocation() {
    return people.filter(result => result.us === true).sort((a, b) => {
        if (a.age == b.location) {
            return 0;
        }
        if (a.age > b.location) {
            return 1;
        }
        if (a.age < b.location) {
            return -1;
        }
    });
}

function getAllUserSortByAge() {
    return people.sort((a, b) => {
        if (a.age == b.age) {
            return 0;
        }
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
    });
}

function getTotalMaleAgeUnderTwentyFive() {
    return people.filter(result => result.gender === 'm' && result.age < 25).reduce((sum, obj) => sum + obj.age, 0);
}

function getAllMaleCoderOverThirty() {
    return people.filter(result => result.gender === 'm' && result.coder ===true && result.age > 30);
}

function getTotalAgeAllUserInTexasNYAndLV() {
    return people.filter(result => result.location === 'new york' || result.location === 'texas' || result.location ==='las vegas').reduce((sum, obj) => sum + obj.age, 0);
}

module.exports = {
    getMoreThanTwentyFour,
    getTotalAgeAllUser,
    getAllFemale,
    getAllFromUSSortByLocation,
    getAllUserSortByAge,
    getTotalMaleAgeUnderTwentyFive,
    getAllMaleCoderOverThirty,
    getTotalAgeAllUserInTexasNYAndLV
}