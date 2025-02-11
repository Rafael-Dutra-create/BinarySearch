export declare class Sorted<T> {
    private readonly data;
    protected readonly getValue: (item: T) => string | number;
    constructor(data: T[], getValue: (item: T) => string | number);
    getSortedData(): T[];
}
