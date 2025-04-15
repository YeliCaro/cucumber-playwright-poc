// support/world.js
const { setWorldConstructor, World, IWorldOptions } = require('@cucumber/cucumber');
const playwright = require('playwright');

class CustomWorld extends World {
  browser = null;
  context = null;
  page = null;

  constructor(options) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);