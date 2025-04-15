# NO necesitas # language: en, porque inglés es el default
Feature: Simple Google Search

  Scenario: Search for a specific word on Google
    Given the user is on the Google homepage
    When the user enters the word "Playwright" in the search bar
    And the user presses Enter
    Then the results page title should be related to "Playwright"