import SystemRoles from '../constants/roles.manage/systemroles.constants'
import GeneralLocator from '../locators/general.locator'
import RolesManageLocator from '../locators/rolesmanage.locator'
import GeneralAction from '../pages/supporting-methods/actions.general'

var RolesManageAction={

checkExistingPermission: function (permission){
    cy.get(RolesManageLocator.rolePermissionsRow())
        .should('contain.text', permission)
    cy.wait(100)
    },

clearAllCreatedRoles: function(){
    cy.intercept('GET', '/identity-management/v1/protected/role?**&phrase=TC_').as('getItem')
    cy.typeText(RolesManageLocator.searchInput(),'TC_')
    cy.forceClick(RolesManageLocator.fastSearch())
    cy.wait('@getItem').then(reqResp=>{
        const numberOfAddedRoles = reqResp.response.body.content.length
            if(numberOfAddedRoles > 0){
                for(var i=0; i<numberOfAddedRoles;i++){
                    GeneralAction.chooseFromSearchContainer('TC_')
                    cy.wait(500)
                    cy.forceClick(RolesManageLocator.deleteRole())
                    cy.forceClick(GeneralLocator.saveButton())
                    cy.forceClick(GeneralLocator.saveButton())
                    GeneralAction.checkToast('Usunięto rolę')
                }
            }    
        })
    },
   
checkAllPermissionsForSystemRoles: function(){
    const numOfSystemRoles = Object.values(SystemRoles).length
        for(var i=0;i<numOfSystemRoles;i++){
            cy.typeText(RolesManageLocator.searchInput(), SystemRoles[i].rolename)
            cy.forceClick(RolesManageLocator.fastSearch())
            GeneralAction.chooseFromSearchContainer(SystemRoles[i].rolename)
            const expectedNumOfPermissionsInRole = Object.values(SystemRoles[i].permissions).length
            cy.wait(500)
            cy.get('[class="mat-row cdk-row ng-star-inserted"]')
                .then((obj)=>{
                    const numOfPermissionsInRole = obj.length
                    expect(numOfPermissionsInRole).to.equal(expectedNumOfPermissionsInRole, 
                        "Oczekuje aby liczba uprawnień roli w APK była równa liczbnie uprawnień roli w dokumetancji") 
                        })
            for(var j=0; j<expectedNumOfPermissionsInRole;j++){
                this.checkExistingPermission(SystemRoles[i].permissions[j])     
            }
        }   
    },

    

}

export default RolesManageAction