console.log('connected');
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }


console.log('17',isPrime(17));
console.log('26',isPrime(26));
console.log('89',isPrime(89));
console.log('163',isPrime(163));
console.log('9',isPrime(9));
console.log('89',isPrime(89));

var x = 10;
    function test()
    {
        var x = 20;
    }
     
    test();
    console.log(x);