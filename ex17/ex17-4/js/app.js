function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAgeAnother (age) {
    return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAgeOther (age) {
    return (age > 18 ) || confirm("Родители разрешили?");
}