const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  suite("Valid POST tests to /api/translate", () => {
    test("POST request with text and locale provided", (done) => {
      // Translation with text and locale fields: POST request to /api/translate
      done();
    });
    test("POST req with text that needs no translation", (done) => {
      // Translation with text that needs no translation: POST request to /api/translate
      done();
    });
  });
  suite("Invalid POSTs to /api/translate", () => {
    test("POST req with text and invalid locale", (done) => {
      // Translation with text and invalid locale field: POST request to /api/translate
      done();
    });
    test("POST req with missing text field", (done) => {
      // Translation with missing text field: POST request to /api/translate
      done();
    });
    test("POST req with missing locale field", (done) => {
      // Translation with missing locale field: POST request to /api/translate
      done();
    });
    test("POST req with empty text parameter", (done) => {
      // Translation with empty text: POST request to /api/translate
      done();
    });
  });
});
