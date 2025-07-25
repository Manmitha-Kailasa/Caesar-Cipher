// Caesar Cipher Implementation in Node.js
function encode(message, shift) {
    return message.split('').map(char => shiftChar(char, shift)).join('');
}

function decode(message, shift) {
    return message.split('').map(char => shiftChar(char, -shift)).join('');
}

function shiftChar(char, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (alphabet.includes(char)) {
        let index = (alphabet.indexOf(char) + shift + 26) % 26;
        return alphabet[index];
    } else if (lowerAlphabet.includes(char)) {
        let index = (lowerAlphabet.indexOf(char) + shift + 26) % 26;
        return lowerAlphabet[index];
    }
    return char;
}

// Test Cases
console.log("Encode:", encode("Hello World", 3));
console.log("Decode:", decode("Khoor Zruog", 3));
