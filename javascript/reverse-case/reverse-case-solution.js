// Example variables
const string1 = "HELLO world!";
const string2 = "cloudXxXsephiroth";

// Function to reverse the case of a string
function reverseCase(string) {
  // Instantiate stringArray as an array of the string argument
  let stringArray = string.split("");
  
  // For loop to iterate over stringArray
  for (let i = 0; i < stringArray.length; i++)
  {
    // Conditional to check if the current index of the string array is uppercase
    if (stringArray[i] == stringArray[i].toUpperCase()) {
      
      // Reassigns the current index to the lowercase eqivalent
      stringArray[i] = stringArray[i].toLowerCase();
    }

    // Conditional to check if the current index of the string array is lowercase
    else if (stringArray[i] == stringArray[i].toLowerCase()) {

      // Reassigns the current index to the uppercase eqivalent
      stringArray[i] = stringArray[i].toUpperCase();
    }
  }

  // Returns stringArray joined at every character to return a single string
  return stringArray.join("");
}

console.log(reverseCase(string1)); // <--- "hello WORLD!"
console.log(reverseCase(string2)); // <--- "CLOUDxXxSEPHIROTH"