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
    let phrase = '';
    for (let i = 0; i < expr.length/10; i++) {
        let str = expr.slice(i * 10, (i * 10) + 10);
        if (str === '**********') {
            phrase += ' '
        } else {
            str = str.slice(str.indexOf('1'));
            let letter = '';
            for (let j = 0; j < str.length / 2; j++) {
                let substr = str.slice(j * 2, (j * 2) + 2);
                if (substr === '11'){
                    letter += '-'
                }
                else {letter += '.'}   
            }
            phrase += MORSE_TABLE[letter];
        }
    }
    return phrase;
}

module.exports = {
    decode
}