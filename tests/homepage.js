module.exports = {
  'Homepage should load succesfully...' : (browser) => {
    console.log(process.env.NIGHTWATCH_URL);
    browser
      .url(process.env.NIGHTWATCH_URL)
      .waitForElementVisible('.logo')
      .end();
  }
};