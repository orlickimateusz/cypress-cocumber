import { isUndefined } from "lodash";
import LoginLocator from "../../locators/login.locator";


var GeneralActions={

getDate: function() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();

    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    var date = day+'-'+month+'-'+year+' '
     return date;
    },

 getTime: function() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
     if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
     }
    var time = hour+':'+minute  
     return time;
    },

deleteFieldsWBuckets: function (contener){
     cy.get(contener)
        .then((el)=>{
         const element = el.text()
         if (element.length >0)
            {cy.get('[class="mat-tooltip-trigger project-icon action-icon delete ng-star-inserted"]').click({multiple:true})}
        })
     },
      
navigateToView: function(firstMenuButton, secondMenuButton){
     cy.get(LoginLocator.hamburgerMenu()).click()
     
     if(isUndefined(secondMenuButton)){
          cy.get('[class="icon-text"]').contains(firstMenuButton).click({force: true})
     }else {
     cy.get('[class="icon-text"]').contains(firstMenuButton).click({force: true})
     cy.get('[class="icon-text"]').contains(secondMenuButton).click({force: true})
     }
},

checkPageHeader: function(pageHeader){
     cy.get('[class="title-text"]')
     .should('have.text', pageHeader)
},

clearInput: function(locator){
     cy.get(locator).clear()
        .should('be.empty')
},

doesntExist: function(locator, text){
          cy.get(locator)
            .should('not.contain.text', text)
}

} 
export default GeneralActions