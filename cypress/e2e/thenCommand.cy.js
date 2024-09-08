describe("contact form", () => {
    // Test case to verify that the user can fill the contact form
    it("verify that user can fill the form", () => {
        // Visit the contact form page
        cy.visit("https://commitquality.com/practice-contact-form")

        // Select the input field with the ID 'name' and type 'Moji' into it
        cy.get("#name").type("Moji").then((textbox) => {
            expect(textbox).to.have.value("Moji")

            // Print the current value of the textbox to the console
            //console.log(textbox.val())
        })
    })

    // Test case to verify that the user can assert the content of the first row in a table
    it("Verify that user can assert the first row", () => {
        // Visit the main page containing the product list table
        cy.visit("https://commitquality.com/")

        // Get all table rows within the product list table and return the first row
        const topRow = cy.get(".product-list-table tbody tr").then((rows) => {
            return rows[0] // Return the first row from the list of rows
        })

        // Assert that the first row contains the specific text
        topRow.then((row) => {
            // Use 'expect' to check that the text of the row is as expected
            expect(row).to.have.text("11Product 2152021-02-01")
        })
    })

    //chaining
    it.only("Verify that user can assert the first row", () => {
        cy.visit("https://commitquality.com/")

        const topRow = cy.get(".product-list-table tbody tr").then((rows) => {
            return rows[1]
        }).then((row) => {
            expect(row).to.have.text("10Product 1102021-01-01")
        })
    })
})