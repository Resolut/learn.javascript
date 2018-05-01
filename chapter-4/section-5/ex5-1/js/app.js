function isEmpty(obj) {
    for (var item in obj) {
        if (obj[item] !== undefined) return false;
    }
    return true;
}

var person = {
    // name: "Dmitriy",
    // surname: "Samofalov",
    // age: 29
};

var cat = {name: "Masya", age : 4};

console.log(isEmpty(person));
console.log(isEmpty(cat));
