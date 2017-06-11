// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardType = '';
  var prefixLength1 = cardNumber.substring(0,1);
  var prefixLength2 = cardNumber.substring(0,2);
  var prefixLength3 = cardNumber.substring(0,3);
  var prefixLength4 = cardNumber.substring(0,4);
  var prefixLength6 = cardNumber.substring(0,6);
  // Discover prefix of 38 or 39 and a length of 14.
  if (prefixLength2 === '38' || prefixLength2 === '39') {
    if (cardNumber.length === 14) {
      cardType = 'Diner\'s Club';
    }
  }
  // American Express prefix of 34 or 37 and a length of 15.
  else if (prefixLength2 === '34' || prefixLength2 === '37') {
    if (cardNumber.length === 15) {
      cardType = 'American Express';
    }
  }
  // MasterCard prefix of 51-55 and a length of 16.
  else if (prefixLength2 === '51' || prefixLength2 === '52' || prefixLength2 === '53' || prefixLength2 === '54' || prefixLength2 === '55') {
    if (cardNumber.length === 16) {
      cardType = 'MasterCard';
    }
  }
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  else if (prefixLength4 === '4903' || prefixLength4 === '4905' || prefixLength4 === '4911' || prefixLength4 === '4936' || prefixLength6 === '564182' || prefixLength6 === '633110' || prefixLength4 === '6333' || prefixLength4 === '6759') {
    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
      cardType = 'Switch';
    }
  }
  // Visa prefix of 4 and a length of 13, 16, or 19
  else if (prefixLength1 === '4') {
    if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      cardType = 'Visa';
    }
  }
  // Discover prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  else if (prefixLength4 === '6011' || prefixLength3 === '644' || prefixLength3 === '645' || prefixLength3 === '646' || prefixLength3 === '647' || prefixLength3 === '648' || prefixLength3 === '649' || prefixLength2 === '65') {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      cardType = 'Discover';
    }
  }
  // Maestro prefix of 5018, 5020, 5038, 6304 and a length of 12-19
  else if (prefixLength4 === '5018' || prefixLength4 === '5020' || prefixLength4 === '5038' || prefixLength4 === '6304') {
    if (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
      cardType = 'Maestro';
    }
  }
  // China UnionPay prefix of 622126-622925 and a length of 16-19.
  // China UnionPay prefix of 624-626 and a length of 16-19.
  // China UnionPay prefix of 6282-6288 and a length of 16-19.
  else if ((parseInt(prefixLength6) >= 622126 && parseInt(prefixLength6) <= 622925) || (parseInt(prefixLength3) >= 624 && parseInt(prefixLength3) <= 626) || (parseInt(prefixLength4) >= 6282 && parseInt(prefixLength4) <= 6288)) {
    if (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
      cardType = 'China UnionPay';
    }
  }
  return cardType;
};


// 38345678901234 (Diner's Club)
// 39345678901234 (Diner's Club)
// 343456789012345 (American Express)
// 373456789012345 (American Express)
// 4123456789012 (Visa)
// 4123456789012345 (Visa)
// 4123456789012345678 (Visa)
// 5112345678901234 (MasterCard)
// 5212345678901234 (MasterCard)
// 5312345678901234 (MasterCard)
// 5412345678901234 (MasterCard)
// 5512345678901234 (MasterCard)
// 6011123456789123 (Discover)
// 6011987654321987456 (Discover)
// 501812345678 (Maestro)
// 502012345678 (Maestro)
// 503812345678 (Maestro)
// 630412345678 (Maestro)
// 5038123456781 (Maestro)
// 50201234567812 (Maestro)
// 501812345678123 (Maestro)
// 6304123456781234 (Maestro)
// 50381234567812345 (Maestro)
// 502012345678123456 (Maestro)
// 5018123456781234567 (Maestro)