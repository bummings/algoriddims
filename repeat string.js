// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  var final = "";  	
      for (i = 0; i < num; i++) {
        if (num >= 0) {
          final+=str;
        } else {
          return('');
        }
      }
      return(final);
    
  }
  
repeatStringNumTimes("bruh", 9);