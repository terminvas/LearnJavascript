function range(firstIndex, endIndex, step) {
   let result = [];
   for (let index = firstIndex; (index <= Math.max(firstIndex, endIndex)) && (index >= Math.min(firstIndex, endIndex)); index += step) {
      result.push(index);
   };
   return result
};
console.log(range(2, 9, 2))