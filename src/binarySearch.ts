import { Sorted } from "./sorted";

export class BinarySearch<T> extends Sorted<T> {
    // Constructor that inherits the Sorted class and passes data and the getValue function
    constructor(data: T[], getValue: (item: T) => string | number) {
        super(data, getValue); // Calls the parent class (Sorted) constructor to initialize sorted data
    }

    // Normalizes a string to make the search easier (converts to lowercase and removes accents)
    public normalizeString(str: string): string {
        return str?.toLowerCase() // Converts to lowercase
            .normalize("NFD") // Decomposes accented characters (e.g., "é" => "e" + diacritical mark)
            .replace(/[\u0300-\u036f]/g, ""); // Removes diacritical marks (accents)
    }

    // Main search method, decides which search type to use
    // If the value is a number, it calls binary number search. If it's a string, it calls binary prefix search.
    public search(value: string | number): T[] {
        if (typeof value === "number") {
            return this.binaryNumberSearch(value); // Calls binary search for numbers
        } else {
            return this.binaryPrefixSearch(value); // Calls binary search for prefixes
        }
    }

    // Binary search implementation for numbers
    private binaryNumberSearch(value: number): T[] {
        let left = 0;
        let right = this.getSortedData().length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2); // Finds the middle index
            const midValue = this.getValue(this.getSortedData()[mid]) as number; // Gets the value of the item in the middle

            if (midValue === value) { // If the value in the middle is equal to the searched value
                return [this.getSortedData()[mid]]; // Return the found item
            } else if (midValue < value) { // If the value in the middle is smaller, search to the right
                left = mid + 1;
            } else { // If the value in the middle is larger, search to the left
                right = mid - 1;
            }
        }
        return []; // Returns an empty array if the value is not found
    }

    // Binary search implementation for string prefixes
    private binaryPrefixSearch(prefix: string): T[] {
        const sortedData = this.getSortedData(); // Gets the sorted data
        let left = 0;
        let right = sortedData.length - 1;
        const results: T[] = []; // Array that will store the found results

        // Normalizes the prefix to lowercase and without accents
        const normalizedPrefix = this.normalizeString(prefix);

        while (left <= right) {
            const mid = Math.floor((left + right) / 2); // Finds the middle index
            const midValue = this.normalizeString(String(this.getValue(sortedData[mid]))); // Normalizes the middle value

            // Checks if the middle value starts with the normalized prefix
            if (midValue.startsWith(normalizedPrefix)) {
                // If it starts with the prefix, add it to the results
                results.push(sortedData[mid]);

                // Searches to the left for other items starting with the prefix
                let i = mid - 1;
                while (i >= 0 && this.normalizeString(String(this.getValue(sortedData[i]))).startsWith(normalizedPrefix)) {
                    results.unshift(sortedData[i]); // Adds to the beginning of the results array
                    i--;
                }

                // Searches to the right for other items starting with the prefix
                let j = mid + 1;
                while (j < sortedData.length && this.normalizeString(String(this.getValue(sortedData[j]))).startsWith(normalizedPrefix)) {
                    results.push(sortedData[j]); // Adds to the end of the results array
                    j++;
                }

                break; // Exits the loop after finding all the strings with the prefix
            } else if (midValue.localeCompare(normalizedPrefix) < 0) {
                // If the middle value is "smaller" than the prefix, search in the right half
                left = mid + 1;
            } else {
                // If the middle value is "larger" than the prefix, search in the left half
                right = mid - 1;
            }
        }

        return results; // Returns the found results
    }
}
