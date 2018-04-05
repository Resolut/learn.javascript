function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

// НЕ УДАЛЯТЬ!
// //вариант с использованием тернарного оператора " ? : "
// function checkAge (age) {
//     return age > 18 ? true : confirm("Родители разрешили?");
// }
//
// //вариант с использованием оператора "||"
// function checkAge (age) {
//     return (age > 18 ) || confirm("Родители разрешили?");
// }