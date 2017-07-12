// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!

var assert = require("assert");

describe('spread with strings', () => {

//maso
  it('simply spread each char of a string', function() {
    const [a,b] = [...'ab'];
    assert.equal(a, 'a');
    assert.equal(b, 'b');
  });

  it('extracts each array item', function() {
    const [c,a,b] = ['a', ...'12'];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });

//ya entiendo, el ...'bcd' hace spread a la arraya!
  it('works anywhere inside an array (must not be last)', function() {
    const letters = ['a', ...'bcd', 'e', 'f'];
    assert.equal(letters.length, 6);
  });

  it('dont confuse with the rest operator', function() {
    const [...rest] = [...'1234', ...'5'];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });

  it('passed as function parameter', function() {
    const max = Math.max(...'12345');
    assert.deepEqual(max, 5);
  });

});
