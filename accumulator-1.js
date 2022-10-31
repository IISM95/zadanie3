// создай массив с десятью элементами числового типа.
// Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.
let arr = [2, 5, 6, 8, 10, 12, 36, 7, 18, 9];
let accumulator = 0;
for(let i=0; i<arr.length; i++){
	accumulator += arr[i]
}
console.log(accumulator);