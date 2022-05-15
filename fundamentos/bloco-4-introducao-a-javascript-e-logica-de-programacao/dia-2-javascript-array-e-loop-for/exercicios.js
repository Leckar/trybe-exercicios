//EXERCÍCIOS DIA 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//EXERCÍCIO 1

for (const number of numbers) {
	console.log(number);	
}

//EXERCÍCIO 2

let sum = 0;

for (const number of numbers) {
	sum += number;	
}
console.log(sum);

//EXERCÍCIO 3

console.log(sum/numbers.length);

//EXERCÍCIO 4

if (sum > 20) {
	console.log(`valor maior que 20`)
} else {
	console.log(`valor menor ou igual a 20`)
}

//EXERCÍCIO 5

let biggestValue = 0;
for (let index = 0; index < numbers.length; index += 1){
	if (numbers[index] > biggestValue) {
		biggestValue = numbers[index];
	}

	if (index == (numbers.length - 1)){
		console.log(biggestValue);
	}
}

//EXERCÍCIO 6

let oddNumbers = 0;
for (let index = 0; index < numbers.length; index += 1){
	if (numbers[index] % 2 != 0) {
		oddNumbers += 1;
	}

	if (index == (numbers.length - 1)){
		console.log(oddNumbers);
	}
}

//EXERCÍCIO 7

let lowestValue = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
	if (numbers[index] < lowestValue) {
		lowestValue = numbers[index];
	}

	if (index == (numbers.length - 1)){
		console.log(lowestValue);
	}
}

//EXERCÍCIO 8

let newArray = [];
for (let index = 1; index <=25; index += 1){
	newArray.push(index);
}
console.log(newArray);

//EXERCÍCIO 9

let newDividedArray = [];
for (let index = 0; index < newArray.length; index += 1){
	newDividedArray.push(newArray[index]/2);
}
console.log(newDividedArray);
