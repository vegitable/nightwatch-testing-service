module.exports = {
  'RestaurantTiles should be rendered when there are results for a postcode' : (browser) => {
    browser
    .url(process.env.NIGHTWATCH_URL)
    .waitForElementVisible('.logo')
    .waitForElementVisible('.searchBarTextInput')
    .setValue('.searchBarTextInput', 'E147dx')
    .waitForElementVisible('.searchBarSubmitButton')
    .click('.searchBarSubmitButton')
    .assert.urlContains(process.env.NIGHTWATCH_URL + '/restaurants')
    .waitForElementVisible('.restaurantTile')
    .end();
  },
  'should be routed to home page if there is not restaurant data' : (browser) => {
    browser
    .url(process.env.NIGHTWATCH_URL + '/restaurants')
    .waitForElementVisible('.logo')
    .assert.urlEquals(process.env.NIGHTWATCH_URL + '/')
    .end();
  },
};