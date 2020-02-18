const cb = require('../main/chess_board');

test ('ChessBoard Set n = 1, then the result is 1', () => {
    expect(cb.chessBoard(1)).toBe(1);
});

test ('ChessBoard Set n = 2, then the result is 2', () => {
    expect(cb.chessBoard(2)).toBe(2);
});

test ('ChessBoard Set n = 3, then the result is 4', () => {
    expect(cb.chessBoard(3)).toBe(4);
});

test ('ChessBoard Set n = 4, then the result is 8', () => {
    expect(cb.chessBoard(4)).toBe(8);
});

test('totalChessBoard result 18446744073709551615n', () => {
    expect(cb.totalChessBoard()).toBe(18446744073709551615n);
});