function pow(x, n) {
  if (n < 0) return NaN;
  if ((n ^ 0) !== n) return NaN;
  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}