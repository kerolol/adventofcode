import input from './input';

const countTrees = (input: string): number => {
    let pos = 0;
    let count = 0;

    input.split('\n').forEach((line: string, idx: number): void => {
        if (idx === 0) {
            return;
        }

        pos += 3;

        if (pos >= line.length) {
            pos -= line.length;
        }

        if (line[pos] === '#') {
            count++;
        }
    });
    return count;
};

console.log(countTrees(input));