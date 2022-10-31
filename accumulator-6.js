// создай массив с десятью элементами числового типа.
// Создай переменную accumulatorOdd и собери в ней нечетные числа массива.
// Для решения используй любой из циклов на своё усмотрение.
let arr = [1, 2, 6, 5, 14, 32, 35, 74, 83, 96];
let accumulatorOdd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) accumulatorOdd.push(arr[i]);
}
console.log(accumulatorOdd);