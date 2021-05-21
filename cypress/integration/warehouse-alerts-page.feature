Feature: Feature in Warehouse Alerts


    TC_01: Add event.reason alert
    TC_02: Modify event.reason alert
    TC_03: Delete event.reason alert
    TC_04: Deactivate alert
    TC_05: Activate alert
    TC_06: Add depot to alert
    TC_07: Delete depot from alert
    TC_08: Field alert name validation in add event.reason alert
    TC_09: Field alert level validation in add event.reason alert
    TC_10: Field content message validation in add event.reason alert
    TC_11: Activating event.reason already exist

    Background: Navigate to the website

        Given I Navigate to the website
        When Login view is visible
        Then I login on user with Managing warehouse alerts
        When I verify am I logged
        Then I navigate to warehouse alerts page
        When I check if I am on "Alerty Magazynowe" page
        Then I close extended search alert window


    Scenario: TC_01: Add event.reason alert

        When I click add event.reason alert button
        Then I type "TC_01 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_01 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_01 Alert event.reason" from search container
        Then I check is "TC_01 Alert event.reason" contains:
            | TC_01 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | ERROR                            |
        When I open history log
        Then I check is log history for "TC_01 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_01 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |


    Scenario: TC_02: Modify event.reason alert

        When I click add event.reason alert button
        Then I type "TC_02 Alert event.reason" into alert name field
        When I choose "INFO" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_02 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_02 Alert event.reason" from search container
        Then I check is "TC_02 Alert event.reason" contains:
            | TC_02 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | INFO                             |
        When I open history log
        Then I check is log history for "TC_02 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_02 Alert event.reason         |
            | Poziom alertu:  INFO                            |
            | Treść alertu:  The content of the alert message |
        When I get back to functions
        Then I click modify event.reason alert button
        And I type "TC_02 Alert event.reason modified" into alert name field
        And I choose "WARNING" alert level
        And I uncheck sound signal
        And I uncheck vibration signal
        Then I type "The alert message has been modified."
        When I uncheck speech synthesizer signal
        And I click save button
        Then I check is toast "Edytowano alert pomyślnie" appear
        And I type a "TC_02 Alert event.reason modified" to fast search
        And I click search button
        And I choose "TC_02 Alert event.reason modified" from search container
        Then I check is "TC_02 Alert event.reason" contains:
            | TC_02 Alert event.reason modified    |
            | event.reason                         |
            | The alert message has been modified. |
            | Aktywny                              |
            | WARNING                              |
        When I open history log
        Then I check is log history for "TC_02 Alert event.reason modified" contains:
            | Zmieniono alert                                     |
            | Nazwa alertu:  TC_02 Alert event.reason modified    |
            | Poziom alertu:  WARNING                             |
            | Treść alertu:  The alert message has been modified. |


    Scenario: TC_03: Delete event.reason alert

        When I click add event.reason alert button
        Then I type "TC_03 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_03 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_03 Alert event.reason" from search container
        Then I check is "TC_03 Alert event.reason" contains:
            | TC_03 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | ERROR                            |
        When I open history log
        Then I check is log history for "TC_03 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_03 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
        When I get back to functions
        And I click delete alert button
        And I click delete button
        Then I check is toast "Usunięto alert pomyślnie" appear


    Scenario: TC_04: Deactivate alert

        When I click add event.reason alert button
        Then I type "TC_04 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_04 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_04 Alert event.reason" from search container
        Then I check is "TC_04 Alert event.reason" contains:
            | TC_04 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | ERROR                            |
        When I open history log
        Then I check is log history for "TC_04 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_04 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
        When I get back to functions
        Then I click deactivate alert button
        When I confirm to deactivate alert
        Then I check is toast "Dezaktywowano alert pomyślnie" appear
        And I type a "TC_04 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_04 Alert event.reason" from search container
        Then I check is "TC_04 Alert event.reason" contains:
            | TC_04 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Nieaktywny                       |
            | ERROR                            |
        When I open history log
        Then I check is log history for "TC_04 Alert event.reason" contains:
            | Deaktywowano alert                      |
            | Nazwa alertu:  TC_04 Alert event.reason |


    Scenario: TC_05: Activate alert

        When I click add event.reason alert button
        Then I type "TC_05 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_05 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_05 Alert event.reason" from search container
        Then I check is "TC_05 Alert event.reason" contains:
            | TC_05 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | ERROR                            |
        When I open history log
        Then I check is log history for "TC_05 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_05 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
        When I get back to functions
        Then I click deactivate alert button
        When I confirm to deactivate alert
        Then I check is toast "Dezaktywowano alert pomyślnie" appear
        And I type a "TC_05 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_05 Alert event.reason" from search container
        Then I check is "TC_05 Alert event.reason" contains:
            | TC_05 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Nieaktywny                       |
            | ERROR                            |
        When I open history log
        Then I check is log history for "TC_05 Alert event.reason" contains:
            | Deaktywowano alert                      |
            | Nazwa alertu:  TC_05 Alert event.reason |
        When I get back to functions
        Then I click activate alert button
        When I confirm to activate alert
        Then I check is toast "Aktywowano alert pomyślnie" appear
        And I type a "TC_05 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_05 Alert event.reason" from search container
        Then I check is "TC_05 Alert event.reason" contains:
            | TC_05 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | ERROR                            |
        When I open history log
        Then I check is log history for "TC_05 Alert event.reason" contains:
            | Aktywowano alert                        |
            | Nazwa alertu:  TC_05 Alert event.reason |

    Scenario: TC_06: Add depot to alert

        When I click add event.reason alert button
        Then I type "TC_06 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_06 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_06 Alert event.reason" from search container
        Then I check is "TC_06 Alert event.reason" contains:
            | TC_06 Alert event.reason          |
            | event.reason                      |
            | The content of the alert message  |
            | Aktywny                           |
            | ERROR                             |
            | Brak depotów dla wybranego alertu |
        When I open history log
        Then I check is log history for "TC_06 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_06 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
        When I get back to functions
        Then I click add depot to alert button
        When I type "PL1000" depot
        And I choose "PL1000"
        And I click save button
        Then I check is toast "Dodano depot(y) do alertu pomyślnie" appear
        When I type a "TC_06 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_06 Alert event.reason" from search container
        Then I check is "TC_06 Alert event.reason" contains:
            | TC_06 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | ERROR                            |
            | PL1000                           |
        When I open history log
        Then I check is log history for "TC_06 Alert event.reason" contains:
            | Dodano depot do listy depotów alertu            |
            | Nazwa alertu:  TC_06 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
            | Dodany depot:  PL1000                           |


    Scenario: TC_07: Delete depot from alert

        When I click add event.reason alert button
        Then I type "TC_07 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_07 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_07 Alert event.reason" from search container
        Then I check is "TC_07 Alert event.reason" contains:
            | TC_07 Alert event.reason          |
            | event.reason                      |
            | The content of the alert message  |
            | Aktywny                           |
            | ERROR                             |
            | Brak depotów dla wybranego alertu |
        When I open history log
        Then I check is log history for "TC_07 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_07 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
        When I get back to functions
        Then I click add depot to alert button
        When I type "PL1000" depot
        And I choose "PL1000"
        And I click save button
        Then I check is toast "Dodano depot(y) do alertu pomyślnie" appear
        When I type a "TC_07 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_07 Alert event.reason" from search container
        Then I check is "TC_07 Alert event.reason" contains:
            | TC_07 Alert event.reason         |
            | event.reason                     |
            | The content of the alert message |
            | Aktywny                          |
            | ERROR                            |
            | PL1000                           |
        When I open history log
        Then I check is log history for "TC_07 Alert event.reason" contains:
            | Dodano depot do listy depotów alertu            |
            | Nazwa alertu:  TC_07 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
            | Dodany depot:  PL1000                           |
        When I get back to functions
        Then I click delete depot from alert button
        When I type "PL1000" depot
        And I choose "PL1000"
        And I click save button
        Then I check is toast "Usunięto depot(y) z alertu" appear


    Scenario: TC_08: Field alert name validation in add event.reason alert

        When I click add event.reason alert button
        And I choose "ERROR" alert level
        And I type "The content of the alert message"
        And I click save button
        Then I check is "Pole jest wymagane" message appear


    Scenario: TC_09: Field alert level validation in add event.reason alert

        When I click add event.reason alert button
        And I type "TC_09 Alert event.reason" into alert name field
        And I type "The content of the alert message"
        And I click save button
        Then I check is "Pole jest wymagane" message appear


    Scenario: TC_10: Field content message validation in add event.reason alert

        When I click add event.reason alert button
        And I type "TC_10 Alert event.reason" into alert name field
        And I choose "ERROR" alert level
        And I click save button
        Then I check is "Pole jest wymagane" message appear



    Scenario: TC_11: Activating event.reason already exist

        Given I delete all alerts
        When I click add event.reason alert button
        Then I type "TC_11 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I type "3.0" into enable by event reasons field
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_11 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_11 Alert event.reason" from search container
        Then I check is "TC_11 Alert event.reason" contains:
            | TC_11 Alert event.reason          |
            | event.reason                      |
            | The content of the alert message  |
            | 3.0                               |
            | Aktywny                           |
            | ERROR                             |
            | Brak depotów dla wybranego alertu |
        When I open history log
        Then I check is log history for "TC_11 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_11 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
        When I get back to functions
        Then I click add event.reason alert button
        Then I type "TC_11 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I type "3.0" into enable by event reasons field
        And I click save button
        Then I check is toast "Event.reason jest użyty w innym alercie" appear
        And I check is "Event.reason jest użyty w innym alercie" message appear




    Scenario: TC_12: Service already exist
        Given I delete all alerts
        When I click add serwis alert button
        Then I type "TC_12 Alert event.reason" into alert name field
        When I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        And I type "COD" into enable by service field
        And I click save button
        Then I check is toast "Dodano alert pomyślnie" appear
        When I type a "TC_12 Alert event.reason" to fast search
        And I click search button
        And I choose "TC_12 Alert event.reason" from search container
        Then I check is "TC_12 Alert event.reason" contains:
            | TC_12 Alert event.reason          |
            | Serwis                            |
            | The content of the alert message  |
            | COD                               |
            | Aktywny                           |
            | ERROR                             |
            | Brak depotów dla wybranego alertu |
        When I open history log
        Then I check is log history for "TC_12 Alert event.reason" contains:
            | Dodano alert                                    |
            | Nazwa alertu:  TC_12 Alert event.reason         |
            | Poziom alertu:  ERROR                           |
            | Treść alertu:  The content of the alert message |
        When I get back to functions



    Scenario: After all - I delete all created data

        When I delete all created alerts
        Then I check does created "alerts" doesn't exist