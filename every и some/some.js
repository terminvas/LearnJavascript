// Повертає true, якщо хоча б один елемент масиву повертає true логічної функції foo
function some(array, foo) {
   for (let element of array) {
      if (foo(element)) return true;
   }
   return false
}

console.log(some([-8, -38, -90, -110], (a) => a > 0));
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false