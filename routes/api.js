"use strict";

const { restart } = require("nodemon");
const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    if (req.body.text == null || req.body.locale == null) {
      return res.json({ error: "Required field(s) missing" });
    }

    if (req.body.text === "") {
      return res.json({ error: "No text to translate" });
    }

    if (
      req.body.locale !== "american-to-british" &&
      req.body.locale !== "british-to-american"
    ) {
      return res.json({ error: "Invalid value for locale field" });
    }

    let translatedText;
    if (req.body.locale === "american-to-british") {
      translatedText = translator.americanToBritish(req.body.text);
    } else {
      translatedText = translator.britishToAmerican(req.body.text);
    }

    // console.log(`text: ${req.body.text} translation: ${translatedText}`);
    return res.send({ text: req.body.text, translation: translatedText });
  });
};
