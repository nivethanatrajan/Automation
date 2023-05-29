Feature: Previous date in Calendar

Background:
Scenario: When the user clicks the date info received by WHO field the calender opens and the user selects the previous date from the current date

Given the date info received by who field is visible
When the user clicks the field
When the user selects the previous days date from the calendar
Then the respective date should be displayed in the field