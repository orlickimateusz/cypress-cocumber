var LoginLocator ={
    username : function(){
        return '[id="username"]'
    },

    password : function (){
        return '[id="password"]'
    },

    loginButton: function (){
        return '[data-qa-id="login-button"]'
    },

    alert: function(){
        return '[class="alert text-center"]'
    },

    logoutButton: function(){
        return '[data-qa-id="logout-button"]'
    },
    loginLogo: function(){
        return '[class="logo"]'
    },

    hamburgerMenu: function(){
        return '[class="project-icon hamburger"]'
    },
    logoutComunnicatContainer: function(){
        return '[class="mat-dialog-content"]'
    }
    
}

export default LoginLocator