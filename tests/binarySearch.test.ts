import {describe, it, expect, beforeEach} from 'vitest';
import {BinarySearch} from "../src/binarySearch";
import {TestSearchMockItem} from "../interfaces/TestSearchMockInterface";
import {generateTestSearchMock} from "./mocks/TestSearchMock";

describe('Binary Search for number (id)', () => {
    let binarySearch: BinarySearch<any>;
    let TestSearchMock: TestSearchMockItem[];

    beforeEach(() => {
        TestSearchMock = generateTestSearchMock(10);
        binarySearch = new BinarySearch(TestSearchMock, item => item.id); // Atribui corretamente a instância
    });

    // Teste: Buscar por número exato (id)
    it('should search by exact number (id)', () => {
        const result = binarySearch.search(9);  // Exemplo: Buscando por id 9
        console.log('Result for id 9:', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });

    // Teste: Buscar por número inexistente
    it('should return empty for non-existing number', () => {
        const result = binarySearch.search(999);  // Exemplo: Número não existente
        console.log('Result for number 999:', result);  // Exibindo no console
        expect(result.length).toBe(0);  // Espera-se que o resultado seja vazio
    });

});

describe('Binary Search for string (name)', () => {
    let binarySearch: BinarySearch<any>;
    let TestSearchMock: TestSearchMockItem[];

    beforeEach(() => {
        TestSearchMock = generateTestSearchMock(10);
        binarySearch = new BinarySearch(TestSearchMock, item => item.name); // Atribui corretamente a instância
    });

    // Teste: Buscar por prefixo de string
    it('should search by prefix (name)', () => {
        const result = binarySearch.search("apple");  // Exemplo: Buscando por prefixo "apple"
        console.log('Result for prefix "apple":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });

    // Teste: Prefixo que não existe
    it('should return empty for non-existing prefix', () => {
        const result = binarySearch.search("nonexistent");  // Exemplo: Prefixo não existente
        console.log('Result for prefix "nonexistent":', result);  // Exibindo no console
        expect(result.length).toBe(0);  // Espera-se que o resultado seja vazio
    });

    // Teste 6: Buscar por prefixo ignorando acentos
    it('should search by prefix with accent insensitivity', () => {
        const result = binarySearch.search("cherrý");  // Buscando por prefixo "cherrý", que tem acento
        console.log('Result for prefix "cherry":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
})

describe('Binary Search for sub item in array', () => {
    let binarySearch: BinarySearch<any>;
    let TestSearchMock: TestSearchMockItem[];

    beforeEach(() => {
        TestSearchMock = generateTestSearchMock(10);
        binarySearch = new BinarySearch(TestSearchMock, item => item.obs.color); // Atribui corretamente a instância
    });

// Teste: Buscar por prefixo de string
    it('should search by prefix (color)', () => {
        const result = binarySearch.search("green");  // Exemplo: Buscando por prefixo "green"
        console.log('Result for prefix "green":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });

    // Teste: Prefixo que não existe
    it('should return empty for non-existing prefix', () => {
        const result = binarySearch.search("black");  // Exemplo: Prefixo não existente
        console.log('Result for prefix "nonexistent":', result);  // Exibindo no console
        expect(result.length).toBe(0);  // Espera-se que o resultado seja vazio
    });

    // Teste 6: Buscar por prefixo ignorando acentos
    it('should search by prefix with accent insensitivity', () => {
        const result = binarySearch.search("yellów");  // Buscando por prefixo "yellów", que tem acento
        console.log('Result for prefix "yellow":', result);  // Exibindo no console
        expect(result.length).toBeGreaterThan(0);  // Espera-se que o resultado tenha pelo menos um item
    });
})


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
})