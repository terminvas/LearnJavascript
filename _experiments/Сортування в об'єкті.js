let maxSpeed = {
   car: 100,
   bike: 60,
   motorbike: 200,
   airplane: 1000,
   helicopter: 400,
   rocket: 8 * 60 * 60
};
// let ob = {
//    name: 'Carolus Haverbeke',
//    sex: 'm',
//    born: 1832,
//    died: 1905,
//    father: 'Carel Haverbeke',
//    mother: 'Maria van Brussel'
// };
console.log("Об'єкт:\n", maxSpeed);
console.log("Перетворення об'єкту в масив масивів\n", Object.entries(maxSpeed));
console.log('Сортування в алфавітному порядку методів:\n', Object.entries(maxSpeed).sort());
console.log('Сортування у зворотному алфавітному порядку методів:\n', Object.entries(maxSpeed).sort().reverse());
console.log('Сортування в порядку зростаня значень:\n', Object.entries(maxSpeed).sort((a, b) => a[1] - b[1])); console.log('Сортування в порядку спаданя значень:\n', Object.entries(maxSpeed).sort((a, b) => b[1] - a[1]));