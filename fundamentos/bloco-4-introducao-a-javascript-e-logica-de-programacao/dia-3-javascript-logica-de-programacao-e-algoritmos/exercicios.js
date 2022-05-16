//EXERCÍCIOS DIA 3

//EXERCÍCIO 1

const target = 10;

function factorial(n) {

	let result = n;

	for (let i = 1; i < n; i += 1) {
		result = result * i;
	}

	return result;
}

factorial(target);

//EXERCÍCIO 2

let word = 'tryber'; 
let mirroredWord = '';

function letterMirrorer(input) {
	
	for (let i = 0; i < input.length; i += 1){
	
		mirroredWord += input[input.length - 1 - i];
	}
	
	return mirroredWord;
}

console.log(letterMirrorer(word));

//EXERCÍCIO 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

function longestElementGetter(array) {
	
	let biggestLengthIndex = 0;
	
	for (let i = 0; i < array.length; i += 1) {
	
		if (array[i].length > array[biggestLengthIndex].length) {
			biggestLengthIndex = i;
		}
		
	}

	return array[biggestLengthIndex]
}

function shortestElementGetter(array) {
	
	let smallestLengthIndex = 0;
		
	for (let i = 0; i < array.length; i += 1) {
	
		if (array[i].length < array[smallestLengthIndex].length) {
			smallestLengthIndex = i;
		} 
			
	}
	
	return array[smallestLengthIndex]
}

console.log(longestElementGetter(array));
console.log(shortestElementGetter(array));

//EXERCÍCIO 4

function biggestPrimeNumberFinder(n1, n2){
	
	for (let i = n2; i > n1; i -= 1) {
		
		let primeCheck = true;
		
		for (let ind = 2; ind < i; ind += 1 ) {
			
			if (i % ind == 0) {
				primeCheck = false;
			}
		}
	
		if (primeCheck) {
			return i;
			break;
		}
	}
}

console.log(biggestPrimeNumberFinder(0, 50));