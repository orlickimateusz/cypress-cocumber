/// <reference types="cypress" />

import LoginAction from '../../pages/actions.login'
import ConfigAction from '../../pages/supporting-methods/actions.config'
import RolesManageLocator from '../../locators/rolesmanage.locator'
import MenuButtons from '../../locators/menubuttons.locator'
import RolesManageAction from '../../pages/actions.rolesmanage'
import GeneralLocator from '../../locators/general.locator'
import GeneralAction from '../../pages/supporting-methods/actions.general'


When('I click add role button', ()=>{
    cy.forceClick(RolesManageLocator.addRole())
})

When('I click add button', ()=>{
    cy.forceClick(GeneralLocator.saveButton())
})
//zmienic na WarehouseAlertsLocator.simpleSearchInput() jak dodadza QA ID
When('I type a {string} to fast search', (role)=>{
    cy.typeText(RolesManageLocator.searchInput(),role)
})

When('I click delete role button', ()=>{
    cy.forceClick(RolesManageLocator.deleteRole())
})

When('I open history log', ()=>{
    GeneralAction.openHistorylog()
})

When('I click edite role button', ()=>{
    cy.forceClick(RolesManageLocator.editeRole())
})

When('I get back to functions', ()=>{
    GeneralAction.openFunctionlog()
})

When('I delete all created roles', ()=>{
    RolesManageAction.clearAllCreatedRoles()
})
//zmienic na metode isItInSearchContainer jak dodadzą QA ID
Then('I check does created roles doesn\'t exist', ()=>{
    //GeneralAction.clearInput(RolesManageLocator.searchInput())
    cy.typeText(RolesManageLocator.searchInput(),'TC_')
    cy.forceClick(RolesManageLocator.fastSearch())
    GeneralAction.doesntExist(GeneralLocator.emptySearchContainer(), 'TC_' )
})

Then('Compare permissions with System role', ()=>{
    RolesManageAction.checkAllPermissionsForSystemRoles()
})

Then('I choose permission {string}',(permission)=>{
    GeneralAction.chooseFromRolebox(permission)
})

Then('I check is toast {string} appear',(toast)=>{
    GeneralAction.checkToast(toast)
})

Then('I login on user with Managing role and permissions', ()=>{
    LoginAction.enterUsername(ConfigAction.setUsername())
    LoginAction.enterPassword(ConfigAction.setPassword())
    LoginAction.clickLogin()
})

Then('I click delete permissions from role', ()=>{
    cy.forceClick(RolesManageLocator.deletePermissionsFromRole())
})

Then('I check is {string} contain {string} permission', (role,permission)=>{
    RolesManageAction.checkExistingPermission(permission)
})

Then('I click add permissions to role', ()=>{
    cy.forceClick(RolesManageLocator.addPermissionsToRole())
})

And('I clear dropdownelements', ()=>{
    GeneralAction.deleteFieldsWBuckets(RolesManageLocator.glsdropdContainer())
})

And('I type a {string} to {string} permissions' , (roleName,func)=>{
    cy.typeTextWithLocatorIndex(RolesManageLocator.roleInput(),0, roleName)
}),

And('I choose {string} to {string} permissions', (roleName,func)=>{
    GeneralAction.chooseFromRolebox(roleName)
})

And('I navigate to role manage page', ()=>{
    GeneralAction.navigateToView(MenuButtons.settings(), MenuButtons.roleManage())
})

And('I type a {string} permission to {string}', (permission,func)=>{
    cy.typeTextWithLocatorIndex(RolesManageLocator.roleInput(),1,permission)
}),

And('I type a {string}', (roleName)=>{
    cy.typeText(RolesManageLocator.roleName(),roleName)
})

And('I type {string} into description field', (roleDescription)=>{
    cy.typeText(RolesManageLocator.description(),roleDescription)
})

And('I type permission {string}', (permission)=>{
    cy.typeText(RolesManageLocator.permissionInput(), permission)
    cy.wait(1000)
})
//zmienic na GeneralLocator.simpleSearchIcon() jak dodadza QA ID
And('I click search button', ()=>{
    cy.forceClick(RolesManageLocator.fastSearch())
})

And('I choose {string} from search container', (role)=>{
    GeneralAction.chooseFromSearchContainer(role)
})

And('I click save button', ()=>{
    cy.forceClick(GeneralLocator.saveButton())
})

And('I click delete button', ()=>{
    cy.forceClick(GeneralLocator.deleteButton())
})

// And('I clear description', ()=>{
//     GeneralAction.clearInput(RolesManageLocator.description())
// })

And('I click edite button', ()=>{
    cy.forceClick(GeneralLocator.editeButton())
})