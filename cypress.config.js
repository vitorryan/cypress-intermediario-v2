const { fa } = require("@faker-js/faker");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  video: false,
});
