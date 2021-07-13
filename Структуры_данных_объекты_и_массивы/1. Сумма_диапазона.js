function range(firstIndex, endIndex, step = firstIndex < endIndex ? 1 : -1) {
   let result = [];
   if (step > 0) {
      for (let index = firstIndex; index <= endIndex; index += step) {
         result.push(index);
      }
   } else {
      for (let index = firstIndex; index >= endIndex; index += step) {
         result.push(index);
      };
   };
   return result
};

console.log(range(15, 2, -3));

function sum(array) {
   let result = 0;
   for (let index = 0; index < array.length; index++) {
      result += array[index];
   };
   return result
};

console.log(sum([1, 2, 3, 4]));

/*
   Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
   Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
   В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
   console.log(sum(range(1, 10))); // → 55
   console.log(range(5, 2, -1));   // → [5, 4, 3, 2]
*/