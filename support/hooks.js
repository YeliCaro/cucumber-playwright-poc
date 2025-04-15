// support/hooks.js
const { Before, After, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber');
const playwright = require('playwright');
const { CustomWorld } = require('./world'); // VS Code IntelliSense te ayuda con estas importaciones

let browser;

BeforeAll(async function () {
  // IntelliSense sugiere 'chromium', 'firefox', 'webkit' y métodos como 'launch'
  //browser = await playwright.chromium.launch({ headless: true });
  browser = await playwright.chromium.launch({ headless: false });
});

AfterAll(async function () {
  if (browser) {
    // IntelliSense sugiere '.close()' para el objeto browser
    await browser.close();
  }
});

Before(async function () {
  this.context = await browser.newContext(); // IntelliSense sugiere '.newContext()'
  this.page = await this.context.newPage();  // IntelliSense sugiere '.newPage()'
});

After(async function (scenario) {
  if (this.page) {
    if (scenario.result?.status === Status.FAILED) { // IntelliSense ayuda con 'Status.FAILED'
      try {
          const fs = require('fs');
          const path = require('path');
          const screenshotDir = path.join(__dirname, '..', 'screenshots');
          if (!fs.existsSync(screenshotDir)){
              fs.mkdirSync(screenshotDir, { recursive: true });
          }
          const screenshotPath = path.join(screenshotDir, `failure_${Date.now()}.png`);
          // IntelliSense sugiere '.screenshot()' y sus opciones
          const screenshot = await this.page.screenshot({ path: screenshotPath, fullPage: true });
          this.attach(screenshot, 'image/png');
          console.log(`Screenshot guardado en: ${screenshotPath}`);
      } catch (error) {
          console.error("Error al tomar o guardar screenshot:", error);
      }
    }
    await this.page.close(); // IntelliSense sugiere '.close()'
  }
  if (this.context) {
    await this.context.close(); // IntelliSense sugiere '.close()'
  }
});