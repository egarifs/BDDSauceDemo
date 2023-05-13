@Login
  Feature: Login
    As a user I want to login website sauce demo
  
#  Scenario: Normal login
#    Given User already on website sauce demo
#    When User input "standar_user"as userName and input "secret_sauce"as password
#    Then User already on sales page

  Scenario Outline: Invalid login

    Given User already on website sauce demo
    When User input "<userName>" as userName and input "<passwd>" as password
    Then User see error "<errorText>" on login page
  Examples:
    | userName     | passwd       | errorText                                                                 |
    | standar_user |              | Epic sadface: Password is required                                        |
    |              | secret_sauce | Epic sadface: Username is required                                        |
    | test         | test         | Epic sadface: Username and password do not match any user in this service |
