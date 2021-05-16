import Environment from '../../config/environment'
import LoginConstants from '../../constants/login.constants'

export const environmentChanger = Environment.environment248
export const userChanger = LoginConstants.user248
export const passwordChanger = LoginConstants.password248

var ConfigAction={

    setEnvironment: function(){
       return environmentChanger
    },

    setUsername: function (){
        return userChanger
    },

    setPassword: function (){
        return passwordChanger
    }

}
export default ConfigAction