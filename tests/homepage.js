module.exports = {
  'Homepage should load succesfully...' : function (browser) {
    browser
      .url('https://web-ui-service.herokuapp.com/')
      .waitForElementVisible('.logoVegitable')
      .end();
  }
};