module.exports = {
  'SideBar should open on click of burger button...' : (browser) => {
    browser
      .url(process.env.NIGHTWATCH_URL)
      .waitForElementVisible('.bm-burger-button')
      .click('.bm-burger-button')
      .waitForElementVisible('.bm-item-list')
      .assert.containsText('.bm-item-list', 'HOME')
      .end();
  },
  'SideBar "HOME" Link should route to /...' : (browser) => {
    browser
      .url(process.env.NIGHTWATCH_URL)
      .waitForElementVisible('.bm-burger-button')
      .click('.bm-burger-button')
      .useXpath()
      .waitForElementVisible("//*[@id='root']/div/div[1]/div[2]/div/div[2]/div[1]/nav/a[1]")
      .click("//*[@id='root']/div/div[1]/div[2]/div/div[2]/div[1]/nav/a[1]")
      .assert.urlContains(process.env.NIGHTWATCH_URL)
      .end();
  },
};