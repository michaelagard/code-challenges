let array1A = [1, 2, 3, 4];
let array1B = [3, 4, 5, 6, 3];
let array2A = ['a', 'b', 'c'];
let array2B = ['x', 'y', 'z', 'a'];
let array3A = [1, 2, 3];
let array3B = [4, 5, 6];

function commonElements(arrayA, arrayB) {
  let outPut = [];
	for (let i = 0; i < arrayA.length; i++) {
	  for (let j = 0; j < arrayB.length; j++) {
	    if (arrayA[i] === arrayB[j] && !outPut.includes(arrayA[i])) {
	      outPut.push(arrayA[i]);
	    }
	  }
  }
return outPut;
}

console.log(commonElements(array1A, array1B));
console.log(commonElements(array2A, array2B));
console.log(commonElements(array3A, array3B));