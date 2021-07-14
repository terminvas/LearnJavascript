function arrayToList(array) {
   let len = array.length;
   let list = null;
   for (let i = len - 1; i >= 0; i--) {
      list = {
         value: array[i],
         rest: list
      }
   }
   return list
};

//console.log(arrayToList([1, 2, 4]));

function listToArray(list) {
   let array = [];
   while (list !== null) {
      array.push(list.value);
      list = list.rest;
   }
   return array
}
//console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
//console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30];

function prepend(val, res) {
   let list = { value: val, rest: res };
   return list
}
//console.log(prepend(10, prepend(20, null)));    // → {value: 10, rest: {value: 20, rest: null}}

/* function nth(list, index) {
   if (index < 0) return undefined;
   let i = 0;
   while (i < index && list !== null) {
      //console.log(list.value, list.rest, ' i = ', i);
      list = list.rest;
      i++;
   }
   if (list !== null) { return list.value } else return undefined
} */

// Рекурсія
function nth(list, index) {
   if (index < 0 || list == null) { return undefined }
   else
      if (index == 0) {
         return list.value;
      }
      else {
         return nth(list.rest, index - 1);
      }
}

/* // Ще один варіант рекурсії
function nth(list, n) {
   if (!list) return undefined;
   else if (n == 0) return list.value;
   else {
      console.log(list);
      return nth(list.rest, n - 1);
   }
} */

console.log(nth({ value: 11, rest: { value: 12, rest: { value: 13, rest: { value: 17, rest: null } } } }, -2));
console.log(nth(arrayToList([10, 20, 30, 40, 50, 60]), 3)); // → 50
/*
   Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура – список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
         var list = {
         value: 1,
         rest: {
            value: 2,
            rest: {
               value: 3,
               rest: null
            }
         }
         };
   Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.
   Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента.
   Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.

         console.log(arrayToList([10, 20]));   // → {value: 10, rest: {value: 20, rest: null}}
         console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
         console.log(prepend(10, prepend(20, null)));    // → {value: 10, rest: {value: 20, rest: null}}
         console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20
*/