
const createBase = base => num => console.log(base + num);

// Write a function that would allow you to do this (^^answer^^):
const addSix = createBase(6);
addSix(10); // prints 16
addSix(21); // prints 27


const addOneThousand = createBase(1000);
addOneThousand(1000); // prints 2000
addOneThousand(-500); // prints 500