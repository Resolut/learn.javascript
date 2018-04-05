// вариант с помощью цикла
// function sumTo(num) {
//     var sum = 0;
//     for (var i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// вариант с помощью  рекусрсии
// function sumTo(num) {
//     if (num === 1) return 1;
//     return num + (sumTo(num - 1));
// }

// с помощью формулы для суммы чисел арифметической прогрессии
function sumTo(num) {
    return num * (num + 1) / 2;
}

console.log(sumTo(10));