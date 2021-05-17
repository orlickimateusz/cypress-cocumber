import { isUndefined } from "lodash";
import LoginLocator from "../../locators/login.locator";
import GeneralLocator from '../../locators/general.locator'
import WarehouseAlertsLocator from '../../locators/warehousealerts.locator'
import ConfigAction from "./actions.config";


var GeneralAction={

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
          cy.get(firstMenuButton).click({force: true})
          
     }else {
          cy.get(firstMenuButton).click({force: true})
          cy.get(secondMenuButton).click({force: true})
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
     },

checkCheckbox: function(locator){
     cy.get(locator)
          .find('input')
          .should('not.be.checked')
          .check({force: true})
          .should('be.checked')
     },

uncheckCheckbox: function(locator){
     cy.get(locator)
          .find('input')
          .should('be.checked')
          .uncheck({force: true})
          .should('not.be.checked')
     },
 
checkToast: function(toast){
     cy.get(GeneralLocator.toastContainer())
          .should('contain', toast)
     },

chooseFromSearchContainer: function (item){
     cy.get(GeneralLocator.fastSearchContainer())
          .contains(item)
          .click({force: true})
     },
// bedzie działało jeśli bedą dodane QA ID 
isItInSearchContainer: function(element){
     GeneralAction.clearInput(GeneralLocator.simpleSearchInput())
     cy.typeText(GeneralLocator.simpleSearchInput(), element)
     cy.forceClick(GeneralLocator.simpleSearchIcon())
     GeneralAction.doesntExist(GeneralLocator.emptySearchContainer(), element)
     },

openHistorylog: function(){
     cy.get('[class="mat-tab-label-content"]')
          .contains('Historia')
          .click()
     },
  
openFunctionlog: function(){
     cy.get('[class="mat-tab-label-content"]')
          .contains("Czynności")
          .click()
     },     

checkData: function(data){
     const numbOfData = data.rawTable.length
     
     for (var i=0;i<numbOfData;i++){
          cy.get(GeneralLocator.dataCard())
               .should('contain.text', data.rawTable[i][0])
          cy.wait(100)
          }
     },

checkHistoryLog: function(data){
     const numbOfData = data.rawTable.length
     cy.wait(300)
     for (var i=0;i<numbOfData;i++){
          cy.get('gls-generic-log-tile')
               .find('[class="card"]')
               .eq(0)
               .should('contain.text', data.rawTable[i][0])
          }
     cy.get('gls-generic-log-tile')
          .find('[class="card"]')
          .eq(0)
          .should('contain.text', ConfigAction.setUsername()) 
     cy.get('gls-generic-log-tile')
          .find('[class="card"]')
          .eq(0)
          .should('contain.text', GeneralAction.getDate())    
     },

checkCommunicat: function(locator, communicat){
     cy.get(locator)
          .should('contain', communicat)
     }     


} 
export default GeneralAction