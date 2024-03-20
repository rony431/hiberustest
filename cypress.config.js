const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// const { pa11y } = require("@cypress-audit/pa11y");
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
        });
        on("task", {
            baseUrl: 'https://petstore.swagger.io/v2/pet',
            testFiles: "**/*.feature",
            ignoreTestFiles: ["*.ts", "*.md"],
            viewportWidth : 1400,
            viewportHeight : 1000,
            defaultCommandTimeout: 10000,
            pageLoadTimeout: 100000,
            chromeWebSecurity: false, 
            modifyObstructiveCode:false,
            retries: 2,
            failOnStatusCode: false,
            lighthouse: lighthouse(),
         });
        },  
  },
})
