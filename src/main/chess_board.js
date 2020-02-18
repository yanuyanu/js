function chessBoard(n){
    return Math.pow(2, n-1);
}

function totalChessBoard(){
    return BigInt((1n << 64n) -1n);
}

module.exports = {chessBoard, totalChessBoard};