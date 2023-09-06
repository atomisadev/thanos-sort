"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thanosSort = void 0;
const thanosSort = (arr) => {
    let n = arr.length;
    while (true) {
        let i = 0;
        while (i < n - 1 && arr[i] <= arr[i + 1]) {
            i++;
        }
        if (i === n - 1)
            return arr.slice(0, n);
        n = Math.floor(n / 2);
        arr = arr.slice(0, n);
    }
};
exports.thanosSort = thanosSort;
console.log((0, exports.thanosSort)([1, 2, 3, 4, 9, 6]));
