function fibonaccy(n){
    return Math.round(
        ((Math.pow(((1 + Math.sqrt(5))/2), n)) - (Math.pow(((1 - Math.sqrt(5))/2), n)))/Math.sqrt(5)
    );
}

function multipleFibonaccy(n){
    return fibonaccy(n)*fibonaccy(n+1);
}

module.exports=multipleFibonaccy;