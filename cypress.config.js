const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on);
        },
        baseUrl: "https://commitquality.com/",
        viewportHeight: 550,
        viewportWidth: 660,
        experimentalStudio: false, //record commands
        watchForFileChanges: false, //auto-run
        reporter: "cypress-mochawesome-reporter",
        "reporterOptions": {
            "charts": true,
            "overwrite": true,
            "html": true,
            "json": true,
            "reportDir": "cypress/report",
        },
    },
});