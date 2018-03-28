var number = +prompt("Введите число:", "25");
function isInteger(num) {

 return ((num ^ 0) === num);
}

console.log(isInteger(number));