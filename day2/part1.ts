import input from './input';

const countCorrectPasswords = (passwords: Array<string>): number => {
    let count = 0;
    
    passwords.forEach((pw: string) => {
      const pwConfig = /^(\d+)-(\d+) (\w): (.*)$/.exec(pw);
      
      const min = pwConfig[1];
      const max = pwConfig[2];
      const char = pwConfig[3];
      const string = pwConfig[4];
      
      const rgxPwCheck = new RegExp("^[^" + char + "]*(" + char + "[^" + char + "]*){" + min + "," + max + "}[^" + char + "]*$");
      
      if (rgxPwCheck.test(string)) {
        count++;
      }
    });
    
    return count;
  };
  
  console.log(countCorrectPasswords(input.split('\n')));