Feature: Feature in Warehouse Alerts


    Background: Navigate to the website

        Given I Navigate to the website
        When Login view is visible
        Then I login on user with Managing warehouse alerts
        When I verify am I logged
        And I navigate to warehouse alerts page
        Then I check if I am on "Alerty Magazynowe" page


    Scenario: Add event.reason alert

        When I close extended search alert window
        Then I click add event.reason alert button
        When I type "TC_01 Alert event.reason" into alert name field
        And I choose "ERROR" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        When I click save button
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


    Scenario: Modify event.reason alert

        When I close extended search alert window
        Then I click add event.reason alert button
        When I type "TC_02 Alert event.reason" into alert name field
        And I choose "INFO" alert level
        And I check sound signal
        And I check vibration signal
        And I type "The content of the alert message"
        And I check speech synthesizer signal
        When I click save button
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
        Then I get back to functions
        When I click modify event.reason alert button
        And I clear alert name input
        Then I type "TC_02 Alert event.reason modified" into alert name field
        When I choose "WARNING" alert level
        And I uncheck sound signal
        Then I uncheck vibration signal
        When I clear massage input
        Then I type "The alert message has been modified."
        When I uncheck speech synthesizer signal
        And I click save button
        Then I check is toast "Edytowano alert pomyślnie" appear
        When I clear search input
        Then I type a "TC_02 Alert event.reason modified" to fast search
        When I click search button
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


    Scenario: After all - I delete all created data

        Given I close extended search alert window
        When I delete all created alerts
        Then I check does created "alerts" doesn't exist