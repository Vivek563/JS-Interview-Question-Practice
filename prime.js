// print prime number

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i += 1) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function printPrime(num) {  
    for (let i = 0; i < num; i += 1) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

printPrime(100);