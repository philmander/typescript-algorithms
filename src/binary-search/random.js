export function withinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export function generateArray(len, randomLo, randomHi) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(withinRange(randomLo, randomHi));
    }
    arr.sort();
    return arr;
}
