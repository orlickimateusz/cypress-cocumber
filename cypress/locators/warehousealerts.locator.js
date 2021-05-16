var WarehouseAlertsLocator ={
    addWarehouseAlert: function(){
        return '[data-qa-id="ADD_WAREHOUSE_ALERT"]'
    },
    addAlertService: function(){
        return '[data-qa-id="ADD_ALERT_SERVICE"]'
    },
    editeWarehouseAlert: function(){
        return '[data-qa-id="EDIT_WAREHOUSE_ALERT"]'
    }, 
    deleteWarehouseAlert: function(){
        return '[data-qa-id="DELETE_WAREHOUSE_ALERT"]'
    }, 
    deactiveWarehouseAlert: function(){
        return '[data-qa-id="DEACTIVATE_WAREHOUSE_ALERT"]'
    }, 
    addDepotsToWarrehouseAlert: function(){
        return '[data-qa-id="ADD_DEPOTS_TO_WAREHOUSE_ALERT"]'
    }, 
    activateWarehouseAlert: function(){
        return '[data-qa-id="ACTIVATE_WAREHOUSE_ALERT"]'
    }, 
    deleteDepotsFromAlert: function(){
        return '[data-qa-id="DELETE_DEPOTS_FROM_ALERT"]'
    },  
    alertName: function(){
        return '[data-qa-id="name"]'
    }, 
    alertLevel: function(){
        return '[data-qa-id="alert-level"]'
    }, 
    soundSignal: function(){
        return '[data-qa-id="sound-signal"]'
    }, 
    vibrationSignal: function(){
        return '[data-qa-id="vibration"]'
    }, 
    communicatContent: function(){
        return '[data-qa-id="message"]'
    }, 
    speechSynthesizer: function() {
        return '[data-qa-id="speech-synthesizer"]'
    },
    enableByEventReasons: function() {
        return '[data-qa-id="enable-by-event-reasons"]'
    },
    disableByEventReason: function() {
        return '[data-qa-id="disable-by-event-reasons"]'
    },
    services: function() {
        return '[data-qa-id="services"]'
    },
    alertNameInput: function() {
        return '[data-qa-id="alert-name-input"]'
    },
    alertMessageInput: function() {
        return '[data-qa-id="alert-message-input"]'
    },
    typeOfAlertSelect: function() {
        return '[data-qa-id="type-of-alert-select"]'
    },
    alertLevelSelect: function() {
        return '[data-qa-id="alert-level-select"]'
    },

}

export default WarehouseAlertsLocator