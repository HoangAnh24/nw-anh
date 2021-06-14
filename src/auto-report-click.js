module.exports = {
  "step one: navigate to ecosia.org": function (browser) {
    let timer = 62 * 60 * 1000;
    browser
      .url("https://www.ecosia.org")
      .waitForElementVisible("body")
      .assert.visible("input[type=search]")
      .setValue("input[type=search]", "anh")
      .click("button[type=submit]")
      .pause(timer)
      //   .refresh()
      .url("https://www.ecosia.org")
      .waitForElementVisible("body")
      .assert.visible("input[type=search]")
      .setValue("input[type=search]", "anh1")
      .click("button[type=submit]")
      .pause(timer)
      .url("https://www.ecosia.org")
      //   .refresh()
      .waitForElementVisible("body")
      .assert.visible("input[type=search]")
      .setValue("input[type=search]", "anh2")
      .click("button[type=submit]");
      pause(timer)
      .url("https://www.ecosia.org")
      //   .refresh()
      .waitForElementVisible("body")
      .assert.visible("input[type=search]")
      .setValue("input[type=search]", "anh2")
      .click("button[type=submit]");
      
  },

  //   "step two: click submit": function (browser) {
  //     browser
  //       // .click("button[type=submit]")
  //       // .assert.containsText(".mainline-results", "Nightwatch.js")
  //       .end();
  //   },
};
