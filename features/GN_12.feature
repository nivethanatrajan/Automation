Feature: Invalid hazard field suggestions

Background: 
Scenario: The user enters invalid characters in the hazard field and there will be no suggestions displayed

Given the "Hazard" field is visible Hazard_screen
When the user enters "#$" in the hazard field
Then "No Results Found" message will be displayed