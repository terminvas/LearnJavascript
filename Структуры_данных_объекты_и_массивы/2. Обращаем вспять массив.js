function reverseArray(array) {
   result = [];
   for (let i = 0; i < array.length; i++) {
      result.unshift(array[i]);
   }
   return result
};
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
   for (let i = 0; 2 * i <= array.length - 1; i++) {
      let x = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = x;
   }
   return array
};
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]

/*
   Напишите функции reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
   console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
   var arrayValue = [1, 2, 3, 4, 5];
   reverseArrayInPlace(arrayValue);
   console.log(arrayValue); // → [5, 4, 3, 2, 1]
*/