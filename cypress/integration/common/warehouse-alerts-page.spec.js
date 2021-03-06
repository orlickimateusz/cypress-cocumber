/// <reference types="cypress" />
import GeneralAction from '../../pages/supporting-methods/actions.general'
import MenuButtons from '../../locators/menubuttons.locator'
import GeneralLocator from '../../locators/general.locator'
import WarehouseAlertsLocator from '../../locators/warehousealerts.locator'
import WarehouseAlertsAction from '../../pages/actions.warehousealerts'
import LoginAction from '../../pages/actions.login'
import ConfigAction from '../../pages/supporting-methods/actions.config'



Given('I close extended search alert window', ()=>{
    cy.wait(200)
    cy.get('[class="mat-dialog-title"]').should('have.text', 'Wyszukiwarka alertów')
    cy.get(GeneralLocator.cancelButton()).click()
})

Given('I delete all alerts', ()=>{
    WarehouseAlertsAction.clearAllCreatedAlerts('   ')
})

When('I click modify event.reason alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.editeWarehouseAlert())
})

When('I uncheck speech synthesizer signal', ()=>{
    GeneralAction.uncheckCheckbox(WarehouseAlertsLocator.speechSynthesizer())
})

When('I type {string} into alert name field', (alertName)=>{
    cy.typeText(WarehouseAlertsLocator.alertName(),alertName)
    expect(WarehouseAlertsLocator.alertName()).to.not.be.empty
})

When('I click delete alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.deleteWarehouseAlert())
})

When('I confirm to deactivate alert', ()=>{
    cy.forceClick(GeneralLocator.deactivateButton())
})

When('I confirm to activate alert', ()=>{
    cy.forceClick(GeneralLocator.activateButton())
})

When('I type {string} depot', (depot)=>{
    cy.typeText(GeneralLocator.dropdownInput(),depot).click()
})

When('I delete all created alerts', ()=>{
    WarehouseAlertsAction.clearAllCreatedAlerts('TC_')
})

When('I click add serwis alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.addAlertService())
})

Then('I click add depot to alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.addDepotsToWarrehouseAlert())
})

Then('I click delete depot from alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.deleteDepotsFromAlert())
})

Then('I click activate alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.activateWarehouseAlert())
})

Then('I click add event.reason alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.addWarehouseAlert())
})

Then('I login on user with Managing warehouse alerts', ()=>{
    LoginAction.enterUsername(ConfigAction.setUsername())
    LoginAction.enterPassword(ConfigAction.setPassword())
    LoginAction.clickLogin()
})

Then('I check is {string} contains:',(name, data)=>{
    GeneralAction.checkData(data)
})

Then('I check is log history for {string} contains:', (name, data)=>{
    GeneralAction.checkHistoryLog(data)
})

Then('I click deactivate alert button', ()=>{
    cy.forceClick(WarehouseAlertsLocator.deactiveWarehouseAlert())
})

Then('I check does created {string} doesn\'t exist', (name)=>{
    GeneralAction.isItInSearchContainer('TC_')
})

Then('I check is {string} message appear', (message)=>{
    GeneralAction.checkCommunicat('[id="warehouse-add-edit-alert"]' ,message)
})

And('I choose {string} alert level', (alertLevel)=>{
    WarehouseAlertsAction.chooseAlertLevel(alertLevel)
})

And('I check sound signal', ()=>{
    GeneralAction.checkCheckbox(WarehouseAlertsLocator.soundSignal())
})

And('I check vibration signal', ()=>{
    GeneralAction.checkCheckbox(WarehouseAlertsLocator.vibrationSignal())
})

And('I type {string}', (message)=>{
    cy.typeText(WarehouseAlertsLocator.communicatContent(),message)
})

And('I check speech synthesizer signal', ()=>{
    GeneralAction.checkCheckbox(WarehouseAlertsLocator.speechSynthesizer())
})

And('I uncheck sound signal', ()=>{
    GeneralAction.uncheckCheckbox(WarehouseAlertsLocator.soundSignal())
})

And('I uncheck vibration signal', ()=>{
    GeneralAction.uncheckCheckbox(WarehouseAlertsLocator.vibrationSignal())
})

And('I navigate to warehouse alerts page', ()=>{
    GeneralAction.navigateToView(MenuButtons.settings(), MenuButtons.warehouseAlerts())
})

And('I choose {string}', (depot)=>{
    GeneralAction.chooseFromRolebox(depot)
})

And('I type {string} into enable by event reasons field', (eventNum)=>{
    cy.typeText(WarehouseAlertsLocator.enableByEventReasons(), eventNum)
})

And ('I type {string} into enable by service field', (serviceName)=>{
    cy.typeText(WarehouseAlertsLocator.services(), serviceName)
})