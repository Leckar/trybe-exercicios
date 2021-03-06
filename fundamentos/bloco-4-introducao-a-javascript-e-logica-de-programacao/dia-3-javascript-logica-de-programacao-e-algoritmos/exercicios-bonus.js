//EXERCÍCIOS BÔNUS DIA 3

//EXERCÍCIO 1

function asteriskBloc(n) {
	for (let index = 1; index <= n; index += 1) {

		let line = '';

		for (let ind = 1; ind <= n; ind += 1) {
			line += '*';
		}
		console.log(line);
	}
}

asteriskBloc(5);

//EXERCÍCIO 2

function asteriskTriang(n) {
	
	let line = '';
	
	for (let index = 1; index <= n; index += 1) {
		
		line += '*';
		console.log(line);
	}
	
}

asteriskTriang(5);

//EXERCÍCIO 3

function asteriskInverseTriang(n) {
	for (let index = 1; index <= n; index += 1) {

		let line = '';

		for (let ind = 1; ind <= n; ind += 1) {
			
			if (ind > (n - index)) {
				line += '*';
			} else {
				line += ' ';
			} 
		}
		console.log(line)
	}
}

asteriskInverseTriang(5);

//EXERCÍCIO 4

function asteriskPyd(n) {
	
	let asteriskCount = 1;
	
	for (let index = 1; index <= (Math.ceil(n/2)); index += 1) {

		let line = '';
				
		for (let ind = 1; ind <= n; ind += 1) {
			
			if (ind <=  Math.ceil((n - asteriskCount)/2)) {
				line += ' ';
			} else if (ind >= Math.ceil((n - asteriskCount)/2) && ind <= n - Math.ceil((n - asteriskCount)/2)) {
				line += '*';
			} else {
				line += ' ';
			}
		}

		asteriskCount += 2;
		
		console.log(line);

	}
}

asteriskPyd(5);

//EXERCÍCIO 5

function asteriskHollowPyd(n) {
	
	if (n % 2 ==0 || n < 3) {
		return console.log("Error, n must be an odd number equal or bigger than 3.");		
	}
	
	let asteriskCount = 0;
	const lines = Math.ceil(n/2);

	for (let index = 1; index <= lines; index += 1) {

		let line = '';
				
		for (let ind = 1; ind <= n; ind += 1) {
			
			if (index == 1 && (ind < lines || ind > lines)) {
				line += ' ';
			} else if (index == 1 && ind == lines) {
				line += '*';
			// } else if (index == 1 && ind > lines) {
			// 	line += ' ';
			 } else if (index == lines) {
				line += '*';
			} else if (ind < lines - asteriskCount || ind > lines + asteriskCount) {
				line += ' ';
			} else if (ind == lines - asteriskCount || ind == lines + asteriskCount) {
				line += '*';
			} else {
				line += ' ';
			}
		}

		asteriskCount += 1;
		
		console.log(line);

	}
}

asteriskHollowPyd(7);

//EXERCÍCIO 6

function primeNumberChecker(n1){
	
	for (let i = 2; i < n1; i += 1) {
		
		if (n1 % i == 0) {
			return console.log(`Not a prime number.`);
			break;
		}
	}

	console.log(`That's a prime number.`);

}
