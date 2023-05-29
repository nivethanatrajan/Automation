Feature: Next date in Calendar

Background:
Scenario: When the user clicks the date info received by WHO field the calender opens and the user selects the next date from the current date

Given the date info received by who field should be visible

When user clicks the field

When the user selects the next days date from the calendar

Then the respective date should be visible in the field