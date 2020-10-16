const hello = require('../index')
const { expect } = require('chai');
// const chai = require('chai')


describe('Hello World', () => {
    it('hello function should return hello world', () => {
      expect(hello()).to.equal('hello world')
    })
  })