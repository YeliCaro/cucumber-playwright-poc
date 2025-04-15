// cucumber.js
module.exports = {
    default: {
      requireModule: [],
      require: [
        'step_definitions/**/*.js',
        'support/**/*.js'
      ],
      format: ['progress', 'summary'],
    }
  }