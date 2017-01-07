import Benchmark = require('benchmark');
import { generateArray, runBenchmark, swap } from '../helpers';

let arrays = [
    generateArray(100, false),
    generateArray(200, false),
    generateArray(300, false),
    generateArray(400, false),
    generateArray(500, false),
];

function bubbleSort(arr:Array<number>) {

    let swapped = false;
    do {
        swapped = false;
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < arr[i-1]) {
                swap(arr, i, i-1);
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const suite = new Benchmark.Suite('Bubblesort');
for(let i = 0; i < arrays.length; i++) {
    suite.add(`${arrays[i].length}`, () => bubbleSort(arrays[i]));
}
runBenchmark(suite);