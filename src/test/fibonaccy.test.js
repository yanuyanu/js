const mf = require('../main/fibonaccy');

test ('Multiple Fibonaccy Set n = 1, then the result is 1', () => {
    expect(mf(1)).toBe(1);
});

test ('Multiple Fibonaccy Set n = 2, then the result is 1', () => {
    expect(mf(2)).toBe(2);
});

test ('Multiple Fibonaccy Set n = 3, then the result is 6', () => {
    expect(mf(3)).toBe(6);
});

test ('Multiple Fibonaccy Set n = 4, then the result is 15', () => {
    expect(mf(4)).toBe(15);
});

test ('Multiple Fibonaccy Set n = 5, then the result is 40', () => {
    expect(mf(5)).toBe(40);
});

test ('Multiple Fibonaccy Set n = 6, then the result is 104', () => {
    expect(mf(6)).toBe(104);
});