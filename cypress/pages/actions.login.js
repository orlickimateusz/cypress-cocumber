import LoginConstants from '../constants/login.constants'
import LoginLocator from '../locators/login.locator'
import ServiceAdress from '../config/service.adress'
var LoginAction ={
    
navigateToUrl: function(environment){
    cy.visit(environment + ServiceAdress.login)
    },
    
enterUsername: function(username){
    cy.get(LoginLocator.username()).type(username)
        .should('have.value', username)
    },

enterPassword: function(password){
    cy.get(LoginLocator.password()).type(password)
        .should('have.value', password)
    },

clickLogin: function (){
    cy.get(LoginLocator.loginButton()).click()
    },

verifyPage: function (){
    cy.wait(2000)
    cy.get(LoginLocator.logoutButton())
        .should('be.visible')
    cy.get(LoginLocator.hamburgerMenu())
        .should('be.visible')
    },

verifyAlert: function(){
    cy.wait(1000)
    cy.get(LoginLocator.alert()).should('contain', LoginConstants.alert)
    },

isLoginViewVisible: function(){
    cy.get(LoginLocator.loginLogo())
        .should('be.visible')
    cy.get(LoginLocator.loginButton())
        .should('be.visible')
    },

clickLogout: function(){
    cy.get(LoginLocator.logoutButton()).click()
    cy.wait(100)
    },
//do poprawienia jak dodadzą qa id    
confirmLogout: function(){
    cy.get('[class="mat-dialog-actions"]')
    .find('[class="mat-button-wrapper"]')
    .eq(2)
    .should('have.text', 'Tak')
    .click()
    }   
    
}

export default LoginAction