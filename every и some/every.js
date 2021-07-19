// Повертає true, якщо всі елементи масиву повертають true логічної функції foo
function every(array, foo) {
   for (let element of array) {
      if (!foo(element)) return false;
   }
   return true
}

console.log(every([8, 38, 90, 110], (a) => a > 0));
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false