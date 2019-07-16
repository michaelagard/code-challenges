let array1A = [1, 2, 3, 4];
let array1B = [3, 4, 5, 6, 3];
let array2A = ['a', 'b', 'c'];
let array2B = ['x', 'y', 'z', 'a'];
let array3A = [1, 2, 3];
let array3B = [4, 5, 6];

// Function that will return the common elements between two arrays
function commonElements(arrayA, arrayB) {
	// Instantiate variable outPut as an empty array
	let outPut = [];
	// For loop to iterate through arrayA
	for (let i = 0; i < arrayA.length; i++) {
		// For loop to iterate through arrayB
	  for (let j = 0; j < arrayB.length; j++) {
			// Conditional to compare if arrayA[i] and arrayB[j] are exact matches and if the outPut array doesn't already contain a duplicate of that match 
	    if (arrayA[i] === arrayB[j] && !outPut.includes(arrayA[i])) {
				// Append arrayA[i] to the outPut array
	      outPut.push(arrayA[i]);
	    }
	  }
  }
return outPut;
}

console.log(commonElements(array1A, array1B));
console.log(commonElements(array2A, array2B));
console.log(commonElements(array3A, array3B));