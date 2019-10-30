const userName = 'standard_user';
const password = 'secret_sauce';
   
module.exports = {

    'Given user is on login page': (browser) => {
        browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible('.login-box', 3000)
    },

    'When the user fill your e-mail and password': (browser) => {
        browser
        .setValue('input[id=user-name]', userName)
        .setValue('input[id=password]', password)
        .click('.btn_action')
    },

    'Then user should see "Procucts" message': (browser) => {
        browser
        .waitForElementVisible('.product_label', 3000)
        .assert.containsText('.product_label', 'Products')
        .end();
    }

}