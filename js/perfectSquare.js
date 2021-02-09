const perfectSquare = num => {
    let i = 0;
    do {
        if (i * i === num) {
            return true;
         }
         i += 1;
    } while (i * i <= num);
    return false;
}

console.log(perfectSquare(99))