import { Sorted } from "./sorted";
export declare class BinarySearch<T> extends Sorted<T> {
    constructor(data: T[], getValue: (item: T) => string | number);
    normalizeString(str: string): string;
    search(value: string | number): T[];
    private binaryNumberSearch;
    private binaryPrefixSearch;
}
