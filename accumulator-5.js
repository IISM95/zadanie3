// создай массив с десятью элементами числового типа.
// Создай переменную accumulatorEven и собери в ней четные числа массива.
// Для решения используй любой из циклов на своё усмотрение.
let arr = [1, 2, 6, 5, 14, 32, 35, 74, 83, 96];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) accumulator.push(arr[i]);
}
console.log(accumulator);
