function checkSpam(str) {
    var target = "xxx";
    var target2 = "viagra";
    var result = str.toLowerCase();
    if (~result.indexOf(target) || ~result.indexOf(target2)) return true;

    return false;
}

console.log(checkSpam("free xxxxxxxx"));
console.log(checkSpam("buy ViAgRA now"));
