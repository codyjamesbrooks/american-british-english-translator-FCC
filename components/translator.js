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
      /([01]*[0-9]):([0-6][0-9])/g,
      this.highlightText("$1.$2")
    );

    // handle titles
    for (const title of Object.keys(americanToBritishTitles)) {
      let titleRegex = new RegExp(`\\b(${title.slice(0, -1)})\\.`, "gi");
      translatedText = translatedText.replace(
        titleRegex,
        this.highlightText("$1")
      );
    }

    // translate american spelling and phrases
    let translationArray = [americanOnly, americanToBritishSpelling];

    for (const translationObjet of translationArray) {
      for (const [americanSpelling, britishSpelling] of Object.entries(
        translationObjet
      )) {
        let wordToTranslateRegex = new RegExp(
          `\\b${americanSpelling}\\b`,
          "gi"
        );
        translatedText = translatedText.replace(
          wordToTranslateRegex,
          this.highlightText(britishSpelling)
        );
      }
    }

    if (translatedText == text) return "Everything looks good to me!";
    return translatedText;
  }

  britishToAmerican(text) {
    let translatedText = (" " + text).slice(1);

    // translate time
    translatedText = translatedText.replace(
      /([01]*[0-9])\.([0-6][0-9])/g,
      this.highlightText("$1:$2")
    );

    // handle titles
    for (const title of Object.values(americanToBritishTitles)) {
      let titleRegex = new RegExp(`\\b(${title})\\b`, "gi");
      translatedText = translatedText.replace(
        titleRegex,
        this.highlightText("$1.")
      );
    }

    // translate british spelling to american
    for (const [americanSpelling, britishSpelling] of Object.entries(
      americanToBritishSpelling
    )) {
      let wordToTranslateRegex = new RegExp(`\\b${britishSpelling}\\b`, "gi");
      translatedText = translatedText.replace(
        wordToTranslateRegex,
        this.highlightText(americanSpelling)
      );
    }

    // translate british phrases
    for (const [britishSpelling, americanSpelling] of Object.entries(
      britishOnly
    )) {
      let wordToTranslateRegex = new RegExp(`\\b${britishSpelling}\\b`, "gi");
      translatedText = translatedText.replace(
        wordToTranslateRegex,
        this.highlightText(americanSpelling)
      );
    }
    if (translatedText == text) return "Everything looks good to me!";
    return translatedText;
  }

  highlightText(text) {
    return "<span class='highlight'>" + text + "</span>";
  }
}

module.exports = Translator;
