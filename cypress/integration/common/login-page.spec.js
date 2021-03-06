/// <reference types="cypress" />

import LoginAction from '../../pages/actions.login'
import LoginConstants from '../../constants/login.constants'
import ConfigAction from '../../pages/supporting-methods/actions.config'
import GeneralAction from '../../pages/supporting-methods/actions.general'
import LoginLocator from '../../locators/login.locator'


Given('I Navigate to the website', ()=>{
    LoginAction.navigateToUrl(ConfigAction.setEnvironment())
})

When('I type the wrong username', ()=>{
    LoginAction.enterUsername(LoginConstants.wrongUsername)
})

When('Login view is visible', ()=>{
    LoginAction.isLoginViewVisible()
})

When('I verify am I logged', ()=>{
    LoginAction.verifyPage()
})

When('I type the password', ()=>{
    LoginAction.enterPassword(ConfigAction.setPassword())
})

When('I click logout button', ()=>{
    LoginAction.clickLogout()
})

When('I confirm logout', ()=>{
    LoginAction.confirmLogout()
})

Then('I got communicat, that I type Wrong username or password', ()=>{
    LoginAction.verifyAlert()
})

Then('I see {string} communicat', (communicat)=>{
    GeneralAction.checkCommunicat(LoginLocator.logoutComunnicatContainer(), communicat)
})

Then('I type the username', ()=>{
    LoginAction.enterUsername(ConfigAction.setUsername())
})

Then('I check if I am on {string} page', (pageHeader)=>{
    GeneralAction.checkPageHeader(pageHeader)
})

Then('I veryfi am I logout', ()=>{
    LoginAction.isLoginViewVisible()
})

And('I click the login button', ()=>{
    LoginAction.clickLogin()
})