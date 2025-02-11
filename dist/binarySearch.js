"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearch = void 0;
const sorted_1 = require("./sorted");
class BinarySearch extends sorted_1.Sorted {
    constructor(data, getValue) {
        super(data, getValue);
    }
    normalizeString(str) {
        return str === null || str === void 0 ? void 0 : str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove diacríticos
    }
    search(value) {
        if (typeof value === "number") {
            return this.binaryNumberSearch(value);
        }
        else {
            return this.binaryPrefixSearch(value);
        }
    }
    binaryNumberSearch(value) {
        let left = 0;
        let right = this.getSortedData().length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midValue = this.getValue(this.getSortedData()[mid]);
            if (midValue === value) {
                return [this.getSortedData()[mid]];
            }
            else if (midValue < value) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return [];
    }
    binaryPrefixSearch(prefix) {
        const sortedData = this.getSortedData();
        let left = 0;
        let right = sortedData.length - 1;
        const results = [];
        // Normaliza o prefixo (minúsculas e sem acentos)
        const normalizedPrefix = this.normalizeString(prefix);
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midValue = this.normalizeString(String(this.getValue(sortedData[mid])));
            // Verifica se a string no meio começa com o prefixo normalizado
            if (midValue.startsWith(normalizedPrefix)) {
                // Encontrou uma string que começa com o prefixo
                results.push(sortedData[mid]);
                // Busca por outras strings que começam com o prefixo à esquerda
                let i = mid - 1;
                while (i >= 0 && this.normalizeString(String(this.getValue(sortedData[i]))).startsWith(normalizedPrefix)) {
                    results.unshift(sortedData[i]);
                    i--;
                }
                // Busca por outras strings que começam com o prefixo à direita
                let j = mid + 1;
                while (j < sortedData.length && this.normalizeString(String(this.getValue(sortedData[j]))).startsWith(normalizedPrefix)) {
                    results.push(sortedData[j]);
                    j++;
                }
                break; // Sai do loop após encontrar todas as strings com o prefixo
            }
            else if (midValue.localeCompare(normalizedPrefix) < 0) {
                // Se a string no meio for "menor" que o prefixo, busca na metade direita
                left = mid + 1;
            }
            else {
                // Se a string no meio for "maior" que o prefixo, busca na metade esquerda
                right = mid - 1;
            }
        }
        return results;
    }
}
exports.BinarySearch = BinarySearch;
