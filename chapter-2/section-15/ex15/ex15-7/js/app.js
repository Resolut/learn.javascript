simple: for (var i = 2; i < 11; i++) {
    for (var j = 2; j < i; j++)
        if (i % j === 0) {
            continue simple;
        }
        alert(i);
}