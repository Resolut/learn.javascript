function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  return Math.pow(phi, n) / Math.sqrt(5);
}

function fib(n) {
    var a = 1, b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibBinet(77)); // Неверно вычисленное значение из-за потерь разрядов в вычислениях 
console.log(fib(77)); // Это функция вычисляет верно!