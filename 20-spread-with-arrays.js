// 20: spread - with-arrays
// To do: make all tests pass, leave the assert lines unchanged!

//entender rest
//entender los ...

var assert = require("assert");

describe('spread with arrays', () => {

  it('extracts each array item', function() {
    const [a, b] = [...[1, 2]];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });

  // it('in combination with rest', function() {
  //   const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
  //   assert.equal(a, 1);
  //   assert.equal(b, 2);
  //   assert.deepEqual(rest, [3, 4, 5]);
  // });

  it('in combination with rest', function() {
    const [x, a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    assert.equal(a, 1);
    assert.equal(b, 2);
    assert.deepEqual(rest, [3, 4, 5]);
  });

  // it('spreading into the rest', function() {
  //   const [...rest] = [...[,1, 2, 3, 4, 5]];
  //   assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  // });

  it('spreading into the rest', function() {
    const [x,...rest] = [...[,1, 2, 3, 4, 5]];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });

  describe('used as function parameter', () => {
    it('prefix with `...` to spread as function params', function() {
      const magicNumbers = [1, 2];
      const fn = (magicA, magicB) => {
        assert.deepEqual(magicNumbers[0], magicA);
        assert.deepEqual(magicNumbers[1], magicB);
      };
      fn(...magicNumbers);
    });

    it('pass an array of numbers to Math.max()', function() {
      const max = Math.max(...[23, 0, 42, 4]);
      assert.equal(max, 42);
    });
  });
});
