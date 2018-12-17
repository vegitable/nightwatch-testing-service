module.exports = {
  'Homepage loads succesfully' : function (browser) {
    browser
      .url('https://web-ui-service.herokuapp.com/')
      .waitForElementVisible('.logoVegitable')
      .end();
  }
};