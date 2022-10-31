// создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.
// Ниже напиши цикл while, который выводит в консоль все названия длиннее трёх символов.
const arr = ['JavaScript', 'Python','Jav','Scala и Erlang','Lisp и Scheme','Objective C и Swift','R ','C++','Ruby','PHP'];
let i =0;
while(i<arr.length){ 
if(arr[i].length>3){
	console.log(arr[i])}
	i++
}
