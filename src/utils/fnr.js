function generateRandomDigit() {
    return Math.floor(Math.random() * 10);
}

function calculateControlDigit(digits, weights) {
    const sum = digits.reduce((acc, digit, index) => acc + digit * weights[index], 0);
    const remainder = sum % 11;
    return remainder === 0 ? 0 : 11 - remainder;
}

export function generateFNR(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);

    const individualNumber = `${generateRandomDigit()}${generateRandomDigit()}${generateRandomDigit()}`;
    const digits = `${day}${month}${year}${individualNumber}`.split('').map(Number);

    const controlDigit1 = calculateControlDigit(digits, [3, 7, 6, 1, 8, 9, 4, 5, 2]);
    const controlDigit2 = calculateControlDigit([...digits, controlDigit1], [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]);

    return `${day}${month}${year}${individualNumber}${controlDigit1}${controlDigit2}`;
}