Feature: Verification status dropdown suggestion

Background:
Scenario: The user enters text in the verification status dropdown

Given the "Verification status" dropdown should be visible
When the user clicks the verification status dropdown
When the user enters "inf" Verification_status
Then "Infomation Only" should be displayed in the dropdown