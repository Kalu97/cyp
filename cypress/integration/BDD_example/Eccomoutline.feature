Feature: End to End E-commerce Validation

    Scenario Outline: Login with multiple users
        Given Validate the Automation Site
        And User log-in using <username>
        And User log-in using password <password>
        When click on submit button
        Then Dashbord test should be visible

        Examples:
            | username               | password    |
            | kalumane99@gmail.com   | Kalu121597  |
            | rohanmane154@gmail.com | Rohan121597 |    