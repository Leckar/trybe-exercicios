//EXERCÍCIOS DIA 4 PARTE I

//EXERCÍCIO 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

function welcome(object){
	console.log(`Bem-vinda, ${object.personagem}`);
}

welcome(info);


//EXERCÍCIO 2

info.recorrente = 'Sim';

console.log(info);

//EXERCÍCIO 3

function showObjectKeys(object){
	for (let key in object){
		console.log(key);
	}
}

showObjectKeys(info);

//EXERCÍCIO 4

function showObjectValues(object){
	for (let key in object){
		console.log(object[key]);
	}
}

showObjectValues(info);

//EXERCÍCIO 5

let info2 = {};

info2.personagem = `Tio Patinhas`;
info2.origem = `Christmas on Bear Mountain, Dell's Four Color Comics #178`;
info2.nota = 'O último MacPatinhas';
info2.recorrente = 'Sim';

for (let key in info){
	console.log(`${info[key]} e ${info2[key]}`);
}

//EXERCÍCIO 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

function favBook(object) {
	console.log(`O livro favorito de ${object.nome} ${object.sobrenome} se chama ${object.livrosFavoritos[0].titulo}`);
}

favBook(leitor);

//EXERCÍCIO 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

//EXERCÍCIO 8

function favBookAmount(object) {
	console.log(`${object.nome} tem ${object.livrosFavoritos.length} Livros Favoritos`);
}

favBookAmount(leitor);