// returns index of 4 with undefined value because it is executing and i is 4 at time of execution since for loop has already run
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}

// the factory method returns another function that receives the `currentIndex` from the factory method's argument when it is immediately invoked with i being passed in; the closure preserves the value of i for the inner function to print to the console
const arrTwo = [2, 4, 6, 8];
for(var i = 0; i < arrTwo.length; i++) {
  setTimeout(function(currentIndex) {
    return function() {
      console.log('Index: ' + currentIndex + ', value: ' + arrTwo[currentIndex])
    }
  }(i), 3000)
}

// Solution w/ ES6 arrows
const arrThree = [10, 12, 15, 21];
for (var i = 0; i < arrThree.length; i++) {
  setTimeout((currentIndex => () => console.log(`Index: ${currentIndex}, value: ${arrThree[currentIndex]}`))(i), 3000);
}

/* for (var i = 0; i < 3; i++) {

    (index => {

        console.log('iterator: ' + index);
        //now you can also loop an ajax call here 
        //without losing track of the iterator value:   $.ajax({});
    
    })(i);

} */

