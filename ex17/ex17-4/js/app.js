var num = +prompt("Введите число больше 0");
var power = +prompt("Введите степень числа");

function pow(x, n) {
    var result = x;
    while (n-- > 0) {
        result *= x;
    }
    return result;
}

console.log(pow(num, power));