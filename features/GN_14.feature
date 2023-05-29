Feature: Invalid syndrome field suggestions

Background: 
Scenario: The user enters invalid characters in the syndrome field and no results found message will be displayed

Given the "Syndrome" field should be visible Syndrome_screen
When the user enters "r#$" in the syndrome field
Then "No Results Found" should be displayed Syndrome