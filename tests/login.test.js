module.exports = {
    'login com sucesso': function(browser){
        browser
            .url("https://www.saucedemo.com/")
            .waitForElementVisible('.login-box', 5000)
            .setValue('input[id=user-name]', 'standard_user')
            .setValue('input[id=password]', 'secret_sauce')
            .click('.btn_action')
            .waitForElementVisible('.product_label', 3000)
            .assert.containsText('.product_label', 'Products')
            .end();
    }
}