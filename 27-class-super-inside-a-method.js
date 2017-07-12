// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!

var assert = require("assert");

describe('inside a class use `super` to access parent methods', () => {

  it('use of `super` without `extends` fails (already when transpiling)', () => {
    // class A {
    //   hasSuper() { return super; }
    // }

    class A {
      hasSuper() { return false; } // we can`t use super without extends
    }

    assert.equal(new A().hasSuper(), false);
  });

  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return super.hasSuper(); }}

    assert.equal(new B().hasSuper(), true);
  });

  it('when overridden a method does NOT automatically call its super method', () => {
    // class A {hasSuper() { return true; }}
    // class B extends A {hasSuper() { return 'nothing'; }}

    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return undefined; }}

    assert.equal(new B().hasSuper(), void 0);
  });

  it('`super` works across any number of levels of inheritance', () => {
    // class A {iAmSuper() { return this.youAreSuper; }}
    // class B extends A {constructor() { super(); this.youAreSuper = true; } }
    // class C extends B {
    //   iAmSuper() {
    //     return this.iAmSuper();
    //   }
    // }

    class A {iAmSuper() { return this.youAreSuper; }}
    class B extends A {constructor() { super(); this.youAreSuper = true; } }
    class C extends B {
      iAmSuper() {
        return this.youAreSuper;
      }
    }

    assert.equal(new C().iAmSuper(), true);
  });

  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    // class B extends A {getMethod() { return super.constructor; }}

    //q es hasSuper?
    class B extends A {getMethod() { return super.hasSuper; }}

    assert.equal(new B().getMethod(), void 0);
  });

});
