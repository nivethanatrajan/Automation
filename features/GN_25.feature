Feature: IHR assessment dropdown suggestion

Background:
Scenario: The user enters text in the IHR assessment dropdown

Given the "IHR assessment" dropdown should be visible IHR_assessment
When the user clicks the IHR assessment dropdown
When the user enters "not"
Then "Not applicable" should be displayed in the dropdown