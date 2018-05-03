// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { 
  var original;
  var transformedCode;
  var transformedLetter;
  var final = [];

  str = str.toUpperCase();


  for (var i = 0; i < str.length; i++) {
  	original = str.charCodeAt(i); 
  		
		if (original > 77 & original <= 90) { 
	  			transformedCode = (original - 13);
	  		} else if (original >= 65 && original <= 77) {  
	  			transformedCode = (original + 13);
	  		} else if (original <= 64 && original >= 91 ) {
	  			transformedCode = original;
	  		} else {
	  			transformedCode = original;
	  		}

  	transformedLetter = String.fromCharCode(transformedCode);


  	  	if (transformedCode <= 90 && transformedCode >= 65) {
  			final.push(transformedLetter);	
  		} else {
  			final.push(str.charAt(i));
  		}
  }

  return final.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
