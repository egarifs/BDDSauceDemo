@Checkout
  Feature: Checkout
    As a user i want to successfully checkout product

  Scenario: Check when user can checkout the product
    Given User already on website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    And User Chosess backpack, backlight and click Chart button
    And User input "Ega" as first name, "Rijki" as last name "45554" as postal code
    And User see Total Payment "Total: $43.18" on page checkout overview and click finish button
    Then User redirect to checkout complete page

