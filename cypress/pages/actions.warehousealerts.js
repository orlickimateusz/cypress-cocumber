import WarehouseAlertsLocator from "../locators/warehousealerts.locator"
import GeneralLocator from '../locators/general.locator'
import GeneralActions from '../pages/supporting-methods/actions.general'

var WarehouseAlertsActions={

chooseAlertLevel: function(alertLevel){
    cy.forceClick(WarehouseAlertsLocator.alertLevel())
    cy.get('[class="mat-option-text"]').contains(alertLevel).click()
    cy.get(WarehouseAlertsLocator.alertLevel()).should('have.text', alertLevel)   
},

clearAllCreatedAlerts: function(){
    cy.intercept('POST', 'https://10.250.0.248/settings/v1/protected/warehouse/alert/criteria').as('getItem')
    cy.typeText(GeneralLocator.simpleSearchInput(),'TC_')
    cy.forceClick(GeneralLocator.simpleSearchIcon())
    cy.wait('@getItem').then(reqResp=>{
         const numberOfAddedAlerts = reqResp.response.body.content.length
            if(numberOfAddedAlerts > 0){
                 for(var i=0; i<numberOfAddedAlerts;i++){
                     GeneralActions.chooseFromSearchContainer('TC_')
                     cy.wait(500)
                     cy.forceClick(WarehouseAlertsLocator.deleteWarehouseAlert())
                     cy.forceClick(GeneralLocator.saveButton())
                     GeneralActions.checkToast('Usunięto alert pomyślnie')
            }
        }    
    })
 },

}
export default WarehouseAlertsActions