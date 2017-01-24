let chai = require('chai')
let expect = chai.expect;
let spies = require('chai-spies');
chai.use(spies);

describe('a trivial series of tests', function(){

  it('should add two numbers', function(){
    expect(2 + 2).to.equal(4);
  });

  it('should test asynchronous code', function(done){
    let x = Date.now(), y;
    setTimeout(function(){
      y = Date.now();
      done();
      expect(y - x).to.be.within(2990, 3010);
    }, 1000);
  });

  // it('should fail', function(){
  //   throw new Error('third test failing');
  // });

  it('should spy properly', function(){
    let array = [1, 2, 3];
    let spy = chai.spy.on(array, 'push');
    array.push(5);


    expect(spy).to.be.spy;
    expect(spy).to.have.been.called();

  });

});
