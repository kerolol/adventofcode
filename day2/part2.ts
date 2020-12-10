import input from './input';

const countCorrectPasswords = (passwords: Array<string>): number => {
    let count = 0;
    
    passwords.forEach((pw: string) => {
      const pwConfig = /^(\d+)-(\d+) (\w): (.*)$/.exec(pw);
      
      const pos1 = parseInt(pwConfig[1]);
      const pos2 = parseInt(pwConfig[2]);
      const char = pwConfig[3];
      const string = pwConfig[4];
     
      if ((string[pos1 - 1] === char && string[pos2 - 1] !== char) || (string[pos1 - 1] !== char && string[pos2 - 1] === char)) {
        count++;
      }
    });
    
    return count;
  };
  
  console.log(countCorrectPasswords(input.split('\n')));