
  
module.exports = {

    'Password is not correct': (browser) => {
        browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible('.login-box', 3000)
        .setValue('input[id=user-name]', 'standard_user')
        .setValue('input[id=password]', 'se')
        .click('.btn_action')
        .waitForElementVisible('h3[data-test="error"]', 3000)
        .assert.containsText('h3[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
    },

    'Username is not correct': (browser) => {
        browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible('.login-box', 3000)
        .setValue('input[id=user-name]', 'stand')
        .setValue('input[id=password]', 'secret_sauce')
        .click('.btn_action')
        .waitForElementVisible('h3[data-test="error"]', 3000)
        .assert.containsText('h3[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
    },

    'Username is empty': (browser) => {
        browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible('.login-box', 3000)
        .setValue('input[id=user-name]', '')
        .setValue('input[id=password]', 'secret_sauce')
        .click('.btn_action')
        .waitForElementVisible('h3[data-test="error"]', 3000)
        .assert.containsText('h3[data-test="error"]', 'Epic sadface: Username is required')
    },

    'Password is empty': (browser) => {
        browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible('.login-box', 3000)
        .setValue('input[id=user-name]', 'standard_user')
        .setValue('input[id=password]', '')
        .click('.btn_action')
        .waitForElementVisible('h3[data-test="error"]', 3000)
        .assert.containsText('h3[data-test="error"]', 'Epic sadface: Password is required')
    },

    'Username and password is empty': (browser) => {
        browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible('.login-box', 3000)
        .setValue('input[id=user-name]', '')
        .setValue('input[id=password]', '')
        .click('.btn_action')
        .waitForElementVisible('h3[data-test="error"]', 3000)
        .assert.containsText('h3[data-test="error"]', 'Epic sadface: Username is required')
        .end();
    }

    

    
}