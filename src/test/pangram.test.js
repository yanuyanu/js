const pangram = require('../main/pangram')

test ("if sentence is 'Abcdefghijklmnopqrstuvwxyz' and return true", () => {
    expect(pangram('Abcdefghijklmnopqrstuvwxyz')).toBe(true);
});

test ("if sentence is 'a quick movement of the enemy will jeopardize five gunboats' and return false", () => {
    expect(pangram('a quick movement of the enemy will jeopardize five gunboats')).toBe(false);
});

test ("if sentence is 'Pack my box with five dozen liquor jugs' and return true", () => {
    expect(pangram('Pack my box with five dozen liquor jugs')).toBe(true);
});

test ("if sentence is 'five boxing wizards jump quickly at it' and return true", () => {
    expect(pangram('five boxing wizards jump quickly at it')).toBe(false);
});

test ("if sentence is '7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog' and return false", () => {
    expect(pangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
});

test ("if sentence is 'The_quick_brown_fox_jumps_over_the_lazy_dog' and return false", () => {
    expect(pangram('The_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true);
});

test ("if sentence is 'Five quacking Zephyrs jolt my wax bed.' and return false", () => {
    expect(pangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
});