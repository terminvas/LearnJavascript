function range(firstIndex, endIndex, step) {
   let result = [];
   for (let index = firstIndex; (index <= firstIndex) && (index >= endIndex); index += step) {
      result.push(index);
   };
   return result
};
console.log(range(17, 5, 3))