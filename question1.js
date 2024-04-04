// Function that swaps the case of each character in a string
function swapCase(string){
    // Split the string into an array of characters, then map over each character   
       return string.split('').map(newString => {
         // Check if the character is uppercase
           if(newString === newString.toUpperCase()) {
        // If it's uppercase, convert it to lowercase and return
               return newString.toLowerCase();
         } else {
          // If it's lowercase, convert it to uppercase and return 
           return newString.toUpperCase();
         }
       }).join('') // Join the array back into a string
     }
     // Example usage
     console.log(swapCase("Good Morning."))// Output: "gOOD mORNING"