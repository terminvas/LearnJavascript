// Повертає true, якщо всі елементи масиву повертають true логічної функції foo
function every(array, foo) {
   for (let i = 0; i < array.length; i++) {
      if (!foo(array[i])) return false;
   }
   return true
}

console.log(every([8, 38, 90, 110], (a) => a > 0));
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false