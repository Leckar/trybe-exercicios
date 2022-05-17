//BÔNUS EXERCÍCIO 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

function newNumbersMultiplied(array){
for (let index = 0; index < array.length; index += 1){
	if (index < array.length-1){
		newNumbers.push((array[index]*array[index+1]));
	} else {
		newNumbers.push((array[index]*2));
	}
}
}

console.log(`Exercício 3`);
newNumbersMultiplied(numbers);
console.log(newNumbers);

