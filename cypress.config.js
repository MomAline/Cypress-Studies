const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "oackuy",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 900,
    viewportWidth: 1440,
    baseUrl: 'https://buger-eats-qa.vercel.app',
  },
});