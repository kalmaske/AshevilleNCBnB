"use strict";

var expect = require("chai").expect;
var titleizeName = require("../public/js/titleizeName");

describe("TitleizeName", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(titleizeName("seth godin")).to.equal("Seth Godin");
  });

  it("to append period to leading titles", function() {
    expect(titleizeName("dr zhivago")).to.equal("Dr. Zhivago");
  });

  it("to not change properly cased strings", function() {
    expect(titleizeName("Mr. Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to add periods to properly capitalized titles", function() {
    expect(titleizeName("Mr Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to properly case mixed case strings", function() {
    expect(titleizeName("Mr AlEXANDER PushKIn")).to.equal("Mr. Alexander Pushkin");
  });
});

