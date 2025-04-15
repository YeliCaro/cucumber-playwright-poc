// step_definitions/google_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const GOOGLE_URL = 'https://www.google.com/';
const SEARCH_BOX_SELECTOR = 'textarea[name="q"], input[name="q"]';

// CAMBIADO: El string ahora está en inglés para coincidir con el Feature
Given('the user is on the Google homepage', async function () {
  await this.page.goto(GOOGLE_URL);
  try {
    const acceptButton = this.page.locator('button:has-text("Accept all"), button:has-text("Aceptar todo")').first();
    if (await acceptButton.isVisible({ timeout: 3000 })) {
      await acceptButton.click();
    }
  } catch (error) {
    console.log("Diálogo de cookies no encontrado/necesario o ya gestionado.");
  }
});

// CAMBIADO: El string ahora está en inglés
When('the user enters the word {string} in the search bar', async function (searchTerm) {
  await this.page.locator(SEARCH_BOX_SELECTOR).fill(searchTerm);
});

// CAMBIADO: El string ahora está en inglés
When('the user presses Enter', async function () {
  await this.page.locator(SEARCH_BOX_SELECTOR).press('Enter');
});

// CAMBIADO: El string ahora está en inglés
Then('the results page title should be related to {string}', async function (expectedTerm) {
  await expect(this.page).toHaveTitle(new RegExp(expectedTerm, 'i'), { timeout: 10000 });
});