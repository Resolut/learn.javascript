function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue("$157"));
console.log(extractCurrencyValue("$1234"));
