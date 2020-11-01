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
      it("h1 tag should exists", () => {  
        let element = document.querySelector('h1')
      })
      it("h1 tag should say 'Hello World!'", () => {
        let element = document.querySelector('h1')
        expect(element).to.have.text("Hello World!")
      })
    })

    describe("Level 2 heading", () => {
      it("h2 tag should exists", () => {  
        let element = document.querySelector('h2')
        expect(element).to.exist
      })
      it("h2 tag should say 'Hello World!'", () => {
        let element = document.querySelector('h2')
        expect(element).to.have.text("Hello World!")
      })
    })


    describe("Level 3 heading", () => {
      it("h3 tag should exists", () => {
        let element = document.querySelector('h3')
        expect(element).to.exist
      })
      it("h3 tag should say 'Hello World'!", () => {
        let element = document.querySelector('h3')
        expect(element).to.have.text("Hello World!")
      })
    })
    
   
  })
