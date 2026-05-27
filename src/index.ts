export const thanosSort = (arr: number[]): number[] => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let n = len >> 1;
      while (n > i) {
        n >>= 1;
      }
      return arr.slice(0, n);
    }
  }

  return arr;
};
