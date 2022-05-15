//Exercício 1

const a = 7;
console.log(`A constante a é ${a}`);
const b = 4;
console.log(`A constante b é ${b}`);
const c = 11;
console.log(`A constante c é ${c}`);
const aBCheck = a>b;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Exercício 2

switch (aBCheck) {
case true:
	console.log(`A constante a é maior que a constante b.`);
	break;
case false:
	console.log(`A constante b é maior que a constante a.`);
	break;
}

//Exercício 3

if (a>b && a>c) {
	console.log(`A constante a é o maior dos números.`);
} else if (b>a && b>c) {
	console.log(`A constante b é o maior dos números.`);
} else {
	console.log(`A constante c é o maior dos números.`);
}

//Exercício 4

if (a > 0) {
	console.log(`positive`);
} else if (a < 0) {
	console.log(`negative`);
} else {
	console.log(`zero`);
}

//Exercício 5

const anguloA = Math.round(Math.random()*180);
console.log(`O ângulo A é de ${anguloA}°.`);
const anguloB = Math.round(Math.random()*(179-anguloA));
console.log(`O ângulo B é de ${anguloB}°.`);
const anguloC = 180-anguloA-anguloB;
console.log(`O ângulo C é de ${anguloC}°.`);
let somaAngulo = anguloA+anguloB+anguloC;

if (somaAngulo == 180) {
	console.log(`true`);
} else if (somaAngulo > 180 || somaAngulo < 180 && anguloA >= 0 && anguloB >= 0 && anguloC >= 0) {
	console.log(`false`);
} else {
	console.log(`Erro, algum valor é menor a zero.`);
}

//Exercício 6

let chessPiece = 'peão';
let chosenChessPiece = chessPiece.toLowerCase();

if (chosenChessPiece === 'peão' || chosenChessPiece === 'pawn') {
	console.log(` 1 square forward`);
} else if (chosenChessPiece === 'bishop' || chosenChessPiece === 'bispo') {
	console.log(`Diagonals`);
} else if (chosenChessPiece === 'rook' || chosenChessPiece === 'torre') {
	console.log(`Forward`);
} else if (chosenChessPiece === 'queen' || chosenChessPiece === 'rainha') {
	console.log(`Any direction`);
} else if (chosenChessPiece === 'king' || chosenChessPiece === 'rei') {
	console.log(`1 square in any direction`);
} else if (chosenChessPiece === 'knight' || chosenChessPiece === 'cavalo') {
	console.log(`Moves in a 4 square L in any direction`);
} else {
	console.log(`Not a chess piece!`);
}

//Exercício 7

const nota = Math.round(Math.random()*100);
console.log(`O valor da nota é ${nota}.`);

if (nota>=90) {
	console.log(`A nota é A.`);
} else if (nota>=80) {
	console.log(`A nota é B.`);
} else if (nota>=70) {
	console.log(`A nota é c.`);
} else if (nota>=60) {
	console.log(`A nota é DB.`);
} else if (nota>=50) {
	console.log(`A nota é E.`);
} else if (nota<50) {
	console.log(`A nota é F.`);
}

//Exercício 8

const numero1 = Math.round(Math.random()*10);
console.log(numero1);
const numero2 = Math.round(Math.random()*10);
console.log(numero2);
const numero3 = Math.round(Math.random()*10);
console.log(numero3);

if (numero1%2==0 || numero2%2==0 || numero3%2==0) {
	console.log(true);
} else {
	console.log(false); 
}

//Exercício 9

if (numero1%2!=0 || numero2%2!=0 || numero3%2!=0) {
	console.log(true);
} else {
	console.log(false); 
}

//Exercício 10

const custo = Math.round(Math.random()*100);
console.log(custo);
const precoVenda = Math.round((Math.random()*100)+custo);
console.log(precoVenda);

console.log((precoVenda-custo)*100 + 'K');

//Exercício 11

const salario = Math.round(Math.random()*10000);
console.log(`O salário bruto é de ${salario} reais.`);

function calculoSalarioLiquido(salario){
  
	let salarioParcial;
	let salarioFinal;

	if (salario<=1556.94) {
		salarioParcial = salario*0.92;
	} else if (salario<=2594.92) {
		salarioParcial = salario*0.91;
	} else if (salario<=5189.92) {
		salarioParcial = salario*0.89;
	} else {
		salarioParcial = salario-570.88;
	}
	
	console.log(`O salário parcial após abatimento do INSS é de ${salarioParcial} reais`);
  	
	if (salarioParcial<=1903.98) {
		salarioFinal = salarioParcial
	} else if (salarioParcial<=2826.65) {
		salarioFinal = salarioParcial*0.925+142.80;
	} else if (salarioParcial<=3751.05) {
		salarioFinal = salarioParcial*0.85+354.80;
	} else if (salarioParcial<=4664.68) {
		salarioFinal = salarioParcial*0.775+636.13;
	} else {
		salarioFinal = salarioParcial*0.725+869.36;
	}

	console.log(`O salário líquido é de ${Math.round(salarioFinal)} reais.`);

}

calculoSalarioLiquido(salario);