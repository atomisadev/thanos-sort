# thanos-sort
The most efficient sorting algorithm to ever exist

## How does it work?
Well, the inner workings of the ingenious Thanos Sort algorithm is quite straightforward. Half of the elements inside your array are removed until the remaining list is sorted.

### For Example
```
Input: [1, 2, 3, 4, 9, 6]
Output: [1, 2, 3]
```
It's a little lossy, but who really cares?

Another test case:
```
Input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Output: [10]
```
Just a little lossy, but again, who gives a damn?

## Installation
```
npm install @atomdevelops/thanos-sort
```
And you can import the `thanosSort` function right away to start implementing the most efficient algorithm in the world.

## Usage
```typescript
import { thanosSort } from "@atomisadev/thanos-sort";

const arr: number[] = [10, 9, 8, 7, 6];

console.log(thanosSort(arr)); // [10]
```

As easy as that!

## Contributions
If you want to contribute here, you may want to also rethink your life choices.
