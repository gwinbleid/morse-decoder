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
    let str = '';

    str = expr.toString()
        .split('**********')
        .map(item => {
            return item.split('').reverse().join('')
                            .match(/.{1,10}/g)
                            .map(chunk => {
                                let letter = chunk.split('').reverse().join('')
                                            .replace(/11/g, '-')
                                            .replace(/10/g, '.')
                                            .replace(/0/g, '');


                                return MORSE_TABLE[letter];
                            })
                            .reverse().join('');
        }).join(' ');

    return str;
}

module.exports = {
    decode
}
