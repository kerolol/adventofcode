import input from './input';

const fields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
];

const validatePassports = (passports: Array<string>): Array<string> => {
    let validPassports: Array<string> = [];

    passports.forEach((pp: string): void => {
        let ppFields: Array<string> = [];

        fields.forEach((f: string): void => {
            if (pp.indexOf(f) > -1) {
                ppFields.push(f);
            }
        });

        if (fields.every((v: string) => ppFields.indexOf(v) > -1)) {
            validPassports.push(pp);
        }
    });

    return validPassports;
}

console.log(validatePassports(input.split('\n\n')).length);