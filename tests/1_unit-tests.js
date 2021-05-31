const { AssertionError } = require("chai");
const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("Translate to British English", () => {
    test("Sentence 'Mangoes are my favorite fruit'", () => {
      assert.include(
        translator.americanToBritish("Mangoes are my favorite fruit"),
        "favourite",
        "Incorrect translation"
      );
    });
    test("Sentence 'I ate yogurt for breakfast.'", () => {
      assert.include(
        translator.americanToBritish("I ate yogurt for breakfast."),
        "yoghurt",
        "Incorrect translation"
      );
    });
    test("Sentence 'We had a party at my friend's condo.'", () => {
      assert.include(
        translator.americanToBritish("We had a party at my friend's condo."),
        "flat",
        "Incorrect translation"
      );
    });
    test("Sentence 'Can you toss this in the trashcan for me?'", () => {
      assert.include(
        translator.americanToBritish(
          "Can you toss this in the trashcan for me?"
        ),
        "bin",
        "Incorrect translation"
      );
    });
    test("Sentence 'The parking lot was full.'", () => {
      assert.include(
        translator.americanToBritish("The parking lot was full."),
        "car park",
        "Incorrect translation"
      );
    });
    test("Sentence 'Like a high tech Rube Goldberg machine.'", () => {
      assert.include(
        translator.americanToBritish("Like a high tech Rube Goldberg machine."),
        "Heath Robinson device",
        "Incorrect translation"
      );
    });
    test("Sentence 'To play hooky means to skip class or work.'", () => {
      assert.include(
        translator.americanToBritish(
          "To play hooky means to skip class or work."
        ),
        "bunk off",
        "Incorrect translation"
      );
    });
    test("Sentence 'No Mr. Bond, I expect you to die.'", () => {
      assert.include(
        translator.americanToBritish("No Mr. Bond, I expect you to die."),
        "Mr",
        "Incorrect translation"
      );
    });
    test("Sentence 'Dr. Grosh will see you now.'", () => {
      assert.include(
        translator.americanToBritish("Dr. Grosh will see you now."),
        "Dr",
        "Incorrect translation"
      );
    });
    test("Sentence 'Lunch is at 12:15 today.'", () => {
      assert.include(
        translator.americanToBritish("Lunch is at 12:15 today."),
        "12.15",
        "Incorrect translation"
      );
    });
  });
  suite("Translate to American English", () => {
    test("Sentence 'We watched the footie match for a while.'", () => {
      assert.include(
        translator.britishToAmerican(
          "We watched the footie match for a while."
        ),
        "soccer",
        "Incorrect translation"
      );
    });
    test("Sentence 'Paracetamol takes up to an hour to work.'", () => {
      assert.include(
        translator.britishToAmerican(
          "Paracetamol takes up to an hour to work."
        ),
        "Tylenol",
        "Incorrect translation"
      );
    });
    test("Sentence 'First, caramelise the onions.'", () => {
      assert.include(
        translator.britishToAmerican("First, caramelise the onions."),
        "caramelize",
        "Incorrect translation"
      );
    });
    test("Sentence 'I spent the bank holiday at the funfair.'", () => {
      assert.include(
        translator.britishToAmerican(
          "I spent the bank holiday at the funfair."
        ),
        "public holiday",
        "Incorrect translation"
      );
      assert.include(
        translator.britishToAmerican(
          "I spent the bank holiday at the funfair."
        ),
        "carnival",
        "Incorrect translation"
      );
    });
    test("Sentence 'I had a bicky then went to the chippy.'", () => {
      assert.include(
        translator.britishToAmerican("I had a bicky then went to the chippy."),
        "cookie",
        "Incorrect translation"
      );
      assert.include(
        translator.britishToAmerican("I had a bicky then went to the chippy."),
        "fish-and-chip shop",
        "Incorrect translation"
      );
    });
    test("Sentence 'I've just got bits and bobs in my bum bag.'", () => {
      assert.include(
        translator.britishToAmerican(
          "I've just got bits and bobs in my bum bag."
        ),
        "odds and ends",
        "Incorrect translation"
      );
      assert.include(
        translator.britishToAmerican(
          "I've just got bits and bobs in my bum bag."
        ),
        "fanny pack",
        "Incorrect translation"
      );
    });
    test("Sentence 'The car boot sale at Boxted Airfield was called off.'", () => {
      assert.include(
        translator.britishToAmerican(
          "The car boot sale at Boxted Airfield was called off."
        ),
        "swap meet",
        "Incorrect translation"
      );
    });
    test("Sentence 'Have you met Mrs Kalyani?'", () => {
      assert.include(
        translator.britishToAmerican("Have you met Mrs Kalyani?"),
        "Mrs.",
        "Incorrect translation"
      );
    });
    test("Sentence 'Prof Joyner of King's College, London.'", () => {
      assert.include(
        translator.britishToAmerican("Prof Joyner of King's College, London."),
        "Prof.",
        "Incorrect translation"
      );
    });
    test("Sentence 'Tea time is usually around 4 or 4.30.'", () => {
      assert.include(
        translator.britishToAmerican("Tea time is usually around 4 or 4.30."),
        "4:30",
        "Incorrect translation"
      );
    });
  });
  suite("Test Highlight of translation", () => {
    test("Proper highlight of 'Mangoes are my favorite fruit'", () => {
      assert.include(
        translator.americanToBritish("Mangoes are my favorite fruit"),
        '<span class="highlight">favourite</span>',
        "Incorrect highlight"
      );
    });
    test("Proper highlight of 'I ate yogurt for breakfast'", () => {
      assert.include(
        translator.americanToBritish("I ate yogurt for breakfast"),
        '<span class="highlight">yoghurt</span>',
        "Incorrect highlight"
      );
    });
    test("Proper highlight of 'We watched the footie match for a while'", () => {
      assert.include(
        translator.britishToAmerican("We watched the footie match for a while"),
        '<span class="highlight">soccer</span>',
        "Incorrect highlight"
      );
    });
    test("Proper highlight of 'Paracetamol takes up to an hour to work'", () => {
      assert.include(
        translator.britishToAmerican("Paracetamol takes up to an hour to work"),
        '<span class="highlight">Tylenol</span>',
        "Incorrect highlight"
      );
    });
  });
});
