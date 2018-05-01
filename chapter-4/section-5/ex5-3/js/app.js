"use strict";

var salaries = {
  "Вася": 100,
  "Дима": 300,
  "Даша": 250
};

function getRichName(obj) {
    if (!obj) return "нет сотрудников";
    var maxSum = 0;
    var maxName = "";
    for (var item in obj) {
        if (obj[item] > maxSum) {
            maxSum += obj[item];
            maxName = item;
        }
    }
    return maxName;
}

console.log(getRichName(salaries));