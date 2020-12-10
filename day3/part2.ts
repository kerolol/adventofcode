import input from './input';

const countTrees = (input: string, steps: number, lineSteps: number): number => {
    let pos = 0;
    let count = 0;

    input.split('\n').forEach((line: string, idx: number): void => {
        if (idx === 0 || idx % lineSteps !== 0) {
            return;
        }

        pos += steps;

        if (pos >= line.length) {
            pos -= line.length;
        }

        if (line[pos] === '#') {
            count++;
        }
    });
    return count;
}

const slope1 = countTrees(input, 1, 1);
const slope2 = countTrees(input, 3, 1);
const slope3 = countTrees(input, 5, 1);
const slope4 = countTrees(input, 7, 1);
const slope5 = countTrees(input, 1, 2);

console.log(slope1 * slope2 * slope3 * slope4 * slope5);