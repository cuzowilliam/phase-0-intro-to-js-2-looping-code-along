// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

const messages = [];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return messages;
}

var number = 10;

function countDown(number) {
    while (number >= 0) {
    console.log(number);
    number--;
    }
}