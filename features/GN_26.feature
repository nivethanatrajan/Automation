Feature: IHR assessment dropdown selection
Background:
Scenario: The user selects an item from IHR assessment dropdown

Given the IHR assessment dropdown is visible
When the user clicks IHR assessment dropdown
When the user selects "not applicable"
Then not applicable should be displayed in the field