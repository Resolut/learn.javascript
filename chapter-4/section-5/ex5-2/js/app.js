"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function getSum(obj) {
    var sum = 0;
    for (var item in obj) {
        sum += obj[item];
    }
    return sum;
}

console.log(getSum(salaries));