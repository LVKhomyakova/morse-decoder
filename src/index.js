const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var startSpan = 0;
    var substr = expr.substr(startSpan, 10);
    var letter = "";
    var result = "";
    while (substr) {
      let number = +substr;
  
      if (isNaN(number))
        result += " ";
      else {
        while (number) {
          if (number % 100 === 10) letter += ".";
          if (number % 100 === 11) letter += "-";
          number = Math.trunc(number / 100);
        }
        result += MORSE_TABLE[letter.split('').reverse().join('')];
      }
      letter = "";
      startSpan += 10;
      substr = expr.substr(startSpan, 10);
    }
    return result;
  }

module.exports = {
    decode
}