function fibonacciSequence(numTer) {
    let sequence = [];

    if (numTer >= 1) {
        sequence[0] = 0;
    }
    if (numTer >= 2) {
        sequence[1] = 1;
    }
    for (let i = 2; i < numTer; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}
