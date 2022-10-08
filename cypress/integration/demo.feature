Feature: Testing iberia website
  Scenario: Verify iberia booking process
    Given Test on iberia website
    When flight from Madrid to Barcelona
    Then select departure in 4 days
    And select return after 3 days 
    Then select 2 adults and 1 children 
    Then search flights
    Then select randomly the flight
