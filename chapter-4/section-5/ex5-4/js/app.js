
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
    for (var item in obj) {
        if (isNumeric(obj[item])) obj[item] *= 2;
    }
}

console.log(menu.width);
multiplyNumeric(menu);
console.log(menu.width);