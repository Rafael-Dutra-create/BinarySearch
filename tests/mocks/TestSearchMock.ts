import { TestSearchMockItem } from "../../interfaces/TestSearchMockInterface";

/**
 * Generates mock data for testing with random fruit names and colors.
 *
 * @param size - The number of mock data items to generate
 * @returns An array of TestSearchMockItem objects with unique IDs and randomized attributes
 */
export function generateTestSearchMock(size: number): TestSearchMockItem[] {
    // List of fruits for random selection
    const fruits = ["banana", "apple", "orange", "grape", "mango", "pear", "peach", "plum", "cherry", "watermelon"];

    // List of colors for random selection
    const colors = ["yellow", "green", "purple", "red", "blue"];

    return Array.from({ length: size }, (_, i) => ({
        id: i,  // Sequential ID starting from 0
        name: `${fruits[i % fruits.length]}-${Math.floor(Math.random() * 100)}`, // Fruit name with a random number for variety
        obs: { color: colors[i % colors.length] } // Nested object containing a color
    }));
}
