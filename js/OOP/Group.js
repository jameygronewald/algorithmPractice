// Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
    constructor(items = []) {
        this.items = items;
    }

    add(value) {
        if (this.items.indexOf(value) === -1) this.items.push(value);
    }

    delete(value) {
        const indexToRemove = this.items.indexOf(value);
        if (indexToRemove !== -1) this.items.splice(indexToRemove, 1);
    }

    has(value) {
        return this.items.includes(value);
    }

    static from(iterable) {
        return new Group([...iterable]);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(40);
group.add(40);
group.delete(10);
console.log(group.has(10));
// → false
console.log(group.has(40));
console.log(group);