export class Sorted<T> {
    private readonly data: T[];
    protected readonly getValue: (item: T) => string | number;

    constructor(data: T[], getValue: (item: T) => string | number) {

        this.data = [...data].sort((a, b) => {
            const aValue = getValue(a);
            const bValue = getValue(b);
            return typeof aValue === "number" && typeof bValue === "number"
                ? aValue - bValue
                : String(aValue).localeCompare(String(bValue));
        });

        this.getValue = getValue;
    }

    public getSortedData(): T[] {
        return this.data;
    }
}
