const strings1 = ['short', 'really, really long!', 'medium'];

function longestString(strings) {
  return strings.reduce(function(longest, string) {
	  if(longest.length >= string.length) {
		  return longest
	  } else {
		  return string
	  }
  });
}

console.log(longestString(strings1)); // <--- 'really, really long!'