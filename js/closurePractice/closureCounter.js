// How would you use a closure to create a private counter?

const closureCounter = (initial) => {
    let count = initial;
    
    return {
        add: numToAdd => count += numToAdd,
    
        displayCount: () => console.log('Counter: ' + count)
    }
}

const counter = closureCounter(5);
counter.add(10);
counter.add(5);
counter.displayCount();
counter.add(-12);
counter.displayCount();

const counterTwo = closureCounter(100);
counterTwo.add(10);
counterTwo.add(5);
counterTwo.displayCount();
counterTwo.add(-12);
counterTwo.displayCount();

