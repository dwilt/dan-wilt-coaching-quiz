export function createIndexArray(numberOfIndexes = 1) {
    const arr = [];

    for (let i = 0; i < numberOfIndexes; i++) {
        arr.push(i);
    }

    return arr;
}
