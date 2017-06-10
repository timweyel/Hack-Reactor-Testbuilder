/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it('Throws an error so it fails', function() {

//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num%2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num%2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club' && cardNumber.length !== 14) {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club' && cardNumber.length !== 14) {
      throw new Error('Test failed');
    }

  });
});

// describe('American Express', function() {
//   // It can get annoying to keep typing the if/throw, so here is a
//   // helper function to throw an error if the input statement isn't true.
//   var assert = function(isTrue) {
//     if(!isTrue) {
//       throw new Error('Test failed');
//     }

//   };

//   it('has a prefix of 34 and a length of 15', function() {
//     assert(detectNetwork('343456789012345') === 'American Express');
//   });

//   it('has a prefix of 37 and a length of 15', function() {
//     assert(detectNetwork('373456789012345') === 'American Express');
//   });
// });

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };
  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });
  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  // var expect = chai.expect;

  // it('MasterCard', function() {
  //   expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  // });

  // it('MasterCard', function() {
  //   expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  // });

  // it('MasterCard', function() {
  //   expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  // });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();
  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix +'12345678901234').should.equal('MasterCard');
      });
    })(prefix)
  }
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // debugger;
  var should = chai.should();
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '6441234567891').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix +'6011987654321987').should.equal('Discover');
      });
    })(prefix)
  }
      it('has a prefix of 6011 and a length of 19', function() {
        detectNetwork('6011987654321987456').should.equal('Discover');
      });
      it('has a prefix of 6011 and a length of 16', function() {
        detectNetwork('6011123456789123').should.equal('Discover');
      });
      it('has a prefix of 65 and a length of 19', function() {
        detectNetwork('6511987654321987456').should.equal('Discover');
      });
      it('has a prefix of 65 and a length of 16', function() {
        detectNetwork('6511123456789123').should.equal('Discover');
      });
  });

describe('Maestro', function() {
  for (var cardLength = 12; cardLength <= 19; cardLength++) {
    var maestroPrefixes = ['5018', '5020', '5038', '6304'];
    var generateNumbers = function(number) {
      var makeNumbers = '';
      for (var i = 0; i < number; i++) {
        makeNumbers += '1';
      }
      return makeNumbers;
    }
    maestroPrefixes.forEach(function(prefix) {
      (function(cardLength) {
        it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
          detectNetwork(prefix + generateNumbers(cardLength - 4)).should.equal('Maestro');
        });
      })(cardLength)
    });
  }
});

describe('China UnionPay', function() {
  // China UnionPay a prefix of 622126-622925 and a length of 16-19.
  var should = chai.should();

  for (var cardLength1 = 16; cardLength1 <= 19; cardLength1++) {
    for (var prefix1 = 622126; prefix1 <= 622925; prefix1++) {

    (function(prefix1, cardLength1) {
      it('has a prefix of ' + prefix1 + ' and a length of ' + cardLength1, function() {
        detectNetwork(prefix1 + '1'.repeat(cardLength1 - 6)).should.equal('China UnionPay');
        });
      })(prefix1, cardLength1);
      }
    }

  // China UnionPay prefix of 624-626 and a length of 16-19.
    for (var cardLength2 = 16; cardLength2 <= 19; cardLength2++) {
      for (var prefix2 = 624; prefix2 <= 626; prefix2++) {

    (function(prefix2, cardLength2) {
      it('has a prefix of ' + prefix2 + ' and a length of ' + cardLength2, function() {
        detectNetwork(prefix2 + '1'.repeat(cardLength2 - 3)).should.equal('China UnionPay');
        });
      })(prefix2, cardLength2);
      }
    }

  // China UnionPay prefix of 6282-6288 and a length of 16-19.
    for (var cardLength3 = 16; cardLength3 <= 19; cardLength3++) {
      for (var prefix3 = 6282; prefix3 <= 6288; prefix3++) {

    (function(prefix3, cardLength3) {
      it('has a prefix of ' + prefix3 + ' and a length of ' + cardLength3, function() {
        detectNetwork(prefix3 + '1'.repeat(cardLength3 - 4)).should.equal('China UnionPay');
        });
      })(prefix3, cardLength3);
      }
    }
  });

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
describe('Switch', function() {
  var should = chai.should();

  var prefixLength4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefixLength6 = ['564182', '633110']
  var switchLengths = [16, 18, 19];

  prefixLength4.forEach(function(prefix) {
    switchLengths.forEach(function(cardLength) {
      it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
        detectNetwork(prefix + '1'.repeat(cardLength - 4)).should.equal('Switch');
      });
    });
  });

  prefixLength6.forEach(function(prefix) {
    switchLengths.forEach(function(cardLength) {
      it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
        detectNetwork(prefix + '1'.repeat(cardLength - 6)).should.equal('Switch');
      });
    });
  });

});
