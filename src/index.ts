export const thanosSort = (arr: number[]): number[] => {
  let n = arr.length;

  while (n > 1) {
    let sorted = true;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        break;
      }
    }

    if (sorted) break;
    n >>= 1;
  }

  return arr.slice(0, n);
};