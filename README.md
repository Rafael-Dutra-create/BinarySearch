# Binary Search Library / Biblioteca de Busca Binária

A simple and efficient binary search implementation for JavaScript and TypeScript projects. This library allows you to
perform fast searches in sorted arrays using a customizable comparator function. Ideal for developers looking for a
lightweight and high-performance solution for search operations.

Uma implementação simples e eficiente de busca binária para projetos em JavaScript e TypeScript. Esta biblioteca permite
realizar buscas rápidas em arrays ordenados utilizando uma função de comparação personalizável. Ideal para
desenvolvedores que buscam uma solução leve e de alto desempenho para operações de busca.


## Installation

To install this library, run the following command:

```bash
    npm install binary-search-lib   
```


### Random Data Generation / Geração de Dados Aleatórios

The data used in the tests is randomly generated to ensure the tests do not depend on fixed data and to validate the
code with different inputs every time.

Para testar as classes, geramos dados aleatoriamente. Isso garante que os testes não dependam de dados fixos e permite
que o código seja validado com diferentes entradas a cada execução.

## Sorted Class - Explanation / Classe Sorted - Explicação

The Sorted class allows you to sort a list of objects based on a specific field, whether it’s numeric or alphanumeric,
and provides a flexible way to handle different sorting criteria.

A classe Sorted permite ordenar uma lista de objetos com base em um campo específico, seja numérico ou alfanumérico, e
oferece uma maneira flexível de lidar com diferentes critérios de ordenação.

### Test Cases / Casos de Teste

```
    it('should sort data by id', () => {
        const sortedById = new Sorted(TestSearchMock, (item) => item.id);

        const sortedData = sortedById.getSortedData();
        console.log('Sorted by ID:', sortedData); // Exibe a lista ordenada por ID

        // Verifica se a ordenação pelo id está correta
        expect(sortedData[0].id).toBeLessThanOrEqual(sortedData[1].id); // O primeiro id deve ser menor ou igual ao segundo
    });
    
    Result:
    Sorted by ID: [
          { id: 6, name: 'mango-96', obs: { color: 'blue' } },
          { id: 16, name: 'orange-17', obs: { color: 'purple' } },
          { id: 20, name: 'pear-52', obs: { color: 'yellow' } },
          { id: 31, name: 'apple-88', obs: { color: 'green' } },
          { id: 36, name: 'banana-85', obs: { color: 'yellow' } },
          { id: 44, name: 'peach-74', obs: { color: 'green' } },
          { id: 48, name: 'plum-90', obs: { color: 'purple' } },
          { id: 53, name: 'watermelon-85', obs: { color: 'blue' } },
          { id: 81, name: 'grape-21', obs: { color: 'red' } },
          { id: 94, name: 'cherry-25', obs: { color: 'red' } }
        ]
        
        
    it('should sort data by name', () => {
        const sortedByName = new Sorted(TestSearchMock, (item) => item.name);

        const sortedData = sortedByName.getSortedData();
        console.log('Sorted by Name:', sortedData); // Exibe a lista ordenada por Nome

        expect(sortedData[0].name.localeCompare(sortedData[1].name)).toBeLessThanOrEqual(0); // O primeiro nome deve ser lexicograficamente menor ou igual ao segundo
    });
        
    Result:
    Sorted by Name: [
          { id: 31, name: 'apple-88', obs: { color: 'green' } },
          { id: 36, name: 'banana-85', obs: { color: 'yellow' } },
          { id: 94, name: 'cherry-25', obs: { color: 'red' } },
          { id: 81, name: 'grape-21', obs: { color: 'red' } },
          { id: 6, name: 'mango-96', obs: { color: 'blue' } },
          { id: 16, name: 'orange-17', obs: { color: 'purple' } },
          { id: 44, name: 'peach-74', obs: { color: 'green' } },
          { id: 20, name: 'pear-52', obs: { color: 'yellow' } },
          { id: 48, name: 'plum-90', obs: { color: 'purple' } },
          { id: 53, name: 'watermelon-85', obs: { color: 'blue' } }
        ]
        
    it('should sort data by color', () => {
        const sortedByColor = new Sorted(TestSearchMock, (item) => item.obs.color);

        const sortedData = sortedByColor.getSortedData();
        console.log('Sorted by Color:', sortedData); // Exibe a lista ordenada por Cor

        expect(sortedData[0].obs.color.localeCompare(sortedData[1].obs.color)).toBeLessThanOrEqual(0); // A cor do primeiro item deve ser lexicograficamente menor ou igual à do segundo
    });
    
    Result:
    Sorted by Color: [
      { id: 6, name: 'mango-96', obs: { color: 'blue' } },
      { id: 53, name: 'watermelon-85', obs: { color: 'blue' } },
      { id: 31, name: 'apple-88', obs: { color: 'green' } },
      { id: 44, name: 'peach-74', obs: { color: 'green' } },
      { id: 16, name: 'orange-17', obs: { color: 'purple' } },
      { id: 48, name: 'plum-90', obs: { color: 'purple' } },
      { id: 81, name: 'grape-21', obs: { color: 'red' } },
      { id: 94, name: 'cherry-25', obs: { color: 'red' } },
      { id: 36, name: 'banana-85', obs: { color: 'yellow' } },
      { id: 20, name: 'pear-52', obs: { color: 'yellow' } }
    ]

    it('should handle equal values correctly (sorting by name)', () => {
        const testMockWithSameName = [
            { id: 1, name: 'apple', obs: { color: 'red' } },
            { id: 2, name: 'apple', obs: { color: 'green' } },
            { id: 3, name: 'banana', obs: { color: 'yellow' } },
        ];

        const sortedByName = new Sorted(testMockWithSameName, (item) => item.name);
        const sortedData = sortedByName.getSortedData();

        console.log('Sorted by Name (with equal values):', sortedData); // Exibe a lista ordenada por nome com valores iguais

        // Verifica que a ordenação entre os mesmos nomes acontece por cor (ou outros critérios)
        expect(sortedData[0].name).toBe('apple');
        expect(sortedData[1].name).toBe('apple');
        expect(sortedData[2].name).toBe('banana');
    });
    
    Result:
    Sorted by Name (with equal values): [
      { id: 1, name: 'apple', obs: { color: 'red' } },
      { id: 2, name: 'apple', obs: { color: 'green' } },
      { id: 3, name: 'banana', obs: { color: 'yellow' } }
    ]
        
```


