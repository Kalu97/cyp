Feature: Ecomerce website: OrangeHRM


    # Scenario: validate the login credentials
    #     Given visit orange HRM site
    #     And fill the username
    #     And fill the password
    #     When click on login button
    #     Then validate the dashboard text

    Scenario: validate the invalid login credentials
        Given visit orange HRM site
        And fill the usernames
        And fill the passwords
        When click on login button
        Then validate the Error Message