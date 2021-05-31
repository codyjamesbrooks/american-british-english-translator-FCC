"use strict";

const { restart } = require("nodemon");
const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    console.log(req.body);

    if (!req.body.text) {
      return res.json({ error: "No text to translate" });
    }

    if (req.body.locale === "american-to-british") {
      let translatedText = translator.americanToBritish(req.body.text);
      return res.json({ translation: translatedText });
    }
  });
};
