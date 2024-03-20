Feature: Testing pet API
  Scenario: Verify pet swagger 
    Given Create new pet
    When find a pet by status
    When find a pet by id
    And pet is updated
    Then pet is deleted
