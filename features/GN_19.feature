Feature: Invalid operation name

Background: 
Scenario: The user enters invalid text in operation name field

Given the "Operation name" field is visible
When the user enters "adsfadsf"
Then "No Results Found" should be displayed Operation_name