import { expect, test } from "vitest";
import { thanosSort } from "../src";

test("empty array", () => {
  expect(thanosSort([])).toBe([]);
});

test("array with one element", () => {
  expect(thanosSort([1])).toBe([1]);
});

test("even length array", () => {
  expect(thanosSort([5, 4, 3, 2, 1, 6, 7, 8, 9, 10])).toBe([1, 2, 3, 4, 5]);
});

test("odd length array", () => {
  expect(thanosSort([5, 4, 3, 2, 1, 6, 7, 8, 9])).toBe([1, 2, 3, 4, 5]);
});
