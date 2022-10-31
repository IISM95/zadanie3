// создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.
// Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов. (accumulator будет массивом, вспомни про .push()).
// Для решения используй любой из циклов на своё усмотрение.
let line = [
	"JavaScript",
	"Python",
	"Java",
	"Scala и Erlang",
	"Lisp и Scheme",
	"Objective C и Swift",
	"R ",
	"C++",
	"Ruby",
	"PHP",
 ];
 let accumulator = [];
 for (let i = 0; i < line.length; i++) {
	if (line[i].length > 3){
		accumulator.push(line[i])} 
 }
 console.log(accumulator);