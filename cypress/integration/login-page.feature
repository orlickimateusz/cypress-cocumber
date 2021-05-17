Feature: Login to application

    I want to Login to application

    Scenario: TC_01: Succesfully Login to application
        Given I Navigate to the website
        When Login view is visible
        Then I type the username
        When I type the password
        And I click the login button
        Then I verify am I logged


    Scenario: TC_02: Unsuccesfully login to application. Wrong username or password
        Given I Navigate to the website
        When Login view is visible
        Then I type the wrong username
        When I type the password
        And I click the login button
        Then I got communicat, that I type Wrong username or password

    
    Scenario: TC_03: Logout from the application
        Given I Navigate to the website
        When Login view is visible
        Then I type the username
        When I type the password
        And I click the login button
        Then I verify am I logged
        When I click logout button
        Then I see "Czy jesteś pewien, że chcesz się wylogować?" communicat
        When I confirm logout
        Then I veryfi am I logout
        