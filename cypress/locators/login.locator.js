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
    login_logo: function(){
        return '[class="logo"]'
    },

    hamburgerMenu: function(){
        return '[class="project-icon hamburger"]'
    }
    
}

export default LoginLocator