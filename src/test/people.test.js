const people = require('../main/people');

test('count all users older than 24', () => {
    expect(people.getMoreThanTwentyFour()).toHaveLength(3);
});

test('get sample data user and check age is older than 24', () => {
    expect(people.getMoreThanTwentyFour()[0].age).toBeGreaterThan(24);
});

test('get total age of all users', () => {
    expect(people.getTotalAgeAllUser()).toBe(202);
});

test('total age of all users is greater than 0', () => {
    expect(people.getTotalAgeAllUser()).toBeGreaterThan(0);
});

test('count all female users', () => {
    expect(people.getAllFemale()).toHaveLength(2);
});

test('get sample data user and check gender is female', () => {
    expect(people.getAllFemale()[0].gender).toBe('f');
});

test('count all users from US', () => {
    expect(people.getAllFromUSSortByLocation()).toHaveLength(3);
});

test('get sample data user and check is from US', () => {
    expect(people.getAllFromUSSortByLocation()[0].us).toBe(true);
});

test('count all users', () => {
    expect(people.getAllUserSortByAge()).toHaveLength(5);
});

test('get first age sample data is less than the second one', () => {
    expect(people.getAllUserSortByAge()[0].age).toBeLessThanOrEqual(people.getAllUserSortByAge()[1].age);
});

test('get total user age that male and their age is under 25', () => {
    expect(people.getTotalMaleAgeUnderTwentyFive()).toBe(23);
});

test('List all-male coders over 30', () => {
    expect(people.getAllMaleCoderOverThirty()).toHaveLength(1);
});

test('get first sample that age is greater than 30', () => {
    expect(people.getAllMaleCoderOverThirty()[0].age).toBeGreaterThan(30);
});

test('Find the total age of everyone in texas, new york and vegas combined.', () => {
    expect(people.getTotalAgeAllUserInTexasNYAndLV()).toBe(152);
});