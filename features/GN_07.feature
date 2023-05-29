Feature: Save disabled without mandatory field

Background: 
Scenario: The user fills the other fields and leaves the event ID blank

Given the "Hazard" field is visible Hazard1
When the user has filled hazard as "zoonosis"
Then the save button at the bottom should be disabled