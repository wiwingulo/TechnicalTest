/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4
 };

function result(numbers) {
   numbers.a = numbers.a + numbers.b
   numbers.b = numbers.a - numbers.b
   numbers.a = numbers.a - numbers.b
}
 
//console.log(result(numbers));
console.log("A : " + numbers.a, "B : " + numbers.b);
result(numbers);
console.log("A : " + numbers.a, "B : " + numbers.b);
 