/// <reference types="cypress" />

import ActionsLogin from '../../pages/actions.login'
import ActionsConfig from '../../pages/supporting-methods/actions.config'
import ActionsRolesManage from '../../pages/actions.rolesmanage'
import RolesManageLocator from '../../locators/rolesmanage.locator'
import GeneralActions from '../../pages/supporting-methods/actions.general'
import MenuButtons from '../../constants/menubuttons.constants'
import RolesManageAction from '../../pages/actions.rolesmanage'



When('I click add role button', ()=>{
    cy.forceClick(RolesManageLocator.addRole())
})

When('I click add button', ()=>{
    cy.forceClick(RolesManageLocator.save_button())
})

When('I type a {string} to fast search', (role)=>{
    cy.typeText(RolesManageLocator.search_input(),role)
})

When('I click delete role button', ()=>{
    cy.forceClick(RolesManageLocator.deleteRole())
})

When('I clear search input', ()=>{
    GeneralActions.clearInput(RolesManageLocator.search_input())
})

When('I open history log', ()=>{
    ActionsRolesManage.open_historylog()
})

When('I click edite role button', ()=>{
    cy.forceClick(RolesManageLocator.editeRole())
})

When('I get back to functions', ()=>{
    RolesManageAction.open_functionlog()
})

When('I delete all created roles', ()=>{
    RolesManageAction.clearAllCreatedRoles()
})

Then('I check does created roles doesn\'t exist', ()=>{
    GeneralActions.clearInput(RolesManageLocator.search_input())
    cy.typeText(RolesManageLocator.search_input(),'TC_')
    cy.forceClick(RolesManageLocator.fast_search())
    GeneralActions.doesntExist('[id="agGrid"]', 'TC_' )
})

Then('Compare permissions with System role', ()=>{
    RolesManageAction.checkAllPermissionsForSystemRoles()
})

Then('I choose permission {string}',(permission)=>{
    ActionsRolesManage.choose_permission(permission)
})

Then('I check is toast {string} appear',(toast)=>{
    cy.checkToast(toast)
})

Then('I login on user with Managing role and permissions', ()=>{
    ActionsLogin.enter_username(ActionsConfig.set_username())
    ActionsLogin.enter_password(ActionsConfig.set_password())
    ActionsLogin.click_login()
})

Then('I click delete permissions from role', ()=>{
    cy.forceClick(RolesManageLocator.deletePermissionsFromRole())
})

Then('I check is {string} contain {string} permission', (role,permission)=>{
    ActionsRolesManage.check_existing_permission(permission)
})

Then('I click add permissions to role', ()=>{
    cy.forceClick(RolesManageLocator.addPermissionsToRole())
})

Then('I check is log history for {string} contains {string} permission and {string} header' , (role,permission,header )=>{
    cy.checkHistoryLog(header,permission)
})

And('I clear dropdownelements', ()=>{
    GeneralActions.deleteFieldsWBuckets(RolesManageLocator.glsdropdContainer())
})

And('I type a {string} to {string} permissions' , (roleName,func)=>{
    cy.typeTextWithLocatorIndex(RolesManageLocator.roleInput(),0, roleName)
}),

And('I choose {string} to {string} permissions', (roleName,func)=>{
    ActionsRolesManage.choose_permission(roleName)
})

And('I navigate to role manage page', ()=>{
    GeneralActions.navigateToView(MenuButtons.settings, MenuButtons.roleManage)
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
    cy.typeText(RolesManageLocator.permission_input(), permission)
    cy.wait(1000)
})

And('I click search button', ()=>{
    cy.forceClick(RolesManageLocator.fast_search())
})

And('I choose {string} from rolebox', (role)=>{
    ActionsRolesManage.choose_role_from_search(role)
})

And('I click save button', ()=>{
    cy.forceClick(RolesManageLocator.save_button())
})

And('I click delete button', ()=>{
    cy.forceClick(RolesManageLocator.deleteButton())
})

And('I clear description', ()=>{
    GeneralActions.clearInput(RolesManageLocator.description())
})

And('I click edite button', ()=>{
    cy.forceClick(RolesManageLocator.editeButton())
})