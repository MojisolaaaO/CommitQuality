describe("Drag & Drop", () => {
    it('verify that user can drag and drop an element', () => {
        cy.visit('https://commitquality.com/practice-drag-and-drop')
        cy.get(".small-box").drag(".large-box")
        cy.get(".large-box").should("have.text", "Success!")
            // cy.screenshot()

    })
})