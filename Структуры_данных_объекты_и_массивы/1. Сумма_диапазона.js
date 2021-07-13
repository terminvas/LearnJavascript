function range(firstIndex, endIndex, step = 1) {
   let result = [];
   for (let index = firstIndex; (index <= Math.max(firstIndex, endIndex)) && (index >= Math.min(firstIndex, endIndex)); index += step) {
      result.push(index);
   };
   return result
};

console.log(range(5, 2, -1));

function sum(array) {
   let result = 0;
   for (let index = 0; index < array.length; index++) {
      result += array[index];
   };
   return result
};

console.log(sum([1, 2, 3, 4]));