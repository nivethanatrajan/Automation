Feature: Verification status dropdown selection

Background:
Scenario: The user selects an item from the verification status dropdown

Given the "Verification status" dropdown is cleared
When the user clicks verification status dropdown
When the user selects "Infomation Only"
Then "Infomation Only" should be displayed in the field