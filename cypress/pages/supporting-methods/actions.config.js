import Environment from '../../config/environment'
import LoginConstants from '../../constants/login.constants'

export const environmentChanger = Environment.environment248
export const userChanger = LoginConstants.user248
export const passwordChanger = LoginConstants.password248

var ConfigActions={

    set_environment: function(){
       return environmentChanger
    },

    set_username: function (){
        return userChanger
    },

    set_password: function (){
        return passwordChanger
    }

}
export default ConfigActions