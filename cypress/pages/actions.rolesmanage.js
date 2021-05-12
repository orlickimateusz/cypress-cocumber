import SystemRoles from '../constants/roles.manage/systemroles.constants'
import GeneralLocator from '../locators/general.locator'
import RolesManageLocator from '../locators/rolesmanage.locator'
import GeneralActions from '../pages/supporting-methods/actions.general'

var RolesManageAction={
    
    choose_permission: function(permission){
        cy.get(RolesManageLocator.permission_listbox())
        .children()
        .contains(permission)
        .click({force:true})
    },

    choose_role_from_search: function (rolename){
        cy.get(GeneralLocator.fast_search_container())
        .contains(rolename)
        .click({force: true})
    },

    check_existing_permission: function (permission){
        cy.get(RolesManageLocator.role_permissions_row())
        .should('contain.text', permission)
        cy.wait(100)
    },

    open_historylog: function(){
        cy.get('[class="mat-tab-label-content"]')
        .contains('Historia')
        .click()
    },

    open_functionlog: function(){
        cy.get('[class="mat-tab-label-content"]')
        .contains("Czynności")
        .click()
    },

    clearAllCreatedRoles: function(){
        cy.intercept('GET', '/identity-management/v1/protected/role?**&phrase=TC_').as('getItem')
        cy.typeText(RolesManageLocator.search_input(),'TC_')
        cy.forceClick(RolesManageLocator.fast_search())
        cy.wait('@getItem').then(reqResp=>{
            const numberOfAddedRoles = reqResp.response.body.content.length
                if(numberOfAddedRoles > 0){
                    for(var i=0; i<numberOfAddedRoles;i++){
                        RolesManageAction.choose_role_from_search('TC_')
                        cy.wait(500)
                        cy.forceClick(RolesManageLocator.deleteRole())
                        cy.forceClick(RolesManageLocator.save_button())
                        cy.forceClick(RolesManageLocator.save_button())
                }
            }    
        })
     },
   
    checkAllPermissionsForSystemRoles: function(){
        const numOfSystemRoles = Object.values(SystemRoles).length
            for(var i=0;i<numOfSystemRoles;i++){
                GeneralActions.clearInput(RolesManageLocator.search_input())
                cy.typeText(RolesManageLocator.search_input(), SystemRoles[i].rolename)
                cy.forceClick(RolesManageLocator.fast_search())
                this.choose_role_from_search(SystemRoles[i].rolename)
                const expectedNumOfPermissionsInRole = Object.values(SystemRoles[i].permissions).length
                cy.wait(500)
                cy.get('[class="mat-row cdk-row ng-star-inserted"]')
                    .then((obj)=>{
                        const numOfPermissionsInRole = obj.length
                        expect(numOfPermissionsInRole).to.equal(expectedNumOfPermissionsInRole, 
                            "Oczekuje aby liczba uprawnień roli w APK była równa liczbnie uprawnień roli w dokumetancji") 
                            })
                for(var j=0; j<expectedNumOfPermissionsInRole;j++){
                    this.check_existing_permission(SystemRoles[i].permissions[j])     
                }
            }   
        }

}

export default RolesManageAction