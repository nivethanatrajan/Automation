Feature: Cancel even creation

Background:
Scenario: The user cancels the creation of event

Given the cancel button is visible
When the user clicks the cancel button at the bottom
Then the administration page should be displayed