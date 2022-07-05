// Desafio 11
function elementSizeCheck(element) {
  if (element < 0 || element > 9) {
    return false;
  }
  return true;
}
function repeatCounter(element, array) {
  let repeatCount = 0;
  for (const i in array) {
    if (element === array[i]) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}
function repeatCheck(array) {
  for (const item of array) {
    if (!elementSizeCheck(item)) {
      return false;
    }
    if (repeatCounter(item, array) >= 3) {
      return false;
    }
  }
  return true;
}
function numberFormatting(array) {
  array.splice(0, 0, '(');
  array.splice(3, 0, ')');
  array.splice(4, 0, ' ');
  array.splice(10, 0, '-');
  return array;
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!repeatCheck(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return numberFormatting(array).join('');
}

// Desafio 12
function sumCheck(lineA, lineB, lineC) {
  const sumAB = lineA + lineB;
  const sumAC = lineA + lineC;
  const sumBC = lineB + lineC;
  if (sumAB <= lineC || sumBC <= lineA || sumAC <= lineB) {
    return false;
  }
  return true;
}
function moduleCheck(lineA, lineB, lineC) {
  const moduleAB = Math.abs(lineA - lineB);
  const moduleAC = Math.abs(lineA - lineC);
  const moduleBC = Math.abs(lineB - lineC);
  if (moduleAB >= lineC || moduleBC >= lineA || moduleAC >= lineB) {
    return false;
  }
  return sumCheck(lineA, lineB, lineC);
}
function triangleCheck(lineA, lineB, lineC) {
  if (!moduleCheck(lineA, lineB, lineC)) {
    return false;
  }
  return true;
}

// Desafio 13
function numberSum(array) {
  let sum = 0;
  for (const i of array) {
    sum += parseInt(i, 10);
  }
  return sum;
}
function hydrate(string) {
  const integerGet = string.match(/\d+/g);
  const integerSum = numberSum(integerGet);
  if (integerSum === 1) {
    return `${integerSum} copo de água`;
  }
  return `${integerSum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
