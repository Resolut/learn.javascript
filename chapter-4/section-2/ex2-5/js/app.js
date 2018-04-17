function getDecimal(num) {
  return num - (num ^ 0);
}

alert(getDecimal(12.5));