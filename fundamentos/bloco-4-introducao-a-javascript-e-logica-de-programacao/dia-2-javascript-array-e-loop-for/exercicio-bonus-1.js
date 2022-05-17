//BÔNUS EXERCÍCIO 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function bubbleSortAscend(array){

	for (let index = 1; index < array.length; index += 1) {
		for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
			if (array[index] < array[secondIndex]) {
				let position = array[index];
				array[index] = array[secondIndex];
				array[secondIndex] = position;
			}
		}
	}
}

console.log(`Exercício 1`);
bubbleSortAscend(numbers);
console.log(numbers);