const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: "https://commitquality.com/",
        viewportHeight: 550,
        viewportWidth: 660,
        experimentalStudio: false, //record commands
        watchForFileChanges: false, //auto-run
        reporter: "mochawesome",
        "reporterOptions": {
            "charts": true,
            "overwrite": true,
            "html": true,
            "json": true,
            "reportDir": "cypress/report",
        },
    },
});