Feature: Invalid disease field suggestions

Background: 
Scenario: The user enters invalid characters in the disease field and no results should be displayed

Given the "Diseases" field should be visible
When the user enters "dafsf" in the disease field
Then "No Results Found" message is displayed Diseases