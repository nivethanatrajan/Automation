Feature: Default date info received by WHO
Background:
Scenario: The date info received by WHO field contains the date of the current day

Given date info received by who field is visible
Then the date in the field matches the date of the current day