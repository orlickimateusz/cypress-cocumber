Feature: Features in manage roles





  Background: I navigate to the website

    Given I Navigate to the website
    When Login view is visible
    Then I login on user with Managing role and permissions
    When I verify am I logged
    And I navigate to role manage page
    Then I check if I am on "Zarządzanie rolami" page


  Scenario: TC_01: Add role

    When I click add role button
    And I type a "TC_01 Business Role"
    And I type "Role description" into description field
    And I clear dropdownelements
    And I type permission "Dane kuriera"
    Then I choose permission "Dane kuriera"
    When I click add button
    Then I check is toast " Dodano rolę " appear
    When I type a "TC_01 Business Role" to fast search
    And I click search button
    And I choose "TC_01 Business Role" from search container
    Then I check is "TC_01 Business Role" contain "Dane kuriera" permission
    When I open history log
    Then I check is log history for "TC_01 Business Role" contains:
      | Utworzono rolę             |
      | Uprawnienia:  Dane kuriera |


  Scenario: TC_02: Delete role

    When I click add role button
    And I type a "TC_02 Business Role"
    And I type "Role description" into description field
    And I clear dropdownelements
    And I type permission "Deaktywowanie użytkowników"
    Then I choose permission "Deaktywowanie użytkowników"
    When I click add button
    Then I check is toast " Dodano rolę " appear
    When I type a "TC_02 Business Role" to fast search
    And I click search button
    And I choose "TC_02 Business Role" from search container
    Then I check is "TC_02 Business Role" contain "Deaktywowanie użytkowników" permission
    When I open history log
    Then I check is log history for "TC_02 Business Role" contains:
      | Utworzono rolę                           |
      | Uprawnienia:  Deaktywowanie użytkowników |
    When I get back to functions
    And I click delete role button
    And I click save button
    And I click delete button
    Then I check is toast " Usunięto rolę " appear


  Scenario: TC_03: Edite role

    When I click add role button
    And I type a "TC_03 Business Role"
    And I type "Role description" into description field
    And I clear dropdownelements
    And I type permission "Dodawanie ról"
    Then I choose permission "Dodawanie ról"
    When I click add button
    Then I check is toast " Dodano rolę " appear
    When I type a "TC_03 Business Role" to fast search
    And I click search button
    And I choose "TC_03 Business Role" from search container
    Then I check is "TC_03 Business Role" contain "Dodawanie ról" permission
    When I open history log
    Then I check is log history for "TC_03 Business Role" contains:
      | Utworzono rolę              |
      | Uprawnienia:  Dodawanie ról |
    When I get back to functions
    Then I click edite role button
    When I type "New description value" into description field
    And I click edite button
    Then I check is toast " Edytowano rolę " appear
    When I open history log
    Then I check is log history for "TC_03 Business Role" contains:
      | Edytowano rolę        |
      | New description value |



  Scenario: TC_04: Add permissions to role

    When I click add role button
    And I type a "TC_04 Business Role"
    And I type "Role description" into description field
    And I clear dropdownelements
    And I type permission "Deaktywowanie użytkowników"
    Then I choose permission "Deaktywowanie użytkowników"
    When I click add button
    Then I check is toast " Dodano rolę " appear
    When I type a "TC_04 Business Role" to fast search
    And I click search button
    And I choose "TC_04 Business Role" from search container
    Then I check is "TC_04 Business Role" contain "Deaktywowanie użytkowników" permission
    When I open history log
    Then I check is log history for "TC_04 Business Role" contains:
      | Utworzono rolę                           |
      | Uprawnienia:  Deaktywowanie użytkowników |
    When I get back to functions
    Then I click add permissions to role
    When I type a "TC_04 Business Role" to "add" permissions
    And I choose "TC_04 Business Role" to "add" permissions
    And I type a "Deaktywowanie użytkowników" permission to "add"
    Then I choose "Deaktywowanie użytkowników" to "add" permissions
    When I click add button
    Then I check is toast " Dodano uprawnienia do ról " appear
    When I open history log
    Then I check is log history for "TC_04 Business Role" contains:
      | Dodano uprawnienia do roli |
      | Deaktywowanie użytkowników |


  Scenario: TC_05: Delete permissions from role

    When I click add role button
    And I type a "TC_05 Business Role"
    And I type "Role description" into description field
    And I clear dropdownelements
    And I type permission "Dane kasjera"
    Then I choose permission "Dane kasjera"
    When I click add button
    Then I check is toast " Dodano rolę " appear
    When I type a "TC_05 Business Role" to fast search
    And I click search button
    And I choose "TC_05 Business Role" from search container
    Then I check is "TC_05 Business Role" contain "Dane kasjera" permission
    When I open history log
    Then I check is log history for "TC_05 Business Role" contains:
      | Utworzono rolę             |
      | Uprawnienia:  Dane kasjera |
    When I get back to functions
    Then I click delete permissions from role
    When I type a "TC_05 Business Role" to "delete" permissions
    And I choose "TC_05 Business Role" to "delete" permissions
    And I type a "Dane kasjera" permission to "delete"
    Then I choose "Dane kasjera" to "delete" permissions
    When I click delete button
    Then I check is toast " Usunięto uprawnienia z ról " appear
    When I open history log
    Then I check is log history for "TC_05 Business Role" contains:
      | Usunięto uprawnienia z roli |
      | Dane kasjera                |


  Scenario: TC_06: Check does all System Roles have their permissions

    Then Compare permissions with System role


  Scenario: After all - I delete all created data

    When I delete all created roles
    Then I check does created roles doesn't exist