## BinarySearch Class - Explanation / Classe BinarySearch - Explicação

The `BinarySearch` class provides an efficient way to search for items in a sorted list using binary search algorithms. It is a generic class that can be used with any type of data, as long as you provide a method for extracting a value (either numeric or string) from the items. The class includes two main search methods:

1. **binaryNumberSearch**: This method performs a binary search on numeric values, finding an exact match for the specified number.
2. **binaryPrefixSearch**: This method performs a binary search on string values, finding items that start with a specified prefix, ignoring case and accents.

Additionally, the `normalizeString` method is used to standardize string values by converting them to lowercase and removing diacritics (accents), ensuring that the prefix search works consistently regardless of casing or special characters.

A classe `BinarySearch` fornece uma maneira eficiente de buscar itens em uma lista ordenada usando algoritmos de busca binária. É uma classe genérica que pode ser usada com qualquer tipo de dado, desde que você forneça um método para extrair um valor (numérico ou string) dos itens. A classe inclui dois principais métodos de busca:

1. **binaryNumberSearch**: Este método realiza uma busca binária em valores numéricos, encontrando uma correspondência exata para o número especificado.
2. **binaryPrefixSearch**: Este método realiza uma busca binária em valores de string, encontrando itens que começam com um prefixo especificado, ignorando maiúsculas/minúsculas e acentos.

Além disso, o método `normalizeString` é utilizado para padronizar os valores das strings, convertendo-os para minúsculas e removendo diacríticos (acentos), garantindo que a busca por prefixo funcione de maneira consistente, independentemente da capitalização ou caracteres especiais.

#### $ Interface de teste:
```
export interface TestSearchMockItem {
    id: number;
    name: string;
    obs: {
        color: string;
    };
}
```

### Test Cases / Casos de Teste

