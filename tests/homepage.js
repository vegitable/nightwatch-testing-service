module.exports = {
  'Homepage should load succesfully...' : (browser) => {
    browser
      .url(process.env.NIGHTWATCH_URL)
      .waitForElementVisible('.logo')
      .end();
  },

  'Error message should flash when no postcode is given...' : (browser) => {
    browser
      .url(process.env.NIGHTWATCH_URL)
      .waitForElementVisible('.logo')
      .waitForElementVisible('.searchBarSubmitButton')
      .click('.searchBarSubmitButton')
      .waitForElementPresent('.alertBox')
      .assert.containsText('.alertText', 'FILL IN YER POSTCODE!')
      .end();
  },

  'Error message should flash when a postcode with no results is given...' : (browser) => {
    browser
      .url(process.env.NIGHTWATCH_URL)
      .waitForElementVisible('.logo')
      .waitForElementVisible('.searchBarTextInput')
      .setValue('.searchBarTextInput', 'testingpostcode')
      .waitForElementVisible('.searchBarSubmitButton')
      .click('.searchBarSubmitButton')
      .waitForElementPresent('.alertBox')
      .assert.containsText('.alertText', 'NO RESTAURANTS FOR YOU!')
      .end();
  },
};