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
};