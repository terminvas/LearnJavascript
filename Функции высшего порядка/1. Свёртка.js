let arrays = [[1, 2, 3], [4, 5], [6]];

let CommonArray = arrays.reduce(function (result, arrayIndex) {
   return result.concat(arrayIndex);
}, []);
console.log(CommonArray);

// Спосіб без reduce
/* function CommonArray(arrays) {
   result = [];
   for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
         result.push(arrays[i][j]);
      }
   }
   return result
} */

//console.log(arrays[0].concat(arrays[1], arrays[2])); // без функції

/*
   Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
      var arrays = [[1, 2, 3], [4, 5], [6]];
      // Ваш код тут
      // → [1, 2, 3, 4, 5, 6]
*/