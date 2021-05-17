Feature: Feature in Warehouse Alerts


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
        When I clear alert name input
        And I type "TC_02 Alert event.reason modified" into alert name field
        And I choose "WARNING" alert level
        And I uncheck sound signal
        And I uncheck vibration signal
        And I clear massage input
        Then I type "The alert message has been modified."
        When I uncheck speech synthesizer signal
        And I click save button
        Then I check is toast "Edytowano alert pomyślnie" appear
        When I clear search input
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
        Then I check is toast "Deaktywowano alert pomyślnie" appear
        When I clear search input
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
        Then I check is toast "Deaktywowano alert pomyślnie" appear
        When I clear search input
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
        When I clear search input
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


    Scenario: After all - I delete all created data

        When I delete all created alerts
        Then I check does created "alerts" doesn't exist