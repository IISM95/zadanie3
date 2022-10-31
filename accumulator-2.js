// создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.
// Создай переменную accumulator и собери в ней сумму всех положительных элементов массива. Для решения используй цикл while.
let arr = [2, -5, 6, 8, -10, 12, -36, 7, 18, 9];
let accumulator = 0;
let i =0;
while(i < arr.length){
	if(arr[i]>0){
	accumulator += arr[i]
	}
	i++
}
console.log(accumulator);