// Write a function that accepts a function "costlyOperation" as an argument.
// The function will store the result of the passed in function ("costlyOperation")
// so that the next time it is called it will return the result
// without having to call costlyOperation again.

function costlyOperation() {
  console.log("doing some computationally expensive work");
  return "here is the result...";
}

const memoizer = (costlyOperation) => {
  let memo;
  // closure to hold memo value after costlyOperation runs
  return () => {
    if (!memo) {
      memo = costlyOperation();
    }
    return memo;
  };
};

const memoizedCostlyOperation = memoizer(costlyOperation);

// On the first call, the costly operation must be run

console.log(memoizedCostlyOperation())
// -->
// doing some computationally expensive work
// here is the result...

// On the second call, do not run the operation, only return the result

console.log(memoizedCostlyOperation())
// -->
// here is the result...
