const userName = 'standard_user';
const password = 'sec';
   
module.exports = {

    'Username or passwork is not correct': (browser) => {
        browser
        .url("https://www.saucedemo.com/")
        .waitForElementVisible('.login-box', 3000)
        .setValue('input[id=user-name]', userName)
        .setValue('input[id=password]', password)
        .click('.btn_action')
        .waitForElementVisible('h3[data-test="error"]', 3000)
        .assert.containsText('h3[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
        .end();
    }

    
}