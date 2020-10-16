const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');

chai.use(require('chai-dom'));
require('jsdom-global')();

describe('index.html', () => {

    beforeEach((done) => {
      JSDOM.fromFile('index.html')
      .then((dom) => {
        global.document = dom.window.document
      })
      .then(done, done);
    });
  
    describe("Level 1 heading", () => {
      it("h1 element should exists.", () => {  
        let element = document.querySelector('h1')
        expect(element).to.exist
      })
      it("h1 element should say 'Hello World!'", () => {
        let element = document.querySelector('h1')
        expect(element).to.have.text("Hello World!")
      })
    })
   
  })
