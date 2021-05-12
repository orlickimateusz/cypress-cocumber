import GeneralLocator from '../locators/general.locator'
import ConfigActions from '../pages/supporting-methods/actions.config'
import GeneralActions from '../pages/supporting-methods/actions.general'


Cypress.Commands.add('forceClick', (locator)=>{
    cy.get(locator).click({force:true})
    cy.wait(300)
})

Cypress.Commands.add('typeText', (locator,text)=>{
    cy.get(locator)
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
    cy.get(GeneralLocator.toast_container())
    .should('contain', toast)
})

Cypress.Commands.add('checkHistoryLog', (historyHeader,description)=>{
    cy.wait(300)
    //check header that user created
    cy.get('[class="log-header-title"]')
    .eq(0)
    .should('contain', historyHeader)
    //check user that created log
    cy.get('[class="log-header-details"]')
    .eq(0)
    .should('contain', ConfigActions.set_username())
    //check date that log was created
    cy.get('[class="date"]')
    .eq(0)
    .should('contain', GeneralActions.getDate())
    //check what date should description have
    cy.get('[class="mat-card-content"]')
    .eq(0)
    .should('contain', description)
})
