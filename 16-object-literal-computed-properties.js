// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!

var assert = require("assert");

describe('Object literal properties may be computed values', () => {

  it('a computed property `x` needs to be surrounded by `[]`', () => {
    const propertyName = 'x';
    const obj = {[propertyName]: 1};
    assert.equal(obj.x, 1);
  });

  it('can also get a function assigned', () => {
    const key = 'func';
    //entiende!
    // const obj = {[key]: 'seven'};
    const obj = {[key]() { return 'seven'}};

    assert.equal(obj.func(), 'seven');
  });

  it('the key may also be the result of a function call', () => {
    const getName = () => 'propertyName';
    //entiende!
    // const obj = {[getName]() {return 'seven'}};
    const obj = {[[getName()]]() {return 'seven'}};

    assert.equal(obj.propertyName(), 'seven');
  });

  it('the key can also be constructed by an expression', () => {
    // const what = 'Key';
    // const obj = {['proper' + what]: null};
    const what = 'Name';
    const obj = {['property' + what]: null};
    assert.equal('propertyName' in obj, true);
  });

  // it('accessor keys can be computed names too', () => {
  //   const obj = {
  //     set ['key'](_) {return 1}
  //   };
  //   assert.equal(obj.key, 1);
  // });

//what?
  it('accessor keys can be computed names too', () => {
    const obj = {
      get ['key']() {return 1}
    };
    assert.equal(obj.key, 1);
  });
});
