Feature: Login to application

    I want to Login to application

    Scenario: Succesfully Login to application
        Given I Navigate to the website
        When Login view is visible
        Then I type the username
        When I type the password
        And I click the login button
        Then I verify am I logged


    Scenario: Unsuccesfully login to application. Wrong username or password
        Given I Navigate to the website
        When Login view is visible
        Then I type the wrong username
        When I type the password
        And I click the login button
        Then I got communicat, that I type Wrong username or password
        