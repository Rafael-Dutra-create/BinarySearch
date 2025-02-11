export class Sorted<T> {
    // Stores the sorted data
    private readonly data: T[];

    // Function to get the value used for sorting the items
    protected readonly getValue: (item: T) => string | number;

    // Constructor that receives the data and the getValue function
    constructor(data: T[], getValue: (item: T) => string | number) {

        // Creates a copy of the data and sorts it based on the getValue function
        this.data = [...data].sort((a, b) => {
            const aValue = getValue(a);  // Gets the value of a using getValue
            const bValue = getValue(b);  // Gets the value of b using getValue

            // If both values are numbers, perform numerical comparison
            // Otherwise, converts the values to strings and uses localeCompare for alphabetical comparison
            return typeof aValue === "number" && typeof bValue === "number"
                ? aValue - bValue
                : String(aValue).localeCompare(String(bValue));
        });

        // Stores the getValue function
        this.getValue = getValue;
    }

    // Method to return the sorted data
    public getSortedData(): T[] {
        return this.data;
    }
}
