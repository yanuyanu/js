const sos = require('./sum_of_squares');

test ('Set n = 1, then the result is 1', () => {
    expect(sos(1)).toBe(1);
});

test ('Set n = 2, then the result is 5', () => {
    expect(sos(2)).toBe(5);
});

test ('Set n = 3, then the result is 14', () => {
    expect(sos(3)).toBe(14);
});

test ('Set n = 10000000, then the result is 333333383333335000000', () => {
    expect(sos(10000000)).toBe(333333383333335000000);
});