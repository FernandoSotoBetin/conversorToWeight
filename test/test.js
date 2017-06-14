const expect = require('chai').expect
const weight = require('..').converTo

describe('#weight', function () {

  it('Se Espera que se obtenga 0.45', function () {
    const result = weight('lb','kg',1)
    expect(result).to.equal(0.45)
  })

  it('Se Espera que se obtenga 2.2', function () {
    const result = weight('kg','lb',1)
    expect(result).to.equal(2.2)
  })


})