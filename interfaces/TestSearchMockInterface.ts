// src/interfaces/TestSearchMockInterface.ts

// Defining the structure of each item in the mock data
// Definindo a estrutura de cada item nos dados fictícios
export interface TestSearchMockItem {
    id: number;
    name: string;
    obs: {
        color: string; // Color of the fruit in the mock / Cor da fruta nos dados fictícios
    };
}
