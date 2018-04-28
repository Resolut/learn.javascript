// // медленный вариант с рекурсией
// function fib(n) {
//     if (n < 3) return 1;
//     return fib(n - 1) + fib(n - 2);
// }

// быстрый вариант с циклом
function fib(n) {
    var a = 1, b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(10));
console.log(fib(77));
