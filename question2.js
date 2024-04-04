// Function to generate an array of numbers between two given numbers
function generateArray(num1, num2) {
    // Initialize an empty array to store the generated numbers 
     let newArr = []
      // Swap num1 and num2 if num1 is greater than num2
     if(num1 > num2) {
      let [num1, num2] = [num2, num1] // Swap values using array destructuring assignment
     }
     // Loop through the range of numbers from num1 to num2
     for(let i = num1; i <= num2; i++) {
       // Add each number to the newArr arra
         newArr.push(i)
     }
     // Return the generated array
     return newArr
   }
   // Testing the function with different inputs
 console.log(generateArray(-5, 1)) // [-5, -4, -3, -2, -1,0]
 console.log(generateArray(0, 5))  // [0, 1, 2, 3, 4, 5]
   