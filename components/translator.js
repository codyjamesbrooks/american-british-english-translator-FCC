const { restart } = require("nodemon");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  americanToBritish(text) {
    let translatedText = (" " + text).slice(1);

    // translate time
    translatedText = translatedText.replace(
      /([01][0-9]):([0-6][0-9])/g,
      this.highlightText("$1.$2")
    );

    let translationArray = [
      americanOnly,
      americanToBritishSpelling,
      americanToBritishTitles,
    ];

    for (const translationObjet of translationArray) {
      for (const [wordToTranslate, wordAfterTranslate] of Object.entries(
        translationObjet
      )) {
        let wordToTranslateRegex = new RegExp(`\\b${wordToTranslate}\\b`, "gi");
        translatedText = translatedText.replace(
          wordToTranslateRegex,
          this.highlightText(wordAfterTranslate)
        );
      }
    }

    return translatedText;
  }

  britishToAmerican(text) {
    let translatedText = (" " + text).slice(1);

    // translate time
    translatedText = translatedText.replace(
      /([01][0-9])\.([0-6][0-9])/g,
      this.highlightText("$1.$2")
    );

    for (const [wordToTranslate, wordAfterTranslate] of Object.entries(
      britishOnly
    )) {
      let wordToTranslateRegex = new RegExp(`\\b${wordToTranslate}\\b`, "gi");
      translatedText = translatedText.replace(
        wordToTranslateRegex,
        this.highlightText(wordAfterTranslate)
      );
    }

    let translationArray = [americanToBritishSpelling, americanToBritishTitles];
    for (const translationObject of translationArray) {
      for (const [wordAfterTranslate, wordToTranslate] of Object.entries(
        translationObject
      )) {
        let wordToTranslateRegex = new RegExp(`\\b${wordToTranslate}\\b`, "gi");
        translatedText = translatedText.replace(
          wordToTranslateRegex,
          this.highlightText(wordAfterTranslate)
        );
      }
    }
  }

  highlightText(text) {
    return "<span class='highlight'>" + text + "</span>";
  }
}

module.exports = Translator;
