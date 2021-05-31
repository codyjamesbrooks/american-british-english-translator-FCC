const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  suite("Valid POST tests to /api/translate", () => {
    test("POST request with text and locale provided", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: "scuttlebutt", locale: "american-to-british" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type, "application/json");
          assert.equal(
            res.body.translation,
            "<span class='highlight'>rumour</span>"
          );
          done();
        });
    });
    test("POST req with text that needs no translation", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: "Test", locale: "american-to-british" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type, "application/json");
          assert.equal(res.body.translation, "Everything looks good to me!");
          done();
        });
    });
  });
  suite("Invalid POSTs to /api/translate", () => {
    test("POST req with text and invalid locale", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: "test", locale: "invalid" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type, "application/json");
          assert.equal(res.body.error, "Invalid value for locale field");
          done();
        });
    });
    test("POST req with missing text field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({ locale: "american-to-british" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type, "application/json");
          assert.equal(res.body.error, "Required field(s) missing");
          done();
        });
    });
    test("POST req with missing locale field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: "Test Text" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type, "application/json");
          assert.equal(res.body.error, "Required field(s) missing");
          done();
        });
    });
    test("POST req with empty text parameter", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: "", locale: "american-to-british" })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type, "application/json");
          assert.equal(res.body.error, "No text to translate");
          done();
        });
    });
  });
});
