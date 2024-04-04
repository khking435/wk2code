// Function to get prime numbers from an array of numbers
function getPrimeNumbers(numbers) {
    // Initialize an empty array to store prime numbers
     const primes = [];
    // Loop through each number in the input array
     for (let i = 0; i < numbers.length; i++) {
       const num = numbers[i];
      // Assume the current number is prime until proven otherwise
       let isPrime = true;
   // Check if the number is less than 2 (not prime)
       if (num < 2) {
         isPrime = false;
       } else {
         // Check for prime numbers using trial division method
         // Loop from 2 to the square root of the number
         for (let j = 2; j <= Math.sqrt(num); j++) {
            // If the number is divisible by any other number, it's not prime
             if (num % j === 0) {
             isPrime = false;
             break;// Exit the loop if not prime
           }
         }
       }
       if (isPrime) {
         primes.push(num);
       }
     }
   // Return the array of prime numbers
     return primes;
   }
   // Example usage:
   console.log(getPrimeNumbers([5,3,78,97,67]))// Output: [5, 3, 97, 67]