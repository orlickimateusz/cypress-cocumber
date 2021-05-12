/// <reference types="cypress" />

import ActionsLogin from '../../pages/actions.login'
import LoginConstants from '../../constants/login.constants'
import ActionsConfig from '../../pages/supporting-methods/actions.config'
import GeneralActions from '../../pages/supporting-methods/actions.general'


Given('I Navigate to the website', ()=>{
    ActionsLogin.navigate_to_url(ActionsConfig.set_environment())
})

When('I type the wrong username', ()=>{
    ActionsLogin.enter_username(LoginConstants.wrong_username)
})

When('Login view is visible', ()=>{
    ActionsLogin.is_login_view_visible()
})

When('I verify am I logged', ()=>{
    ActionsLogin.verify_page()
})

When('I type the password', ()=>{
    ActionsLogin.enter_password(ActionsConfig.set_password())
})

Then('I got communicat, that I type Wrong username or password', ()=>{
    ActionsLogin.verify_alert()
})

Then('I type the username', ()=>{
    ActionsLogin.enter_username(ActionsConfig.set_username())
})

Then('I check if I am on {string} page', (pageHeader)=>{
    GeneralActions.checkPageHeader(pageHeader)
})

And('I click the login button', ()=>{
    ActionsLogin.click_login()
})