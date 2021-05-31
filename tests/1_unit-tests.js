const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("Translate to British English", () => {
    test("Sentence 'Mangoes are my favorite fruit'", () => {
      assert.include(
        translator.americanToBritish("Mangoes are my favorite fruit"),
        "<span class='highlight'>favourite</span>",
        "incorrect highlighted translated"
      );
    });
    test("Sentence 'I ate yogurt for breakfast.'", () => {
      assert.include(
        translator.americanToBritish("I ate yogurt for breakfast."),
        "<span class='highlight'>yoghurt</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'We had a party at my friend's condo.'", () => {
      assert.include(
        translator.americanToBritish("We had a party at my friend's condo."),
        "<span class='highlight'>flat</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'Can you toss this in the trashcan for me?'", () => {
      assert.include(
        translator.americanToBritish(
          "Can you toss this in the trashcan for me?"
        ),
        "<span class='highlight'>bin</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'The parking lot was full.'", () => {
      assert.include(
        translator.americanToBritish("The parking lot was full."),
        "<span class='highlight'>car park</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'Like a high tech Rube Goldberg machine.'", () => {
      assert.include(
        translator.americanToBritish("Like a high tech Rube Goldberg machine."),
        "<span class='highlight'>Heath Robinson device</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'To play hooky means to skip class or work.'", () => {
      assert.include(
        translator.americanToBritish(
          "To play hooky means to skip class or work."
        ),
        "<span class='highlight'>bunk off</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'No Mr. Bond, I expect you to die.'", () => {
      assert.include(
        translator.americanToBritish("No Mr. Bond, I expect you to die."),
        "<span class='highlight'>Mr</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'Dr. Grosh will see you now.'", () => {
      assert.include(
        translator.americanToBritish("Dr. Grosh will see you now."),
        "<span class='highlight'>Dr</span>",
        "incorrect highlighted / translate"
      );
    });
    test("Sentence 'Lunch is at 12:15 today.'", () => {
      assert.include(
        translator.americanToBritish("Lunch is at 12:15 today."),
        "<span class='highlight'>12.15</span>",
        "incorrect highlighted / translate"
      );
    });
  });

  // Translate We watched the footie match for a while. to American English
  // Translate Paracetamol takes up to an hour to work. to American English
  // Translate First, caramelise the onions. to American English
  // Translate I spent the bank holiday at the funfair. to American English
  // Translate I had a bicky then went to the chippy. to American English
  // Translate I've just got bits and bobs in my bum bag. to American English
  // Translate The car boot sale at Boxted Airfield was called off. to American English
  // Translate Have you met Mrs Kalyani? to American English
  // Translate Prof Joyner of King's College, London. to American English
  // Translate Tea time is usually around 4 or 4.30. to American English
  // Highlight translation in Mangoes are my favorite fruit.
  // Highlight translation in I ate yogurt for breakfast.
  // Highlight translation in We watched the footie match for a while.
  // Highlight translation in Paracetamol takes up to an hour to work.
});
