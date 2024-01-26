@urlDynamic
Feature:  dynamic pages

  Scenario: Create a url dynamic
    Given I am a user on "review" page with following search params
      | dropoffHour        | 10     |
      | dropoffMinute      | 00     |
      | pickupHour         | 10     |
      | pickupMinute       | 00     |
      | pickupLocation     | ORYT01 |
      | dropoffLocation    | ORYT01 |
      | countryOfResidence | FR     |
      | pickupDateInDay    | 03     |
      | dropoffDateInDay   | 05     |
    When I can not click on "Apply coupon code" button when the field is empty
    Then I enter a valid coupon code "HAPPYBD10" and the coupon is applied