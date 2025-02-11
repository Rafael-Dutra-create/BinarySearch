import { describe, it, expect } from 'vitest';
import { Sorted } from '../src/Sorted'; // Ajuste o caminho conforme necessário
import { TestSearchMock } from '../tests/mocks/TestSearchMock'; // Ajuste o caminho conforme necessário

// Teste de ordenação com base no ID
describe('Sorted class', () => {
    it('should sort data by id', () => {
        const sortedById = new Sorted(TestSearchMock, (item) => item.id);

        const sortedData = sortedById.getSortedData();
        console.log('Sorted by ID:', sortedData); // Exibe a lista ordenada por ID

        // Verifica se a ordenação pelo id está correta
        expect(sortedData[0].id).toBeLessThanOrEqual(sortedData[1].id); // O primeiro id deve ser menor ou igual ao segundo
    });

    // Teste de ordenação com base no nome (name)
    it('should sort data by name', () => {
        const sortedByName = new Sorted(TestSearchMock, (item) => item.name);

        const sortedData = sortedByName.getSortedData();
        console.log('Sorted by Name:', sortedData); // Exibe a lista ordenada por Nome

        expect(sortedData[0].name.localeCompare(sortedData[1].name)).toBeLessThanOrEqual(0); // O primeiro nome deve ser lexicograficamente menor ou igual ao segundo
    });

    // Teste de ordenação com base na cor (color)
    it('should sort data by color', () => {
        const sortedByColor = new Sorted(TestSearchMock, (item) => item.obs.color);

        const sortedData = sortedByColor.getSortedData();
        console.log('Sorted by Color:', sortedData); // Exibe a lista ordenada por Cor

        expect(sortedData[0].obs.color.localeCompare(sortedData[1].obs.color)).toBeLessThanOrEqual(0); // A cor do primeiro item deve ser lexicograficamente menor ou igual à do segundo
    });

    // Teste de ordenação quando valores são iguais
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

});
