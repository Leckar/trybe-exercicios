//EXERCÍCIOS DIA 4 PARTE II

//EXERCÍCIO 1

// Função que recebe uma string, seja ela a própria string, uma variável a qual foi atribuída uma string, elemento de array ou valor de objeto e analisa se é um palíndromo ou não.

function palindromeChecker(string) {
		
	for (let index = 0; index < Math.ceil(string.length / 2); index += 1) {
		const opposite = (string.length - 1) - index;
		if (string[index] !== string[opposite]) {
			return false;
			break
		}
	}
	
	return true;
}

//EXERCÍCIO 2

//Função que encontra o maior valor dentro de um array e retorna seu índice.

function highestValueFinder(array) {
	let index = 0;
	for (let i = 1; i < array.length; i += 1) {
		if (array[i] > array[i - 1]) {
			index =  i;
		}
	}

	return index;
}

//EXERCÍCIO 3

//Função que encontra o menor valor dentro de um array e retorna seu índice.

function lowestValueFinder(array) {
	let index = 0;
	for (let i = 1; i < array.length; i += 1) {
		if (array[i] < array[i - 1]) {
			index =  i;
		}
	}

	return index;
}

//EXERCÍCIO 4

//Função que recebe um array e retorna o do elemento com a maior quantidade de caracteres.

function longestStringFinder(array) {
	
	let index = 0;
	
	for (let i = 1; i < array.length; i += 1) {
		if (array[i].length > array[i - 1].length) {
			index =  i;
		}
	}

	return array[index];
}

//EXERCÍCIO 5

//Função que checa o valor mais repetido em um array e o retorna.

function mostRepeatedValue(array) {
	
	let numberCount = 0;
	let mostRepeatedCount = 0;
	let mostRepeatedIndex;

	for (const index in array) {
		
		let currentNumber	= array[index];
			
		for (const i in array){
			if (currentNumber == array[i]) {
				numberCount += 1;				
			}
		}
			
		if (numberCount > mostRepeatedCount) {
			mostRepeatedCount = numberCount;
			mostRepeatedIndex = index;
		}

		numberCount = 0;
	}

	return array[mostRepeatedIndex];	
}

//EXERCÍCIO 6

//Função que faz a somatória de todos os números de 1 a n.

function sumTotal(n) {
	
	let sum = 0;
	
	for (let i = 1; i <= n; i += 1){
		sum += i;
	}

	return sum;
}

//EXERCÍCIO 7

function finaleChecker(original, finale) {
	let originalIndex = 1;
	for (let i = (finale.length - 1); i >= 0; i -= 1){
		if (finale[i] != original[original.length - originalIndex]) {
			return false
		}
		originalIndex += 1;
	}

	return true;
}
