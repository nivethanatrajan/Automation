Feature: Invalid country

Background: 
Scenario: The user enters invalid country name in the country and territory field

Given the "Country & territory" field should be visible Country_territory
When the user enters "dadf" in the country and territory field
Then "No Results Found" message should be displayed in the suggestion field