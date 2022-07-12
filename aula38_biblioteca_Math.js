//Estudo da biblioteca MATH
/* Math.random();
console.log(Math.random()); */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(6, 18));
console.log(Math.max(1, 15, 89, 45, 7, 13));
console.log(Math.min(1, 15, 89, 45, 7, 13));
console.log(Math.PI)
console.log(Math.SQRT1_2)
console.log(Math.SQRT2)

;

console.log(Math.abs(-2));
console.log(Math.abs('-2'));
console.log(Math.abs(null));
console.log(Math.abs([1,2]));