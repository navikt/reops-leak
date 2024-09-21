const firstNames = ['Kari', 'Ola', 'Per', 'Lise', 'Anne'];
const lastNames = ['Nordmann', 'Hansen', 'Johansen', 'Olsen', 'Larsen'];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomName() {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    return `${firstName} ${lastName}`;
}