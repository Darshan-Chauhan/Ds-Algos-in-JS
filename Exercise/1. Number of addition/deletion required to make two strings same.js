// Question: given two SORTED strings, make both strings identical by adding/removing a char. 
// Return number of counts required to make string identical.

// You can't add/remove a character which doesn't exist in second string.
// If one string is 'abc' and another is 'abcd' then you return -1 as 
// you can't add 'd' to 'abc'
// If you can't make string identical then return -1

/*
Test cases:
'abc', 'abbc' => 1
'xyz', 'xyyzzzz' => 4
'ccd', 'cce' => -1
*/

const count = (stringA, stringB) => {
  let count = 0;
  const uniqA = [...new Set([...stringA])].join('');
  const uniqB = [...new Set([...stringB])].join('');

  // Return -1 if both string doesn't have same char
  // and if both strings are same(no add/remove is required)
  if(uniqA !== uniqB || stringA === stringB) {
    return -1;
  }
  
  const copyA = [...uniqA];

  // You can iterate over either uniqA or uniqB
  // as both are of same length because of 'new Set'
  copyA.map(char => {
    const regEx = new RegExp(char, 'g');

    // Get char repeatation count in both strings
    const charsInStringA = stringA.match(regEx).length;
    const charsInStringB = stringB.match(regEx).length;

    // If chars in stirngB is more
    if(charsInStringB > charsInStringA) {
      count += charsInStringB - charsInStringA;
   // If chars in stringA is more
    } else if(charsInStringA > charsInStringB) {
      count += charsInStringA - charsInStringB;
    }

  })
  return count;
}


console.log(count('abbbccc', 'abc'));
