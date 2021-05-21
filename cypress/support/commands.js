import GeneralLocator from '../locators/general.locator'
import ConfigAction from '../pages/supporting-methods/actions.config'
import GeneralAction from '../pages/supporting-methods/actions.general'


Cypress.Commands.add('forceClick', (locator)=>{
    cy.get(locator).click({force:true})
    cy.wait(300)
})

Cypress.Commands.add('typeText', (locator,text)=>{
    cy.get(locator)
        .clear()
        .should('be.empty')
        .type(text)
        .should('have.value', text)    
})

Cypress.Commands.add('typeTextWithLocatorIndex', (locator,index,text)=>{
    cy.get(locator)
        .eq(index)
        .type(text,{force:true})
        .should('have.value', text)    
})

Cypress.Commands.add('checkToast', (toast)=>{
    cy.get(GeneralLocator.toastContainer())
    .should('contain', toast)
})