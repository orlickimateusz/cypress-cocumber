var RolesManageLocator={
    addRole: function (){
        return '[data-qa-id="add-role-action"]'
    },
    roleName: function(){
        return '[data-qa-id="role-name"]'
    },

    description: function(){
        return '[data-qa-id="role-description"]'
    },

    permission_input: function(){
        return '[data-qa-id="dropdown-search-input"]'
    },

    permission_listbox: function (){
        return '[role="listbox"]'
                
    },

    save_button: function(){
        return '[data-qa-id="save-button"]'
    },

    delete_button: function(){
        return '[data-qa-id="save-button"]'
    },

    search_input: function(){
        return 'input[type="text"]'
    },
    
    search_container: function(){
        return '[class="ag-center-cols-container"]'
    },

    fast_search: function(){
        return '.search'
        //return '[class="mat-tooltip-trigger project-icon action-icon search"]'
    },

    role_permissions_row: function (){
        return '[class="mat-row cdk-row ng-star-inserted"]'
    },

    deleteRole: function(){
        return '[data-qa-id="remove-role-action"]'
    },

    deleteButton: function(){
        return '[data-qa-id="save-button"]'
    },

    editeRole: function(){
        return '[data-qa-id="edit-role-action"]'
    },

    editeButton: function(){
        return '[data-qa-id="save-button"]'
    },
// kontener z dodanymi uprawnieniami
    glsdropdContainer: function (){
        return '[data-qa-id="gls-dropdown"]'
    },
    
    addPermissionsToRole: function(){
        return '[data-qa-id="add-permissions-to-roles-action"]'
    },

    deletePermissionsFromRole: function(){
        return '[data-qa-id="delete-permissions-from-roles-action"]'    
    },

    roleInput: function (){
        return '[data-qa-id="dropdown-search-input"]'
    }

}

export default RolesManageLocator