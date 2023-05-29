Feature: Save disabled

Background: 
Scenario: The user leaves the event ID field blank and the save button remains disabled at the bottom

Given the user is on "Event" page
Then the event ID field is empty
Then the save button at the bottom is disabled