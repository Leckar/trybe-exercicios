// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  const splittedSentence = string.split(' ');
  return splittedSentence;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function numberCount(number, array) {
  let highestNumberCount = 0;
  for (const i in array) {
    if (array[i] === number) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

function highestCount(array) {
  let highestNumber = array[0];
  for (const i in array) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }
  return numberCount(highestNumber, array);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzzer(element) {
  if (element % 3 === 0 && element % 5 === 0) {
    return 'fizzBuzz';
  }
  if (element % 3 === 0) {
    return 'fizz';
  }
  if (element % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(array) {
  const fizzBuzzResult = [];
  for (const i of array) {
    fizzBuzzResult.push(fizzBuzzer(i));
  }
  return fizzBuzzResult;
}

// Desafio 9
const cipher = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};
function encode(string) {
  let translate = string;
  for (const key in cipher) {
    if (key) {
      translate = translate.replaceAll(key, cipher[key]);
    }
  }
  return translate;
}
function decode(string) {
  let translate = string;
  for (const key in cipher) {
    if (key) {
      translate = translate.replaceAll(cipher[key], key);
    }
  }
  return translate;
}

// Desafio 10
function checkValidity(array, string) {
  if (array === undefined || string === undefined || array.length === 0 || string.length === 0) {
    return false;
  }
  return true;
}
function techObject(array, string) {
  const tempObject = [];
  for (const i in array) {
    if (i) {
      tempObject[i] = { tech: array[i], name: string };
    }
  }
  return tempObject;
}
function techList(array, string) {
  if (!checkValidity(array, string)) {
    return 'Vazio!';
  }
  const sortedTechs = array.sort();
  return techObject(sortedTechs, string);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
