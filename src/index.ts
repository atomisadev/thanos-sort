export const thanosSort = (arr: number[]): number[] => {
  let n = arr.length;

  while (true) {
    let i: number = 0;

    while (i < n - 1 && arr[i] <= arr[i + 1]) {
      i++;
    }

    if (i === n - 1) return arr.slice(0, n);

    n = Math.floor(n / 2);
    arr = arr.slice(0, n);
  }
};
