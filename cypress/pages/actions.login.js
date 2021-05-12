import LoginConstants from '../constants/login.constants'
import LoginLocator from '../locators/login.locator'
import ServiceAdress from '../config/service.adress'
var LoginAction ={
    
    navigate_to_url: function(environment){
        cy.visit(environment + ServiceAdress.login)
    },
    
    enter_username: function(username){
        cy.get(LoginLocator.username()).type(username)
        .should('have.value', username)
    },
    enter_password: function(password){
        cy.get(LoginLocator.password()).type(password)
        .should('have.value', password)
    },

    click_login: function (){
        cy.get(LoginLocator.loginButton()).click()
    },

    verify_page: function (){
        cy.wait(2000)
        cy.get(LoginLocator.logoutButton())
        .should('be.visible')
        cy.get(LoginLocator.hamburgerMenu())
        .should('be.visible')
    },

    verify_alert: function(){
        cy.wait(1000)
        cy.get(LoginLocator.alert()).should('contain', LoginConstants.alert)
    },

    is_login_view_visible: function(){
        cy.get(LoginLocator.login_logo())
        .should('be.visible')
        cy.get(LoginLocator.loginButton())
        .should('be.visible')
    },
    
}

export default LoginAction