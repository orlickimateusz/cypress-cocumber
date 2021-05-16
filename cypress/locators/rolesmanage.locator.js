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

    permissionInput: function(){
        return '[data-qa-id="dropdown-search-input"]'
    },

    permissionListbox: function (){
        return '[role="listbox"]'
                
    },

    searchInput: function(){
        return 'input[type="text"]'
    },
    
    searchContainer: function(){
        return '[class="ag-center-cols-container"]'
    },

    fastSearch: function(){
        return '.search'
        //return '[class="mat-tooltip-trigger project-icon action-icon search"]'
    },

    rolePermissionsRow: function (){
        return '[class="mat-row cdk-row ng-star-inserted"]'
    },

    deleteRole: function(){
        return '[data-qa-id="remove-role-action"]'
    },

    editeRole: function(){
        return '[data-qa-id="edit-role-action"]'
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