const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(true).toBe(typeof productDetails === 'function');
    // Teste se o retorno da função é um array.
    expect(true).toEqual(Array.isArray(productDetails()));
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(2).toBe(productDetails().length);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // function arrObj() {
    //   for (const e of ) {
    //     if (typeof e !== 'object') {
    //       return false
    //     }
    //   }
    //   return true;
    // }
    expect(productDetails().map((e) => typeof e === 'object')).toEqual([true, true]);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails(1, 2)[0]).not.toMatchObject(productDetails(1, 2)[1])
    // Teste se os dois productIds terminam com 123.
    expect(productDetails().map((e) => e.details.productId.endsWith('123'))).toEqual([true, true]);
  });
});
