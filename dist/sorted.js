"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorted = void 0;
class Sorted {
    constructor(data, getValue) {
        this.data = [...data].sort((a, b) => {
            const aValue = getValue(a);
            const bValue = getValue(b);
            return typeof aValue === "number" && typeof bValue === "number"
                ? aValue - bValue
                : String(aValue).localeCompare(String(bValue));
        });
        this.getValue = getValue;
    }
    getSortedData() {
        return this.data;
    }
}
exports.Sorted = Sorted;
