function divideOneTo(x) {
  if (x != 0) {
    return 1/x;
  } else {
    return "А на ноль делить нельзя!";
  }
}

console.log(divideOneTo(0))
console.log(divideOneTo(123))
console.log(divideOneTo("a = 123"))