function reverseNumber(number) {
  return parseFloat(number.toString().split("").reverse().join().replace(/,/g, ''));
}

console.log(reverseNumber(12345));

console.log(reverseNumber(555));