```

describe('Binary Search for number (id)', () => {
    let binarySearch: BinarySearch<any>;

    // Executado antes de cada teste, inicializando a instância da BinarySearch
    beforeEach(() => {
        binarySearch = new BinarySearch(TestSearchMock, item => item.id); // Atribui corretamente a instância
    });    

    // Teste: Buscar por número exato (id)
    it('should search by exact number (id)', () => {
        const result = binarySearch.search(9);  // Exemplo: Buscando por id 9
        console.log('Result for id 9:', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
Result for id 9: [ { id: 9, name: 'banana-57', obs: { color: 'yellow' } } ]


    // Teste: Buscar por número inexistente
    it('should return empty for non-existing number', () => {
        const result = binarySearch.search(999);  // Exemplo: Número não existente
        console.log('Result for number 999:', result);  // Exibindo no console
        expect(result.length).toBe(0);  // Espera-se que o resultado seja vazio
    });
    
Result for number 999: []
});




describe('Binary Search for string (name)', () => {
    let binarySearch: BinarySearch<any>;

    beforeEach(() => {
        binarySearch = new BinarySearch(TestSearchMock, item => item.name); // Atribui corretamente a instância
    });

    // Teste: Buscar por prefixo de string
    it('should search by prefix (name)', () => {
        const result = binarySearch.search("apple");  // Exemplo: Buscando por prefixo "apple"
        console.log('Result for prefix "apple":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
Result for prefix "apple": [ { id: 19, name: 'apple-88', obs: { color: 'green' } } ]

    // Teste: Prefixo que não existe
    it('should return empty for non-existing prefix', () => {
        const result = binarySearch.search("nonexistent");  // Exemplo: Prefixo não existente
        console.log('Result for prefix "nonexistent":', result);  // Exibindo no console
        expect(result.length).toBe(0);  // Espera-se que o resultado seja vazio
    });
    
Result for prefix "nonexistent": []

    // Teste 6: Buscar por prefixo ignorando acentos
    it('should search by prefix with accent insensitivity', () => {
        const result = binarySearch.search("cherrý");  // Buscando por prefixo "cherrý", que tem acento
        console.log('Result for prefix "cherry":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
    Result for prefix "cherry": [ { id: 61, name: 'cherry-55', obs: { color: 'red' } } ]
})


describe('Binary Search for sub item in array', () => {
    let binarySearch: BinarySearch<any>;

    beforeEach(() => {
        binarySearch = new BinarySearch(TestSearchMock, item => item.obs.color); // Atribui corretamente a instância
    });

// Teste: Buscar por prefixo de string
    it('should search by prefix (color)', () => {
        const result = binarySearch.search("green");  // Exemplo: Buscando por prefixo "green"
        console.log('Result for prefix "green":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
Result for prefix "green": [
  { id: 39, name: 'apple-97', obs: { color: 'green' } },
  { id: 48, name: 'peach-80', obs: { color: 'green' } }
]

    // Teste: Prefixo que não existe
    it('should return empty for non-existing prefix', () => {
        const result = binarySearch.search("black");  // Exemplo: Prefixo não existente
        console.log('Result for prefix "nonexistent":', result);  // Exibindo no console
        expect(result.length).toBe(0);  // Espera-se que o resultado seja vazio
    });
    
Result for prefix "nonexistent": []

    // Teste 6: Buscar por prefixo ignorando acentos
    it('should search by prefix with accent insensitivity', () => {
        const result = binarySearch.search("yellów");  // Buscando por prefixo "yellów", que tem acento
        console.log('Result for prefix "yellow":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
Result for prefix "yellow": [
  { id: 74, name: 'banana-84', obs: { color: 'yellow' } },
  { id: 27, name: 'pear-50', obs: { color: 'yellow' } }
]

})
```


### Test Performance / Teste de Performance

```
describe('Binary Search Performance Test (1 Million Entries)', () => {
    let binarySearch: BinarySearch<any>;
    let TestSearchMock: TestSearchMockItem[];
    const uniqueItem: TestSearchMockItem = {
        id: 9999999, // Um ID único que você conhece
        name: "unique-fruit-123", // Um nome único que você conhece
        obs: { color: "gold" } // Uma cor única que você conhece
    };

    beforeEach(() => {
        TestSearchMock = generateTestSearchMock(1000000);
        TestSearchMock.push(uniqueItem)
    })

    // Teste: Buscar por número exato (id)
    it('should search by exact number (id)', () => {
        binarySearch = new BinarySearch(TestSearchMock, item => item.id);
        const startTime = performance.now();
        const result = binarySearch.search(9999999);  // Exemplo: Buscando por id 9
        const endTime = performance.now();
        console.log(`Search time by id: ${endTime - startTime}ms`);
        console.log('Result for id 9999999:', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
Search time by id: 0.13269999999999982ms
Result for id 9999999: [ { id: 9999999, name: 'unique-fruit-123', obs: { color: 'gold' } } ]
    
    // Teste: Buscar por prefixo de string
    it('should search by prefix (name)', () => {
        binarySearch = new BinarySearch(TestSearchMock, item => item.name);
        const startTime = performance.now();
        const result = binarySearch.search("unique-fruit-123");  // Exemplo: Buscando por prefixo "unique-fruit-123"
        const endTime = performance.now();
        console.log(`Search time by id: ${endTime - startTime}ms`);
        console.log('Result for prefix "unique-fruit-123":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
Search time by id: 0.306999999999789ms
Result for prefix "unique-fruit-123": [ { id: 9999999, name: 'unique-fruit-123', obs: { color: 'gold' } } ]


    // Teste: Buscar por prefixo de string
    it('should search by prefix (color)', () => {
        binarySearch = new BinarySearch(TestSearchMock, item => item.obs.color);
        const startTime = performance.now();
        const result = binarySearch.search("gold");  // Exemplo: Buscando por prefixo "gold"
        const endTime = performance.now();
        console.log(`Search time by id: ${endTime - startTime}ms`);
        console.log('Result for prefix "gold":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
    
Search time by id: 0.06479999999965003ms
Result for prefix "gold": [ { id: 9999999, name: 'unique-fruit-123', obs: { color: 'gold' } } ]
})
```




