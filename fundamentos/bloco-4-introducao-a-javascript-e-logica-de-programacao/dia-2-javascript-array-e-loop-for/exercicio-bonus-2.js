//BÔNUS EXERCÍCIO 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Eu fiz assim:
// function bubbleSortDescend(array){

// 	for (let index = (array.length -1); index >= 0; index -= 1) {
// 		for (let secondIndex = array.length; secondIndex > index; secondIndex -= 1) {
// 			if (array[index] < array[secondIndex]) {
// 				let position = array[index];
// 				array[index] = array[secondIndex];
// 				array[secondIndex] = position;
// 			}
// 		}
// 	}
// }


//E depois vi que podia simplesmente ser assim:
function bubbleSortDescend(array){

	for (let index = 1; index < array.length; index += 1) {
		for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
			if (array[index] > array[secondIndex]) {
				let position = array[index];
				array[index] = array[secondIndex];
				array[secondIndex] = position;
			}
		}
	}
}

console.log(`Exercício 2`);
bubbleSortDescend(numbers);
console.log(numbers);
